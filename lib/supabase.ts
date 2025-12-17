import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
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
export interface ProductLookupResult {
  product_id: number;
  brand: string;
  title: string;
  category: string;
  image_url: string | null;
  sizes: string[];
  colors: Array<{ variant_id: number; color_name: string; swatch_url: string | null }>;
}

// Types for try-on
export type FitRating = 'too_small' | 'just_right' | 'too_large';

export interface SaveTryonParams {
  product_id: number;
  size_label: string;
  overall_fit: FitRating;
  notes?: string;
  photo_path?: string;
  variant_id?: number;
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
  created_at: string;
}

// Product lookup function
export async function lookupProduct(url: string): Promise<ProductLookupResult | null> {
  const { data, error } = await supabase.rpc('product_lookup', { input_url: url });
  
  if (error) {
    console.error('Product lookup error:', error);
    throw error;
  }
  
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
  });
  
  if (error) {
    console.error('Save tryon error:', error);
    throw error;
  }
  
  return data as SaveTryonResult;
}

// Get user's try-on history
export async function getUserTryons(
  limit: number = 20,
  offset: number = 0
): Promise<TryonHistoryItem[]> {
  const { data, error } = await supabase.rpc('get_user_tryons', {
    p_limit: limit,
    p_offset: offset,
  });
  
  if (error) {
    console.error('Get tryons error:', error);
    throw error;
  }
  
  return (data as TryonHistoryItem[]) ?? [];
}

export default supabase;



