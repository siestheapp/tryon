/**
 * Light Theme
 * 
 * Soft blue primary on warm white backgrounds.
 * Designed to be approachable, inoffensive, and easy to digest.
 */

import { palette } from '../tokens/colors';
import type { Theme } from './types';

export const lightTheme: Theme = {
  isDark: false,
  colors: {
    // Backgrounds
    background: palette.gray50,
    backgroundSecondary: palette.gray100,
    surface: palette.white,
    surfaceHover: palette.gray100,
    
    // Primary (soft blue)
    primary: palette.blue300,
    primaryLight: palette.blue200,
    primaryDark: palette.blue400,
    primaryMuted: palette.blue50,
    
    // Secondary (soft teal)
    secondary: palette.teal300,
    secondaryMuted: palette.teal50,
    
    // Text
    textPrimary: palette.gray900,
    textSecondary: palette.gray600,
    textMuted: palette.gray400,
    textOnPrimary: palette.white,
    
    // Borders
    border: palette.gray200,
    borderLight: palette.gray100,
    borderFocus: palette.blue300,
    
    // Fit feedback
    fitPerfect: palette.green300,
    fitPerfectMuted: palette.green50,
    fitTooSmall: palette.coral300,
    fitTooSmallMuted: palette.coral50,
    fitTooLarge: palette.gold300,
    fitTooLargeMuted: palette.gold50,
    
    // System
    error: palette.coral500,
    errorMuted: palette.coral50,
    success: palette.green500,
    successMuted: palette.green50,
    warning: palette.gold500,
    warningMuted: palette.gold50,
  },
};

