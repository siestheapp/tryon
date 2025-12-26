/**
 * Dark Theme
 * 
 * Warm dark backgrounds with soft blue accents.
 * Available as user preference toggle.
 */

import { palette } from '../tokens/colors';
import type { Theme } from './types';

export const darkTheme: Theme = {
  isDark: true,
  colors: {
    // Backgrounds (warm dark)
    background: palette.dark300,
    backgroundSecondary: palette.dark200,
    surface: palette.dark100,
    surfaceHover: palette.dark50,
    
    // Primary (soft blue - same hue, works on dark)
    primary: palette.blue300,
    primaryLight: palette.blue200,
    primaryDark: palette.blue400,
    primaryMuted: '#1a2744',  // Dark blue tint
    
    // Secondary
    secondary: palette.teal300,
    secondaryMuted: '#1a3a3b',
    
    // Text
    textPrimary: palette.gray50,
    textSecondary: '#B6BDC8',
    textMuted: '#6B7280',
    textOnPrimary: palette.white,
    
    // Borders
    border: '#2A2F3A',
    borderLight: '#1F242E',
    borderFocus: palette.blue300,
    
    // Fit feedback (same semantic colors)
    fitPerfect: palette.green300,
    fitPerfectMuted: 'rgba(58, 214, 155, 0.15)',
    fitTooSmall: palette.coral300,
    fitTooSmallMuted: 'rgba(255, 107, 107, 0.15)',
    fitTooLarge: palette.gold300,
    fitTooLargeMuted: 'rgba(255, 209, 102, 0.15)',
    
    // System
    error: palette.coral300,
    errorMuted: 'rgba(255, 107, 107, 0.15)',
    success: palette.green300,
    successMuted: 'rgba(58, 214, 155, 0.15)',
    warning: palette.gold300,
    warningMuted: 'rgba(255, 209, 102, 0.15)',
  },
};

