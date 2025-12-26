/**
 * useTheme Hook
 * 
 * Consumer hook for accessing theme values throughout the app.
 * Must be used within a ThemeProvider.
 */

import { useContext } from 'react';
import { ThemeContext, ThemeContextValue } from './ThemeProvider';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error(
      'useTheme must be used within a ThemeProvider. ' +
      'Make sure your app is wrapped with <ThemeProvider>.'
    );
  }
  
  return context;
};

