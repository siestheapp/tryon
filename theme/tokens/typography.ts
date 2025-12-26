/**
 * Typography Tokens
 * 
 * Using system fonts for MVP - can swap to custom fonts later
 * by updating the fontFamily values.
 */

export const fontFamily = {
  // Using system fonts for MVP; can swap to custom later
  regular: undefined,  // System default
  medium: undefined,
  semibold: undefined,
  bold: undefined,
} as const;

export const fontSize = {
  xs: 12,
  sm: 13,
  base: 16,
  lg: 18,
  xl: 22,
  '2xl': 28,
  '3xl': 32,
} as const;

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.625,
} as const;

export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
} as const;

