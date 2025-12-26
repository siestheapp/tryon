/**
 * Theme System Public API
 * 
 * All theme-related exports from a single entry point.
 */

// Context & Hook
export { ThemeProvider, ThemeContext } from './ThemeProvider';
export type { ThemeContextValue, ThemePreference } from './ThemeProvider';
export { useTheme } from './useTheme';

// Themes
export { lightTheme } from './themes/light';
export { darkTheme } from './themes/dark';
export type { Theme, ThemeColors } from './themes/types';

// Tokens
export { palette } from './tokens/colors';
export type { PaletteColor } from './tokens/colors';
export { spacing, radius } from './tokens/spacing';
export { fontSize, fontWeight, lineHeight, letterSpacing } from './tokens/typography';
export { shadows, getShadow } from './tokens/shadows';

