import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ Missing Supabase environment variables. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Types for product lookup
export interface SizeOption {
  label: string;    // e.g., "M-T" (what we save)
  display: string;  // e.g., "M (Tall)" (what we show)
}

export interface ProductLookupResult {
  product_id: number;
  selected_variant_id: number | null;  // The variant that matches the input URL
  brand: string;
  title: string;
  category: string;
  image_url: string | null;
  sizes: SizeOption[];
  colors: Array<{ variant_id: number; color_name: string; swatch_url: string | null; hex_code: string | null }>;
  fits: string[];  // e.g., ["Classic", "Slim", "Tall"]
}

// Types for try-on
export type FitRating = 'too_small' | 'just_right' | 'too_large';

// Body-part fit ratings
export type BodyPartFit = 'tight' | 'good' | 'loose'; // for chest, waist
export type LengthFit = 'short' | 'good' | 'long';    // for sleeves, length

export interface SaveTryonParams {
  product_id: number;
  size_label: string;
  overall_fit: FitRating;
  notes?: string;
  photo_path?: string;
  variant_id?: number;
  // Body-part feedback (only when overall_fit !== 'just_right')
  chest_fit?: BodyPartFit;
  waist_fit?: BodyPartFit;
  sleeve_fit?: LengthFit;
  length_fit?: LengthFit;
  // Ownership
  owns_garment?: boolean;
}

export interface SaveTryonResult {
  tryon_id: number;
  product_id: number;
  size_label: string;
  overall_fit: string;
  created_at: string;
}

export interface TryonHistoryItem {
  tryon_id: number;
  brand: string;
  title: string;
  category: string;
  image_url: string | null;
  size_label: string;
  overall_fit: string;
  owns_garment: boolean;
  color_name: string | null;  // The color variant they tried
  created_at: string;
}

// Filter type for closet/history views
export type TryonFilter = 'all' | 'owned' | 'tried';

// Product lookup function
export async function lookupProduct(url: string): Promise<ProductLookupResult | null> {
  console.log('[lookupProduct] Calling with URL:', url);
  const { data, error } = await supabase.rpc('product_lookup', { input_url: url });

  if (error) {
    console.error('Product lookup error:', error);
    throw error;
  }

  console.log('[lookupProduct] Full response:', JSON.stringify(data, null, 2));
  return data as ProductLookupResult | null;
}

// Save a try-on
export async function saveTryon(params: SaveTryonParams): Promise<SaveTryonResult> {
  const { data, error } = await supabase.rpc('save_tryon', {
    p_product_id: params.product_id,
    p_size_label: params.size_label,
    p_overall_fit: params.overall_fit,
    p_notes: params.notes ?? null,
    p_photo_path: params.photo_path ?? null,
    p_variant_id: params.variant_id ?? null,
    // Body-part feedback (optional)
    p_chest_fit: params.chest_fit ?? null,
    p_waist_fit: params.waist_fit ?? null,
    p_sleeve_fit: params.sleeve_fit ?? null,
    p_length_fit: params.length_fit ?? null,
    // Ownership
    p_owns_garment: params.owns_garment ?? false,
  });

  if (error) {
    console.error('Save tryon error:', error);
    throw error;
  }

  return data as SaveTryonResult;
}

// Get user's try-on history with optional filter
export async function getUserTryons(
  limit: number = 20,
  offset: number = 0,
  filter: TryonFilter = 'all'
): Promise<TryonHistoryItem[]> {
  const { data, error } = await supabase.rpc('get_user_tryons', {
    p_limit: limit,
    p_offset: offset,
    p_filter: filter,
  });
  
  if (error) {
    console.error('Get tryons error:', error);
    throw error;
  }
  
  return (data as TryonHistoryItem[]) ?? [];
}

export default supabase;



