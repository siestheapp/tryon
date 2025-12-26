/**
 * Raw Color Palette
 * 
 * These are the actual hex values - semantic meaning is applied in theme files.
 * Based on the Sies app color palette with soft blue primary.
 */

export const palette = {
  // Blues (primary)
  blue50: '#EEF3FF',
  blue100: '#D6E4FF',
  blue200: '#9DBDFF',
  blue300: '#7AA3FF',   // Primary (Sies soft blue)
  blue400: '#5C8AE6',
  blue500: '#4A7BD4',
  
  // Teals (secondary)
  teal50: '#E8F6F6',
  teal100: '#C5E8E9',
  teal200: '#9DD6D8',
  teal300: '#78C6C9',   // Secondary (Sies soft teal)
  teal400: '#5CAAAD',
  
  // Greens (success/perfect fit)
  green50: '#E8F8F0',
  green100: '#C6EDDA',
  green300: '#3AD69B',  // Fit: Perfect
  green500: '#2EB87F',
  
  // Corals (error/too small)
  coral50: '#FFF0F0',
  coral100: '#FFD4D4',
  coral300: '#FF6B6B',  // Fit: Too small
  coral500: '#E85555',
  
  // Golds (warning/too large)
  gold50: '#FFF9E6',
  gold100: '#FFECB3',
  gold300: '#FFD166',   // Fit: Too large
  gold500: '#E6B84D',
  
  // Neutrals (light mode)
  white: '#FFFFFF',
  gray50: '#F8F9FA',
  gray100: '#F1F3F5',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  black: '#000000',
  
  // Neutrals (dark mode specific)
  dark50: '#2A2A2A',
  dark100: '#1E1E1E',
  dark200: '#151822',
  dark300: '#0F1115',
} as const;

export type PaletteColor = keyof typeof palette;

