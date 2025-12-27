# Database Schema Refactoring Plan

## Goal
Transform the fs-core database from its current inconsistent state into a clean, scalable architecture that supports cross-brand size recommendations and proper product/variant modeling.

## Current Problems

| Issue | Impact | Priority |
|-------|--------|----------|
| Club Monaco: 51 products, 51 variants (1:1) | Can't show all colors for a product | High |
| Uniqlo: 32 products, 32 variants (1:1) | Same as above | High |
| Size formats vary wildly | Can't recommend sizes across brands | High |
| Banana Republic uses `public.products` | Inconsistent schema, broken lookups | Medium |

## User Decisions Made
- **Size mapping**: Full dimensional (waist×length, neck×sleeve, letter sizes by category)
- **Product model**: Consolidate products (merge color-per-product into single products with variants)
- **Banana Republic**: Migrate to core schema now
- **Consolidation key**: Use `brand_product_id` (brand's canonical product identifier) instead of `base_name` for consolidation. This handles title variations like "Johnny Collar Polo" vs "Johnny Collar Polo Shirt".

## Scalable Consolidation Approach (Added 2025-12-21)

**Problem**: Title-based consolidation fails for near-matches ("Johnny Collar Polo" vs "Johnny Collar Polo Shirt").

**Solution**: Extract the brand's product identifier from product codes:

| Brand | Pattern | Example |
|-------|---------|---------|
| Club Monaco | 9-digit numeric | `795806094` from `johnny-collar-polo-795806094-001` |
| Uniqlo | `E` + 6 digits | `E461189` from `E461189-000` |
| J.Crew | Already correct | Uses style codes properly |

**Schema**:
```sql
ALTER TABLE core.products ADD COLUMN brand_product_id TEXT;
CREATE INDEX idx_products_brand_product_id ON core.products(brand_id, brand_product_id);
```

**Consolidation**: Group by `(brand_id, brand_product_id)` instead of `base_name`.

---

## Phase 1: Size Normalization Schema
**Estimated: 4-6 hours**

### New Tables

```sql
-- 1A: Size categories
CREATE TABLE core.size_categories (
    id SERIAL PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,          -- 'tops', 'pants', 'dress_shirts', 'shoes'
    name TEXT NOT NULL,
    dimensions JSONB DEFAULT '[]'::jsonb -- e.g., ["waist", "length"]
);

-- 1B: Canonical sizes
CREATE TABLE core.canonical_sizes (
    id SERIAL PRIMARY KEY,
    category_id INT REFERENCES core.size_categories(id),
    canonical_label TEXT NOT NULL,      -- "32x32", "M", "15/33"
    sort_key INT NOT NULL,
    dimensions JSONB,                   -- {"waist": 32, "length": 32}
    display_name TEXT,                  -- "32\" waist, 32\" length"
    UNIQUE(category_id, canonical_label)
);

-- 1C: Brand-specific mappings
CREATE TABLE core.brand_size_mappings (
    id SERIAL PRIMARY KEY,
    brand_id BIGINT REFERENCES core.brands(id),
    category_id INT REFERENCES core.size_categories(id),
    raw_label TEXT NOT NULL,            -- "30W x 32L", "30/32", etc.
    canonical_size_id INT REFERENCES core.canonical_sizes(id),
    notes TEXT,
    UNIQUE(brand_id, category_id, raw_label)
);

-- 1D: Add FK to variant_sizes
ALTER TABLE core.variant_sizes
ADD COLUMN canonical_size_id INT REFERENCES core.canonical_sizes(id);
```

### Seed Data
- **Tops**: XS, S, M, L, XL, XXL, XXXL, plus tall variants (M-T, L-T, etc.)
- **Pants**: All combinations of waist 28-42 × length 28-36
- **Dress shirts**: Neck 14-18 × sleeve 32-37
- **Shoes**: US 6-16 including half sizes

### Size Normalization Function
Create `core.normalize_size_label(brand_id, category, raw_label)` that:
1. Determines category from product category string
2. Normalizes format: "30W x 32L" → "30x32", "28X32" → "28x32"
3. Looks up or creates canonical mapping

### Testing
- Run normalization against all existing `variant_sizes`, measure match rate
- Target: >90% of sizes should resolve to canonical

---

## Phase 2: Product Consolidation Schema
**Estimated: 3-4 hours**

### Schema Changes

```sql
-- Add consolidation tracking
ALTER TABLE core.products
ADD COLUMN canonical_product_id BIGINT REFERENCES core.products(id),
ADD COLUMN is_canonical BOOLEAN DEFAULT true,
ADD COLUMN merged_at TIMESTAMPTZ;

CREATE INDEX idx_products_canonical ON core.products(canonical_product_id)
WHERE canonical_product_id IS NOT NULL;

-- Audit log for consolidation
CREATE TABLE core.product_consolidation_log (
    id SERIAL PRIMARY KEY,
    source_product_id BIGINT NOT NULL,
    target_product_id BIGINT NOT NULL,
    consolidation_type TEXT NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT now()
);
```

### Consolidation Function
Create `core.consolidate_products(source_id, target_id, reason)` that:
1. Moves all variants from source to target product
2. Moves all URLs from source to target product
3. Updates user_garments to point to target
4. Marks source as non-canonical with merged_at timestamp
5. Logs the consolidation for audit/rollback

---

## Phase 3: Club Monaco Consolidation
**Estimated: 4-5 hours**

### Identify Groups
```sql
-- Find products to consolidate by base_name
SELECT base_name,
       ARRAY_AGG(id ORDER BY id) as product_ids,
       COUNT(*) as count
FROM core.products
WHERE brand_id = (SELECT id FROM core.brands WHERE slug = 'clubmonaco')
GROUP BY base_name
HAVING COUNT(*) > 1;
```

### Expected Consolidations
| Base Name | Current Products | After |
|-----------|------------------|-------|
| Johnny Collar Polo Shirt | 5 (152, 208, 219, 231, 242) | 1 with 4+ variants |
| Connor Tech Pant | 3 | 1 with 3 variants |
| Connor 5-Pocket Pant | 3 | 1 with 3 variants |
| + ~7 more | 2 each | 1 each |

### Execution Script
```sql
DO $$
DECLARE r RECORD; source_id BIGINT;
BEGIN
    FOR r IN
        SELECT base_name,
               MIN(id) as canonical_id,
               ARRAY_AGG(id ORDER BY id) as all_ids
        FROM core.products
        WHERE brand_id = (SELECT id FROM core.brands WHERE slug = 'clubmonaco')
        GROUP BY base_name
        HAVING COUNT(*) > 1
    LOOP
        FOREACH source_id IN ARRAY r.all_ids LOOP
            IF source_id != r.canonical_id THEN
                PERFORM core.consolidate_products(source_id, r.canonical_id, 'color_variant');
            END IF;
        END LOOP;
    END LOOP;
END $$;
```

### Testing
- Before: `product_lookup` for CM polo returns 1 color
- After: Same lookup returns 4+ colors
- Verify `user_garments` still resolves correctly

---

## Phase 4: Uniqlo Consolidation
**Estimated: 3-4 hours**

Same approach as Club Monaco, but extract base code differently:
- Uniqlo format: `E461189-000` (product-color suffix)
- Extract: `REGEXP_REPLACE(product_code, '-\d{3}$', '')`

---

## Phase 5: Banana Republic Migration
**Estimated: 3-4 hours**

### Current State
- 4 products in `public.products` (wrong schema)
- Colors/sizes stored as JSON arrays, not variants

### Migration Script
```sql
DO $$
DECLARE r RECORD; v_product_id BIGINT; v_variant_id BIGINT; v_color TEXT; v_size TEXT;
BEGIN
    -- For each BR product in public.products
    FOR r IN SELECT * FROM public.products WHERE brand_id = (SELECT id FROM core.brands WHERE slug = 'banana-republic') LOOP
        -- Create core.products record
        INSERT INTO core.products (brand_id, product_code, title, category, gender)
        VALUES (r.brand_id, r.external_id, r.name, r.category, 'male')
        RETURNING id INTO v_product_id;

        -- Create variant per color
        FOR v_color IN SELECT jsonb_array_elements_text(r.colors_available::jsonb) LOOP
            INSERT INTO core.product_variants (product_id, color_name)
            VALUES (v_product_id, v_color)
            RETURNING id INTO v_variant_id;

            -- Add sizes to variant
            FOR v_size IN SELECT jsonb_array_elements_text(r.sizes_available::jsonb) LOOP
                INSERT INTO core.variant_sizes (variant_id, size_label, sort_key)
                VALUES (v_variant_id, v_size, 100);
            END LOOP;
        END LOOP;

        -- Create URL
        INSERT INTO core.product_urls (product_id, url, is_current)
        VALUES (v_product_id, r.product_url, true);
    END LOOP;
END $$;
```

### Fix Scraper
Update `/scrapers/pkg/utils/db_utils.py` to:
1. Use `core.products` instead of `public.products`
2. Create proper variant records instead of JSON arrays
3. Follow J.Crew pattern

---

## Phase 6: Scraper Updates
**Estimated: 6-8 hours**

### Club Monaco (`/scrapers/clubmonaco_full_ingest.py`)

**Problem**: Creates one product per API response (one color per product)

**Fix**:
1. Extract base product code: `johnny-collar-polo-795806094-138` → `johnny-collar-polo-795806094`
2. Check if canonical product exists with this base code
3. If yes: add variant to existing product
4. If no: create new product

**Key function to add**:
```python
def get_base_product_code(handle: str) -> str:
    """Extract base product code, removing color suffix."""
    match = re.match(r'^(.+-\d{9})-\d{3}$', handle)
    return match.group(1) if match else handle

def find_or_create_canonical_product(cur, brand_id, base_code, title, category):
    """Find existing canonical product or create new one."""
    cur.execute("""
        SELECT id FROM core.products
        WHERE brand_id = %s AND product_code LIKE %s || '%%'
          AND (is_canonical = true OR is_canonical IS NULL)
        LIMIT 1
    """, (brand_id, base_code))
    row = cur.fetchone()
    if row:
        return row[0]
    # Create new product
    ...
```

### Uniqlo (`/scrapers/uniqlo_full_ingest.py`)
Same pattern as Club Monaco fix.

### Reference Implementation
Use `/scrapers/jcrew_full_ingest.py` as the model - it correctly:
- Creates one product per style
- Creates multiple variants (one per color×fit)
- Each variant has multiple sizes via `variant_sizes`

---

## Phase 7: Update product_lookup Function
**Estimated: 2-3 hours**

### Changes Needed
```sql
-- Filter to only canonical products
WHERE p.id = v_product_id
  AND (p.is_canonical = true OR p.is_canonical IS NULL)

-- Colors now come from variants on same product
-- No more URL regex matching needed after consolidation
```

### Add variant_id to user_garments
```sql
ALTER TABLE core.user_garments
ADD COLUMN variant_id BIGINT REFERENCES core.product_variants(id);
```

---

## Execution Order

| Phase | Depends On | Can Break App? | Hours |
|-------|------------|----------------|-------|
| 1. Size schema | - | No (additive) | 4-6 |
| 2. Consolidation schema | - | No (additive) | 3-4 |
| 3. Club Monaco consolidation | 2 | No* | 4-5 |
| 4. Uniqlo consolidation | 2 | No* | 3-4 |
| 5. Banana Republic migration | 1, 2 | No | 3-4 |
| 6. Scraper updates | 3, 4, 5 | No | 6-8 |
| 7. product_lookup update | 3, 4 | Test first | 2-3 |

*Consolidation moves variants, but preserves product_ids via `canonical_product_id` link

**Total: 25-34 hours**

---

## Critical Files

### Database (Supabase migrations)
- New migration: `create_size_normalization_tables`
- New migration: `add_product_consolidation_columns`
- New migration: `consolidate_clubmonaco_products`
- New migration: `consolidate_uniqlo_products`
- New migration: `migrate_banana_republic_to_core`
- Update: `product_lookup` function

### Scrapers
- `/scrapers/clubmonaco_full_ingest.py` - Add `find_or_create_canonical_product()`
- `/scrapers/uniqlo_full_ingest.py` - Same pattern
- `/scrapers/pkg/utils/db_utils.py` - Fix BR to use core schema

### App
- `/lib/supabase.ts` - Add variant_id to SaveTryonParams (optional)

---

## Rollback Strategy

Each phase is reversible:
1. **Size tables**: DROP tables (no existing data affected)
2. **Consolidation columns**: ALTER TABLE DROP COLUMN
3. **Product consolidation**: Use `product_consolidation_log` to move variants back
4. **Scraper changes**: Git revert

---

## Testing Checkpoints

After each phase:
1. Run `product_lookup('https://clubmonaco.com/...')` - verify colors count
2. Check closet still shows saved items
3. Verify no orphaned variants or products

---

## Execution Approach: Sequential Sessions

**One phase per session**, commit after each, test between phases.

| Session | Phase | Focus |
|---------|-------|-------|
| 1 | Phase 1 | Size normalization tables + seed data |
| 2 | Phase 2 | Consolidation schema + function |
| 3 | Phase 3 | Club Monaco product consolidation |
| 4 | Phase 4 | Uniqlo product consolidation |
| 5 | Phase 5 | Banana Republic migration |
| 6 | Phase 6 | Scraper updates |
| 7 | Phase 7 | product_lookup + app updates |

**Start with Phase 1** - it's additive (new tables only), zero risk to existing functionality.
