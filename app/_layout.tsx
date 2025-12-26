import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider, useTheme } from '../theme';
import { AuthProvider, useAuth } from '../lib/auth';

const ONBOARDING_KEY = '@tryon/onboarded';

function RootLayoutNav() {
  const { theme } = useTheme();
  const { session, loading } = useAuth();
  const router = useRouter();
  const segments = useSegments();
  const [onboardingChecked, setOnboardingChecked] = useState(false);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  // Check onboarding status on mount
  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        setHasOnboarded(value === 'true');
      } catch {
        setHasOnboarded(false);
      }
      setOnboardingChecked(true);
    };
    checkOnboarding();
  }, []);

  // Re-check onboarding status when navigating away from onboarding
  useEffect(() => {
    const recheckOnboarding = async () => {
      if (segments[0] === '(tabs)') {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        if (value === 'true' && !hasOnboarded) {
          setHasOnboarded(true);
        }
      }
    };
    recheckOnboarding();
  }, [segments, hasOnboarded]);

  useEffect(() => {
    if (loading || !onboardingChecked) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inOnboardingGroup = segments[0] === '(onboarding)';
    const inTabsGroup = segments[0] === '(tabs)';

    if (!session && !inAuthGroup) {
      // Not signed in, redirect to sign-in
      router.replace('/(auth)/sign-in');
    } else if (session && inAuthGroup) {
      // Signed in but on auth screen
      if (!hasOnboarded) {
        // First time user - show onboarding
        router.replace('/(onboarding)/welcome');
      } else {
        // Returning user - go to main app
        router.replace('/(tabs)/scan');
      }
    } else if (session && !hasOnboarded && !inOnboardingGroup && !inAuthGroup && !inTabsGroup) {
      // Signed in, hasn't onboarded, not in onboarding/tabs - redirect to onboarding
      router.replace('/(onboarding)/welcome');
    }
  }, [session, loading, segments, onboardingChecked, hasOnboarded, router]);

  if (loading || !onboardingChecked) {
    return (
      <View style={[styles.loading, { backgroundColor: theme.colors.background }]}>
        <StatusBar style={theme.isDark ? 'light' : 'dark'} />
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar style={theme.isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="confirm" options={{ headerShown: false, presentation: 'card' }} />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
