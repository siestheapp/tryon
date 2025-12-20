import { useState, useEffect, useCallback } from 'react';
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
import { Image } from 'expo-image';
import { useFocusEffect, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, spacing, borderRadius, typography, components } from '../../theme/tokens';
import { getUserTryons, TryonHistoryItem, TryonFilter } from '../../lib/supabase';

const FIT_DISPLAY: Record<string, { label: string; color: string }> = {
  too_small: { label: 'Too Small', color: colors.error },
  just_right: { label: 'Perfect', color: colors.success },
  too_large: { label: 'Too Large', color: colors.warning },
};

export default function ClosetScreen() {
  const router = useRouter();
  const [tryons, setTryons] = useState<TryonHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<TryonFilter>('owned');

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const renderItem = ({ item }: { item: TryonHistoryItem }) => {
    const fitInfo = FIT_DISPLAY[item.overall_fit] || {
      label: item.overall_fit,
      color: colors.textMuted,
    };

    return (
      <View style={styles.card}>
        {item.image_url && (
          <Image
            source={{ uri: item.image_url }}
            style={styles.cardImage}
            contentFit="cover"
            transition={200}
          />
        )}
        <View style={styles.cardContent}>
          <Text style={styles.cardBrand}>{item.brand}</Text>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.cardMeta}>
            <View style={styles.sizeTag}>
              <Text style={styles.sizeTagText}>Size {item.size_label}</Text>
            </View>
            <View style={[styles.fitTag, { backgroundColor: fitInfo.color + '20' }]}>
              <Text style={[styles.fitTagText, { color: fitInfo.color }]}>
                {fitInfo.label}
              </Text>
            </View>
          </View>
          <Text style={styles.cardDate}>{formatDate(item.created_at)}</Text>
        </View>
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
          <ActivityIndicator size="large" color={colors.petrol500} />
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
              tintColor={colors.petrol500}
              colors={[colors.petrol500]}
            />
          }
        />
      )}

      {/* FAB */}
      <Pressable style={styles.fab} onPress={handleAddItem}>
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </Pressable>
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
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
  },
  // Filter toggle
  filterContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing['2xl'],
    marginBottom: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xs,
  },
  filterTab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: borderRadius.md,
  },
  filterTabActive: {
    backgroundColor: colors.petrol500,
  },
  filterTabText: {
    ...typography.bodyMedium,
    color: colors.textMuted,
    fontSize: 14,
  },
  filterTabTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
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
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  retryButton: {
    ...components.buttonSecondary,
  },
  retryButtonText: {
    ...components.buttonSecondaryText,
  },
  // List
  listContent: {
    paddingHorizontal: spacing['2xl'],
    paddingBottom: spacing['4xl'] * 2, // Extra padding for FAB
  },
  card: {
    ...components.card,
    padding: 0,
    overflow: 'hidden',
    marginBottom: spacing.lg,
  },
  cardImage: {
    width: '100%',
    height: 160,
    backgroundColor: colors.surfaceElevated,
  },
  cardContent: {
    padding: spacing.lg,
  },
  cardBrand: {
    ...typography.caption,
    color: colors.petrol500,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  cardTitle: {
    ...typography.bodyMedium,
    marginBottom: spacing.md,
  },
  cardMeta: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  sizeTag: {
    backgroundColor: colors.surfaceElevated,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  sizeTagText: {
    ...typography.caption,
    color: colors.textPrimary,
  },
  fitTag: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  fitTagText: {
    ...typography.caption,
    fontWeight: '600',
  },
  cardDate: {
    ...typography.small,
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
    ...typography.h2,
    marginBottom: spacing.sm,
  },
  emptyStateText: {
    ...typography.body,
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
    backgroundColor: colors.petrol500,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});
