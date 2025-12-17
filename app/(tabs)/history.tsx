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
import { useFocusEffect } from 'expo-router';
import { colors, spacing, borderRadius, typography, components } from '../../theme/tokens';
import { getUserTryons, TryonHistoryItem } from '../../lib/supabase';

const FIT_DISPLAY: Record<string, { label: string; color: string }> = {
  too_small: { label: 'Too Small', color: colors.error },
  just_right: { label: 'Perfect', color: colors.success },
  too_large: { label: 'Too Large', color: colors.warning },
};

export default function HistoryScreen() {
  const [tryons, setTryons] = useState<TryonHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTryons = useCallback(async (showRefreshing = false) => {
    if (showRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const data = await getUserTryons(50, 0);
      setTryons(data);
    } catch (e) {
      console.error('Failed to fetch tryons:', e);
      setError('Failed to load try-ons');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Fetch on mount
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
      <Text style={styles.emptyStateEmoji}>👕</Text>
      <Text style={styles.emptyStateTitle}>No try-ons yet</Text>
      <Text style={styles.emptyStateText}>
        Start by scanning a product on the Scan tab
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Try-On History</Text>
        <Text style={styles.subtitle}>
          {tryons.length > 0
            ? `${tryons.length} item${tryons.length !== 1 ? 's' : ''} logged`
            : 'Your logged try-ons will appear here'}
        </Text>
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
    paddingBottom: spacing.xl,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
  },
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
  listContent: {
    paddingHorizontal: spacing['2xl'],
    paddingBottom: spacing['3xl'],
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
});



