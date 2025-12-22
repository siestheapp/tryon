import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing, typography, components } from '../../theme/tokens';
import { useAuth } from '../../lib/auth';
import { getUserTryons, TryonHistoryItem } from '../../lib/supabase';
import FitSnapshotCard from '../../components/FitSnapshotCard';
import { FitOutcome } from '../../components/FitCard';

const ONBOARDING_KEY = '@tryon/onboarded';

// Safe mapping with fallback for invalid database values
const mapFitOutcome = (fit: string): FitOutcome => {
  if (fit === 'too_small' || fit === 'just_right' || fit === 'too_large') {
    return fit;
  }
  return 'just_right'; // Safe fallback
};

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
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

  const handleLogFit = () => {
    router.push('/(tabs)/scan');
  };

  // DEV ONLY: Reset onboarding for testing
  const handleResetOnboarding = async () => {
    await AsyncStorage.removeItem(ONBOARDING_KEY);
    Alert.alert('Onboarding Reset', 'Reload the app to see onboarding again.');
  };

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

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <Pressable style={styles.menuItem} onPress={handleSignOut}>
            <Text style={styles.menuItemTextDanger}>Sign Out</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing['2xl'],
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: {
    ...typography.h1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing['2xl'],
  },
  snapshotContainer: {
    marginBottom: spacing.xl,
  },
  userCard: {
    ...components.card,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.petrol500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...typography.h3,
    marginBottom: 2,
  },
  userEmail: {
    ...typography.body,
    color: colors.textMuted,
  },
  statsContainer: {
    ...components.card,
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
    ...typography.h1,
    color: colors.petrol500,
    marginBottom: 2,
  },
  statLabel: {
    ...typography.caption,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.caption,
    color: colors.petrol500,
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
    borderBottomColor: colors.border,
  },
  menuItemText: {
    ...typography.bodyMedium,
  },
  menuItemTextDanger: {
    ...typography.bodyMedium,
    color: colors.error,
  },
  menuItemValue: {
    ...typography.body,
    color: colors.textMuted,
  },
});
