import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../theme';
import { getUserTryons, TryonHistoryItem, TryonFilter } from '../../lib/supabase';
import FitCard, { FitOutcome } from '../../components/FitCard';

export default function ClosetScreen() {
  const { theme, spacing, radius, fontSize, fontWeight, getShadow } = useTheme();
  const router = useRouter();
  const [tryons, setTryons] = useState<TryonHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<TryonFilter>('owned');

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
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: fontSize.base,
      color: theme.colors.textSecondary,
    },
    // Filter toggle
    filterContainer: {
      flexDirection: 'row',
      marginHorizontal: spacing['2xl'],
      marginBottom: spacing.lg,
      backgroundColor: theme.colors.surface,
      borderRadius: radius.lg,
      padding: spacing.xs,
    },
    filterTab: {
      flex: 1,
      paddingVertical: spacing.sm,
      alignItems: 'center',
      borderRadius: radius.md,
    },
    filterTabActive: {
      backgroundColor: theme.colors.primary,
    },
    filterTabText: {
      fontSize: 14,
      fontWeight: fontWeight.medium,
      color: theme.colors.textMuted,
    },
    filterTabTextActive: {
      color: theme.colors.textOnPrimary,
      fontWeight: fontWeight.semibold,
    },
    // Loading & Error
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing['3xl'],
    },
    errorText: {
      fontSize: fontSize.base,
      color: theme.colors.error,
      textAlign: 'center',
      marginBottom: spacing.lg,
    },
    retryButton: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: radius.md,
      alignItems: 'center',
    },
    retryButtonText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: theme.colors.textPrimary,
    },
    // List
    listContent: {
      paddingHorizontal: spacing['2xl'],
      paddingBottom: spacing['4xl'] * 2,
    },
    cardWrapper: {
      marginBottom: spacing.md,
    },
    // Empty state
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing['3xl'],
      paddingTop: spacing['4xl'] * 2,
    },
    emptyStateEmoji: {
      fontSize: 64,
      marginBottom: spacing.lg,
    },
    emptyStateTitle: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semibold,
      color: theme.colors.textPrimary,
      marginBottom: spacing.sm,
    },
    emptyStateText: {
      fontSize: fontSize.base,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
    // FAB
    fab: {
      position: 'absolute',
      right: spacing['2xl'],
      bottom: spacing['2xl'],
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      ...getShadow('lg'),
    },
  }), [theme, spacing, radius, fontSize, fontWeight, getShadow]);

  const fetchTryons = useCallback(async (showRefreshing = false) => {
    if (showRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const data = await getUserTryons(50, 0, filter);
      setTryons(data);
    } catch (e) {
      console.error('Failed to fetch tryons:', e);
      setError('Failed to load items');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [filter]);

  // Fetch on mount and when filter changes
  useEffect(() => {
    fetchTryons();
  }, [fetchTryons]);

  // Refetch when tab is focused (e.g., after saving a new try-on)
  useFocusEffect(
    useCallback(() => {
      fetchTryons();
    }, [fetchTryons])
  );

  const handleRefresh = useCallback(() => {
    fetchTryons(true);
  }, [fetchTryons]);

  const handleAddItem = () => {
    router.push({
      pathname: '/(tabs)/scan',
      params: { entry_point: 'closet' },
    });
  };

  // Map overall_fit to FitOutcome type
  const mapFitOutcome = (fit: string): FitOutcome => {
    if (fit === 'too_small' || fit === 'just_right' || fit === 'too_large') {
      return fit;
    }
    return 'just_right'; // default fallback
  };

  const renderItem = ({ item }: { item: TryonHistoryItem }) => {
    return (
      <View style={styles.cardWrapper}>
        <FitCard
          id={item.tryon_id.toString()}
          productName={item.title}
          brand={item.brand}
          image={{ uri: item.image_url || 'https://via.placeholder.com/150' }}
          sizeChosen={item.size_label}
          fitOutcome={mapFitOutcome(item.overall_fit)}
          loggedAt={item.created_at}
        />
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyStateEmoji}>{filter === 'owned' ? '👕' : '🛍️'}</Text>
      <Text style={styles.emptyStateTitle}>
        {filter === 'owned' ? 'Your closet is empty' : 'No try-ons yet'}
      </Text>
      <Text style={styles.emptyStateText}>
        {filter === 'owned'
          ? 'Add items you own to get personalized recommendations'
          : 'Start scanning products to track what fits'}
      </Text>
    </View>
  );

  const getSubtitle = () => {
    if (tryons.length === 0) {
      return filter === 'owned'
        ? 'Add your clothes to build your fit profile'
        : 'Your try-on history will appear here';
    }
    const itemText = tryons.length === 1 ? 'item' : 'items';
    return filter === 'owned'
      ? `${tryons.length} ${itemText} in your closet`
      : `${tryons.length} ${itemText} tried on`;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Closet</Text>
        <Text style={styles.subtitle}>{getSubtitle()}</Text>
      </View>

      {/* Filter Toggle */}
      <View style={styles.filterContainer}>
        <Pressable
          style={[styles.filterTab, filter === 'owned' && styles.filterTabActive]}
          onPress={() => setFilter('owned')}
        >
          <Text style={[styles.filterTabText, filter === 'owned' && styles.filterTabTextActive]}>
            My Closet
          </Text>
        </Pressable>
        <Pressable
          style={[styles.filterTab, filter === 'tried' && styles.filterTabActive]}
          onPress={() => setFilter('tried')}
        >
          <Text style={[styles.filterTabText, filter === 'tried' && styles.filterTabTextActive]}>
            Tried On
          </Text>
        </Pressable>
      </View>

      {/* Loading */}
      {loading && !refreshing && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      )}

      {/* Error */}
      {error && !loading && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Pressable style={styles.retryButton} onPress={() => fetchTryons()}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </Pressable>
        </View>
      )}

      {/* List */}
      {!loading && !error && (
        <FlatList
          data={tryons}
          renderItem={renderItem}
          keyExtractor={(item) => item.tryon_id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmpty}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor={theme.colors.primary}
              colors={[theme.colors.primary]}
            />
          }
        />
      )}

      {/* FAB */}
      <Pressable style={styles.fab} onPress={handleAddItem}>
        <Ionicons name="add" size={28} color={theme.colors.textOnPrimary} />
      </Pressable>
    </SafeAreaView>
  );
}
