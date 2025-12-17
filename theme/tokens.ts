/**
 * TryOn Design System — Dark Mode
 * Based on the Proxi/Freestyle design system with petrol brand color
 */

export const colors = {
  // Backgrounds (dark)
  background: '#0B0F14',       // Main app background
  surface: '#121A22',          // Cards, sheets
  surfaceElevated: '#1A242E',  // Modals, elevated surfaces
  
  // Text (light on dark)
  textPrimary: '#FFFFFF',
  textSecondary: '#A0A8B1',
  textMuted: '#6A7683',
  
  // Brand — Petrol
  petrol600: '#009090',  // Pressed/active state
  petrol500: '#00A3A3',  // Primary brand / CTA
  petrol400: '#16B5B5',  // Hover/highlight
  petrol100: '#E0F7F7',  // Light badges (high contrast on dark)
  
  // Accents
  ice300: '#7FE1FF',
  mint400: '#A6FFCB',
  
  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  
  // Borders
  border: '#2A3642',
  borderLight: '#3A4652',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const typography = {
  // Display / titles
  h1: {
    fontSize: 28,
    fontWeight: '700' as const,
    letterSpacing: -0.5,
    color: colors.textPrimary,
  },
  h2: {
    fontSize: 22,
    fontWeight: '600' as const,
    letterSpacing: -0.3,
    color: colors.textPrimary,
  },
  h3: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: colors.textPrimary,
  },
  
  // Body
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
    color: colors.textSecondary,
  },
  bodyMedium: {
    fontSize: 16,
    fontWeight: '500' as const,
    color: colors.textPrimary,
  },
  
  // Small
  caption: {
    fontSize: 13,
    fontWeight: '500' as const,
    color: colors.textMuted,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    color: colors.textMuted,
  },
  
  // Button
  button: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: colors.textPrimary,
  },
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
};

// Pre-composed component styles
export const components = {
  // Primary button (petrol)
  buttonPrimary: {
    backgroundColor: colors.petrol500,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  buttonPrimaryText: {
    ...typography.button,
    color: '#FFFFFF',
  },
  
  // Secondary button (outline)
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  buttonSecondaryText: {
    ...typography.button,
    color: colors.textPrimary,
  },
  
  // Card
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  // Input
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    fontSize: 16,
    color: colors.textPrimary,
  },
  
  // Chip (for size selection)
  chip: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'transparent',
  },
  chipSelected: {
    backgroundColor: colors.petrol500,
    borderColor: colors.petrol500,
  },
  chipText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },
};

export default {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  components,
};



