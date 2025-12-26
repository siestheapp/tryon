import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';
import { FitOutcome } from './FitCard';

export type FitSnapshotBrand = { brand: string; size: string; outcome?: FitOutcome };

export type FitSnapshotProps = {
  lastUpdated: string;
  topBrands: FitSnapshotBrand[];
  recentOutcomes: { brand: string; outcome: FitOutcome }[];
  ctaLabel: string;
  onCtaPress: () => void;
  isEmpty?: boolean;
};

const OUTCOME_SYMBOL: Record<FitOutcome, string> = {
  just_right: '✓',
  too_small: '–',
  too_large: '–',
};

const FitSnapshotCard: React.FC<FitSnapshotProps> = ({
  lastUpdated,
  topBrands,
  recentOutcomes,
  ctaLabel,
  onCtaPress,
  isEmpty,
}) => {
  const { theme, spacing, radius } = useTheme();

  // Get outcome colors from theme
  const outcomeColors = useMemo(() => ({
    just_right: theme.colors.fitPerfect,
    too_small: theme.colors.fitTooSmall,
    too_large: theme.colors.fitTooLarge,
  }), [theme]);

  const styles = useMemo(() => StyleSheet.create({
    card: {
      padding: spacing.lg,
      borderRadius: radius.lg,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      gap: spacing.md,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: theme.colors.textPrimary,
      fontSize: 16,
      fontWeight: '700',
    },
    updated: {
      color: theme.colors.textMuted,
      fontSize: 12,
    },
    section: {
      gap: spacing.sm,
    },
    sectionLabel: {
      color: theme.colors.textSecondary,
      fontSize: 13,
      fontWeight: '600',
    },
    brandRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
    brandChip: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.md,
      backgroundColor: theme.colors.backgroundSecondary,
      minHeight: 44,
      justifyContent: 'center',
    },
    brandName: {
      color: theme.colors.textSecondary,
      fontSize: 12,
    },
    brandSize: {
      color: theme.colors.textPrimary,
      fontSize: 14,
      fontWeight: '700',
    },
    outcomesRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
    outcomeChip: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.md,
      backgroundColor: theme.colors.backgroundSecondary,
      gap: spacing.sm,
      minHeight: 44,
    },
    outcomeSymbol: {
      fontSize: 16,
      fontWeight: '700',
    },
    outcomeBrand: {
      color: theme.colors.textPrimary,
      fontSize: 13,
    },
    emptyState: {
      gap: spacing.xs,
    },
    emptyTitle: {
      color: theme.colors.textPrimary,
      fontSize: 15,
      fontWeight: '700',
    },
    emptyText: {
      color: theme.colors.textMuted,
      fontSize: 13,
    },
    cta: {
      marginTop: spacing.xs,
      backgroundColor: theme.colors.primary,
      borderRadius: radius.md,
      minHeight: 48,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ctaPressed: {
      opacity: 0.9,
    },
    ctaText: {
      color: theme.colors.textOnPrimary,
      fontSize: 15,
      fontWeight: '700',
    },
  }), [theme, spacing, radius]);

  const formattedUpdated = useMemo(() => {
    const d = new Date(lastUpdated);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  }, [lastUpdated]);

  return (
    <View style={styles.card} accessibilityRole="summary" accessibilityLabel="Fit snapshot card">
      <View style={styles.headerRow}>
        <Text style={styles.title}>Fit Snapshot</Text>
        <Text style={styles.updated}>Updated {formattedUpdated || 'recently'}</Text>
      </View>

      {isEmpty ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Start your Fit Passport</Text>
          <Text style={styles.emptyText}>Log your first fit to see sizes and outcomes here.</Text>
        </View>
      ) : (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Your sizes</Text>
            <View style={styles.brandRow}>
              {topBrands.map((item) => (
                <View key={`${item.brand}-${item.size}`} style={styles.brandChip}>
                  <Text style={styles.brandName}>{item.brand}</Text>
                  <Text style={styles.brandSize}>{item.size}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Recent outcomes</Text>
            <View style={styles.outcomesRow}>
              {recentOutcomes.map((item, index) => (
                <View key={`${item.brand}-${item.outcome}-${index}`} style={styles.outcomeChip}>
                  <Text style={[styles.outcomeSymbol, { color: outcomeColors[item.outcome] }]}>
                    {OUTCOME_SYMBOL[item.outcome]}
                  </Text>
                  <Text style={styles.outcomeBrand}>{item.brand}</Text>
                </View>
              ))}
            </View>
          </View>
        </>
      )}

      <Pressable
        onPress={onCtaPress}
        style={({ pressed }) => [styles.cta, pressed && styles.ctaPressed]}
        accessibilityRole="button"
        accessibilityLabel={ctaLabel}
        hitSlop={10}
      >
        <Text style={styles.ctaText}>{ctaLabel}</Text>
      </Pressable>
    </View>
  );
};

export default FitSnapshotCard;
