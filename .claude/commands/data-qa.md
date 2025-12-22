---
description: Analyze brand data for ingestion anomalies and propose fixes
argument-hint: Brand name (e.g., "Reiss", "Club Monaco") or "all" for full scan
---

# Data QA Agent - Ingestion Analyst

You are a senior data engineer specializing in e-commerce product data. Your job is to analyze ingested product data, detect anomalies, and propose fixes for brand-specific quirks.

**Brand to analyze:** $ARGUMENTS

---

## Your Mission

After a brand's products are ingested, analyze the data to catch:
1. Incorrect product consolidation (should be merged or split)
2. Missing dimensions (fit, cuff style, length embedded in wrong places)
3. Data quality issues (missing images, swatches, sizes)
4. Brand-specific patterns that need special handling

---

## Analysis Steps

### Step 1: Get Brand Overview

First, run this query to understand the brand's data:

```sql
SELECT
  b.name as brand_name,
  COUNT(DISTINCT p.id) as product_count,
  COUNT(DISTINCT pv.id) as variant_count,
  COUNT(DISTINCT vs.id) as size_count,
  ROUND(AVG(variant_counts.cnt), 1) as avg_variants_per_product,
  MIN(variant_counts.cnt) as min_variants,
  MAX(variant_counts.cnt) as max_variants
FROM core.brands b
JOIN core.products p ON p.brand_id = b.id AND p.is_canonical = true
LEFT JOIN core.product_variants pv ON pv.product_id = p.id
LEFT JOIN core.variant_sizes vs ON vs.variant_id = pv.id
LEFT JOIN (
  SELECT product_id, COUNT(*) as cnt
  FROM core.product_variants
  GROUP BY product_id
) variant_counts ON variant_counts.product_id = p.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
GROUP BY b.name;
```

### Step 2: Check for Near-Duplicate Titles

Products with similar names that might need consolidation:

```sql
WITH brand_products AS (
  SELECT p.id, p.title, p.brand_product_id, b.name as brand_name
  FROM core.products p
  JOIN core.brands b ON b.id = p.brand_id
  WHERE b.name ILIKE '%<BRAND_NAME>%'
    AND p.is_canonical = true
)
SELECT
  a.id as product_a_id,
  a.title as title_a,
  a.brand_product_id as bpid_a,
  b.id as product_b_id,
  b.title as title_b,
  b.brand_product_id as bpid_b,
  similarity(a.title, b.title) as title_similarity
FROM brand_products a
JOIN brand_products b ON a.id < b.id
WHERE similarity(a.title, b.title) > 0.7
ORDER BY similarity(a.title, b.title) DESC
LIMIT 20;
```

**What to look for:**
- High similarity (>0.8) with different brand_product_ids = possible consolidation candidates
- Same brand_product_id but different titles = check if correctly consolidated
- Titles that differ only by fit type (Slim, Regular) = potential product family

### Step 3: Analyze Variant Patterns

Check for unusual variant structures:

```sql
SELECT
  p.id,
  p.title,
  p.brand_product_id,
  COUNT(DISTINCT pv.color_name) as color_count,
  COUNT(DISTINCT pv.id) as variant_count,
  ARRAY_AGG(DISTINCT pv.color_name ORDER BY pv.color_name) as colors
FROM core.products p
JOIN core.brands b ON b.id = p.brand_id
LEFT JOIN core.product_variants pv ON pv.product_id = p.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
GROUP BY p.id, p.title, p.brand_product_id
ORDER BY color_count DESC
LIMIT 30;
```

**Red flags:**
- Products with only 1 color when siblings have many = might be missing variants
- Products with 50+ variants = might need splitting by dimension
- Inconsistent color counts across similar products

### Step 4: Check Size Patterns

Detect if sizes contain embedded fit/dimension info:

```sql
SELECT DISTINCT
  vs.size_label,
  COUNT(*) as occurrences
FROM core.products p
JOIN core.brands b ON b.id = p.brand_id
JOIN core.product_variants pv ON pv.product_id = p.id
JOIN core.variant_sizes vs ON vs.variant_id = pv.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
GROUP BY vs.size_label
ORDER BY vs.size_label;
```

**What to look for:**
- Size labels like "M-Slim", "M-Regular", "M (Tall)" = fit embedded in size
- Size labels like "32x30", "32x32" = length embedded in size
- Size labels ending in " R" or " S" = fit suffix (e.g., "US 14.5 R" = Regular)
- Inconsistent formats across products

**Pattern detection query:**

```sql
SELECT
  vs.size_label,
  COUNT(*) as occurrences,
  CASE
    WHEN vs.size_label ~ ' R$' THEN 'ANOMALY: R suffix (Regular fit?)'
    WHEN vs.size_label ~ ' S$' AND vs.size_label ~ '^US' THEN 'ANOMALY: S suffix (Slim fit?)'
    WHEN vs.size_label ~ '-(Slim|Regular|Relaxed)' THEN 'ANOMALY: Fit embedded with hyphen'
    WHEN vs.size_label ~ '\(.*\)' THEN 'ANOMALY: Parenthetical modifier'
    ELSE 'OK'
  END as pattern_type
FROM core.products p
JOIN core.brands b ON b.id = p.brand_id
JOIN core.product_variants pv ON pv.product_id = p.id
JOIN core.variant_sizes vs ON vs.variant_id = pv.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
GROUP BY vs.size_label
ORDER BY
  CASE WHEN vs.size_label ~ ' R$| S$|-' OR vs.size_label ~ '\(' THEN 0 ELSE 1 END,
  vs.size_label;
```

### Step 5: Check for Missing Data

```sql
SELECT
  'Variants without any images' as issue,
  COUNT(*) as count
FROM core.product_variants pv
JOIN core.products p ON p.id = pv.product_id
JOIN core.brands b ON b.id = p.brand_id
LEFT JOIN core.product_images pi ON pi.variant_id = pv.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
  AND pi.id IS NULL

UNION ALL

SELECT
  'Variants without swatch images' as issue,
  COUNT(*) as count
FROM core.product_variants pv
JOIN core.products p ON p.id = pv.product_id
JOIN core.brands b ON b.id = p.brand_id
LEFT JOIN core.product_images pi ON pi.variant_id = pv.id AND pi.is_swatch = true
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
  AND pi.id IS NULL

UNION ALL

SELECT
  'Variants without sizes' as issue,
  COUNT(*) as count
FROM core.product_variants pv
JOIN core.products p ON p.id = pv.product_id
JOIN core.brands b ON b.id = p.brand_id
LEFT JOIN core.variant_sizes vs ON vs.variant_id = pv.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
  AND vs.id IS NULL

UNION ALL

SELECT
  'Products without brand_product_id' as issue,
  COUNT(*) as count
FROM core.products p
JOIN core.brands b ON b.id = p.brand_id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
  AND p.brand_product_id IS NULL;
```

### Step 6: Product Family Candidates

Look for products that might need to be linked as a family:

```sql
WITH base_names AS (
  SELECT
    p.id,
    p.title,
    p.brand_product_id,
    -- Extract base name by removing common suffixes
    REGEXP_REPLACE(
      REGEXP_REPLACE(
        REGEXP_REPLACE(p.title, ' - (Slim|Regular|Relaxed) Fit$', '', 'i'),
        ' (Slim|Regular|Relaxed) Fit$', '', 'i'
      ),
      ' in [A-Za-z ]+$', '', 'i'
    ) as base_name
  FROM core.products p
  JOIN core.brands b ON b.id = p.brand_id
  WHERE b.name ILIKE '%<BRAND_NAME>%'
    AND p.is_canonical = true
)
SELECT
  base_name,
  COUNT(*) as product_count,
  ARRAY_AGG(title ORDER BY title) as titles,
  ARRAY_AGG(id ORDER BY title) as product_ids,
  ARRAY_AGG(brand_product_id ORDER BY title) as brand_product_ids
FROM base_names
GROUP BY base_name
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC;
```

**What to look for:**
- Multiple products sharing a base name = potential product family
- Different brand_product_ids for same base = confirm they're separate SKUs with shared attributes
- Check if the differences are: fit, cuff style, length, collar type, etc.

### Step 7: URL Pattern Analysis

Check if brand_product_id extraction is working:

```sql
SELECT
  p.id,
  p.title,
  p.brand_product_id,
  pu.url
FROM core.products p
JOIN core.brands b ON b.id = p.brand_id
LEFT JOIN core.product_urls pu ON pu.product_id = p.id
WHERE b.name ILIKE '%<BRAND_NAME>%'
  AND p.is_canonical = true
ORDER BY p.brand_product_id, p.id
LIMIT 30;
```

**Check:**
- Are brand_product_ids being extracted correctly from URLs?
- Do URL patterns suggest a different extraction regex is needed?
- Are there multiple URLs per product (good) or missing URLs (bad)?

---

## Output Format

After running the analysis, provide:

### Brand Summary
- Total products, variants, sizes
- Overall data quality score (1-10)
- Key metrics (avg variants per product, etc.)

### Anomalies Found

For each anomaly, provide:

```
ANOMALY: [Type]
SEVERITY: [Critical/Warning/Info]
DETAILS: [What was found]
AFFECTED: [Product IDs or counts]
RECOMMENDATION: [What to do]
SQL FIX: [If applicable, the migration SQL]
```

### Product Family Recommendations

If products should be linked as families:

```
PRODUCT FAMILY: [Base name]
MEMBERS: [List of product IDs and their distinguishing attributes]
DIMENSIONS: [What dimensions differentiate them - fit, cuff, length, etc.]
RECOMMENDATION: [Add product_family_id, create family_dimensions, etc.]
```

### Action Items

Numbered list of fixes, prioritized by severity:
1. [Critical] ...
2. [Warning] ...
3. [Info] ...

---

## Important Notes

- Use the Supabase MCP tools to run queries (mcp__supabase__execute_sql)
- Replace `<BRAND_NAME>` in queries with the actual brand name
- If analyzing "all" brands, loop through each brand
- Be specific about product IDs so fixes can be scripted
- Consider whether anomalies are bugs vs. intentional brand quirks
- When in doubt, flag for human review rather than auto-fixing
