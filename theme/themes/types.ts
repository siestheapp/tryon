/**
 * Theme Type Definitions
 * 
 * TypeScript interfaces for the theme system.
 */

export interface ThemeColors {
  // Backgrounds
  background: string;
  backgroundSecondary: string;
  surface: string;
  surfaceHover: string;
  
  // Primary actions
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryMuted: string;
  
  // Secondary (optional accent)
  secondary: string;
  secondaryMuted: string;
  
  // Text
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnPrimary: string;
  
  // Borders
  border: string;
  borderLight: string;
  borderFocus: string;
  
  // Fit feedback
  fitPerfect: string;
  fitPerfectMuted: string;
  fitTooSmall: string;
  fitTooSmallMuted: string;
  fitTooLarge: string;
  fitTooLargeMuted: string;
  
  // System
  error: string;
  errorMuted: string;
  success: string;
  successMuted: string;
  warning: string;
  warningMuted: string;
}

export interface Theme {
  colors: ThemeColors;
  isDark: boolean;
}

