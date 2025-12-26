/**
 * ThemeProvider
 * 
 * React Context provider for the theme system.
 * Handles theme preference persistence and system theme detection.
 */

import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { spacing, radius } from './tokens/spacing';
import { fontSize, fontWeight, lineHeight, letterSpacing } from './tokens/typography';
import { shadows, getShadow } from './tokens/shadows';
import type { Theme } from './themes/types';

const THEME_KEY = '@freestyle/theme-preference';

export type ThemePreference = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
  theme: Theme;
  themePreference: ThemePreference;
  setThemePreference: (pref: ThemePreference) => void;
  spacing: typeof spacing;
  radius: typeof radius;
  fontSize: typeof fontSize;
  fontWeight: typeof fontWeight;
  lineHeight: typeof lineHeight;
  letterSpacing: typeof letterSpacing;
  shadows: typeof shadows;
  getShadow: typeof getShadow;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>('light');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved preference on mount
  useEffect(() => {
    const loadPreference = async () => {
      try {
        const saved = await AsyncStorage.getItem(THEME_KEY);
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
          setThemePreferenceState(saved);
        }
      } catch (error) {
        console.warn('Failed to load theme preference:', error);
      } finally {
        setIsLoaded(true);
      }
    };
    
    loadPreference();
  }, []);

  // Save preference when changed
  const setThemePreference = useCallback((pref: ThemePreference) => {
    setThemePreferenceState(pref);
    AsyncStorage.setItem(THEME_KEY, pref).catch((error) => {
      console.warn('Failed to save theme preference:', error);
    });
  }, []);

  // Resolve actual theme based on preference
  const theme = useMemo(() => {
    if (themePreference === 'system') {
      return systemColorScheme === 'dark' ? darkTheme : lightTheme;
    }
    return themePreference === 'dark' ? darkTheme : lightTheme;
  }, [themePreference, systemColorScheme]);

  // Memoize the context value
  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    themePreference,
    setThemePreference,
    spacing,
    radius,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    shadows,
    getShadow,
  }), [theme, themePreference, setThemePreference]);

  // Don't render children until preferences are loaded
  // This prevents flash of wrong theme
  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

