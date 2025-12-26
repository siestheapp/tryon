import { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme, ThemePreference } from '../../theme';
import { useAuth } from '../../lib/auth';
import { getUserTryons } from '../../lib/supabase';
import FitSnapshotCard from '../../components/FitSnapshotCard';
import { FitOutcome } from '../../components/FitCard';

const ONBOARDING_KEY = '@tryon/onboarded';

const THEME_LABELS: Record<ThemePreference, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

// Safe mapping with fallback for invalid database values
const mapFitOutcome = (fit: string): FitOutcome => {
  if (fit === 'too_small' || fit === 'just_right' || fit === 'too_large') {
    return fit;
  }
  return 'just_right'; // Safe fallback
};

export default function ProfileScreen() {
  const { theme, themePreference, setThemePreference, spacing, radius, fontSize, fontWeight } = useTheme();
  const { user, signOut, deleteAccount } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const [stats, setStats] = useState({ tryons: 0, brands: 0 });
  const [snapshotData, setSnapshotData] = useState<{
    topBrands: { brand: string; size: string; outcome?: FitOutcome }[];
    recentOutcomes: { brand: string; outcome: FitOutcome }[];
    lastUpdated: string;
    isEmpty: boolean;
  }>({
    topBrands: [],
    recentOutcomes: [],
    lastUpdated: new Date().toISOString(),
    isEmpty: true,
  });

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      paddingHorizontal: spacing['2xl'],
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
    },
    title: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.bold,
      color: theme.colors.textPrimary,
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing['2xl'],
    },
    snapshotContainer: {
      marginBottom: spacing.xl,
    },
    userCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: spacing.lg,
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.lg,
      marginBottom: spacing.xl,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      fontSize: 24,
      color: theme.colors.textOnPrimary,
      fontWeight: '600',
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semibold,
      color: theme.colors.textPrimary,
      marginBottom: 2,
    },
    userEmail: {
      fontSize: fontSize.base,
      color: theme.colors.textMuted,
    },
    statsContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: spacing.lg,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: spacing.xl,
    },
    stat: {
      alignItems: 'center',
      flex: 1,
    },
    statNumber: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.bold,
      color: theme.colors.primary,
      marginBottom: 2,
    },
    statLabel: {
      fontSize: fontSize.sm,
      color: theme.colors.textMuted,
    },
    statDivider: {
      width: 1,
      height: 40,
      backgroundColor: theme.colors.border,
    },
    section: {
      marginBottom: spacing.xl,
    },
    sectionTitle: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      color: theme.colors.primary,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: spacing.md,
    },
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: spacing.lg,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    menuItemText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      color: theme.colors.textPrimary,
    },
    menuItemTextDanger: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.medium,
      color: theme.colors.error,
    },
    menuItemValue: {
      fontSize: fontSize.base,
      color: theme.colors.textMuted,
    },
    themeToggleContainer: {
      flexDirection: 'row',
      gap: spacing.sm,
    },
    themeOption: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: radius.md,
      backgroundColor: theme.colors.backgroundSecondary,
    },
    themeOptionActive: {
      backgroundColor: theme.colors.primary,
    },
    themeOptionText: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      color: theme.colors.textSecondary,
    },
    themeOptionTextActive: {
      color: theme.colors.textOnPrimary,
    },
  }), [theme, spacing, radius, fontSize, fontWeight]);

  const fetchStats = useCallback(async () => {
    try {
      const tryons = await getUserTryons(100, 0);
      const uniqueBrands = new Set(tryons.map(t => t.brand));
      setStats({
        tryons: tryons.length,
        brands: uniqueBrands.size,
      });

      // Build Fit Snapshot data
      if (tryons.length > 0) {
        // Get most recent size per brand (top 5)
        const brandSizes = new Map<string, { size: string; outcome: FitOutcome }>();
        tryons.forEach(t => {
          if (!brandSizes.has(t.brand)) {
            brandSizes.set(t.brand, {
              size: t.size_label,
              outcome: mapFitOutcome(t.overall_fit),
            });
          }
        });
        const topBrands = Array.from(brandSizes.entries())
          .slice(0, 5)
          .map(([brand, data]) => ({
            brand,
            size: data.size,
            outcome: data.outcome,
          }));

        // Get last 3 outcomes
        const recentOutcomes = tryons.slice(0, 3).map(t => ({
          brand: t.brand,
          outcome: mapFitOutcome(t.overall_fit),
        }));

        setSnapshotData({
          topBrands,
          recentOutcomes,
          lastUpdated: tryons[0]?.created_at || new Date().toISOString(),
          isEmpty: false,
        });
      } else {
        setSnapshotData({
          topBrands: [],
          recentOutcomes: [],
          lastUpdated: new Date().toISOString(),
          isEmpty: true,
        });
      }
    } catch (e) {
      console.error('Failed to fetch stats:', e);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchStats();
    }, [fetchStats])
  );

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Sign Out', style: 'destructive', onPress: signOut },
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'This will permanently delete your account and all your data. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete Account',
          style: 'destructive',
          onPress: async () => {
            setIsDeleting(true);
            const { error } = await deleteAccount();
            setIsDeleting(false);
            if (error) {
              Alert.alert('Error', error.message || 'Failed to delete account');
            }
            // If successful, the auth state change will redirect to login
          },
        },
      ]
    );
  };

  const handleLogFit = () => {
    router.push('/(tabs)/scan');
  };

  // DEV ONLY: Reset onboarding for testing
  const handleResetOnboarding = async () => {
    await AsyncStorage.removeItem(ONBOARDING_KEY);
    Alert.alert('Onboarding Reset', 'Reload the app to see onboarding again.');
  };

  const themeOptions: ThemePreference[] = ['light', 'dark', 'system'];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Fit Snapshot - Primary Trust Surface */}
        <View style={styles.snapshotContainer}>
          <FitSnapshotCard
            lastUpdated={snapshotData.lastUpdated}
            topBrands={snapshotData.topBrands}
            recentOutcomes={snapshotData.recentOutcomes}
            ctaLabel={snapshotData.isEmpty ? "Log your first fit" : "Log another fit"}
            onCtaPress={handleLogFit}
            isEmpty={snapshotData.isEmpty}
          />
        </View>

        {/* User Info */}
        <View style={styles.userCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.email?.[0]?.toUpperCase() || '👤'}
            </Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Welcome!</Text>
            <Text style={styles.userEmail}>{user?.email || 'Not signed in'}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{stats.tryons}</Text>
            <Text style={styles.statLabel}>Try-ons</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{stats.brands}</Text>
            <Text style={styles.statLabel}>Brands</Text>
          </View>
        </View>

        {/* Appearance */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Theme</Text>
            <View style={styles.themeToggleContainer}>
              {themeOptions.map((option) => (
                <Pressable
                  key={option}
                  style={[
                    styles.themeOption,
                    themePreference === option && styles.themeOptionActive,
                  ]}
                  onPress={() => setThemePreference(option)}
                >
                  <Text
                    style={[
                      styles.themeOptionText,
                      themePreference === option && styles.themeOptionTextActive,
                    ]}
                  >
                    {THEME_LABELS[option]}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <Pressable style={styles.menuItem} onPress={handleSignOut}>
            <Text style={styles.menuItemTextDanger}>Sign Out</Text>
          </Pressable>
          <Pressable
            style={styles.menuItem}
            onPress={handleDeleteAccount}
            disabled={isDeleting}
          >
            <Text style={styles.menuItemTextDanger}>
              {isDeleting ? 'Deleting...' : 'Delete Account'}
            </Text>
          </Pressable>
        </View>

        {/* App Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>Version</Text>
            <Text style={styles.menuItemValue}>1.0.0</Text>
          </View>
        </View>

        {/* Dev Tools - Remove before production */}
        {__DEV__ && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dev Tools</Text>
            <Pressable style={styles.menuItem} onPress={handleResetOnboarding}>
              <Text style={styles.menuItemText}>Reset Onboarding</Text>
            </Pressable>
          </View>
        )}

        <View style={{ height: spacing['4xl'] }} />
      </ScrollView>
    </SafeAreaView>
  );
}
