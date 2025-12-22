import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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

const OUTCOME_COLOR: Record<FitOutcome, string> = {
  just_right: '#5be88a',
  too_small: '#e8895b',
  too_large: '#e8c45b',
};

const FitSnapshotCard: React.FC<FitSnapshotProps> = ({
  lastUpdated,
  topBrands,
  recentOutcomes,
  ctaLabel,
  onCtaPress,
  isEmpty,
}) => {
  const formattedUpdated = React.useMemo(() => {
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
                  <Text style={[styles.outcomeSymbol, { color: OUTCOME_COLOR[item.outcome] }]}>
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

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#111218',
    borderWidth: 1,
    borderColor: '#1f212a',
    gap: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#e7e9f2',
    fontSize: 16,
    fontWeight: '700',
  },
  updated: {
    color: '#9ca3af',
    fontSize: 12,
  },
  section: {
    gap: 8,
  },
  sectionLabel: {
    color: '#cfd2e0',
    fontSize: 13,
    fontWeight: '600',
  },
  brandRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  brandChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#1b1d25',
    minHeight: 44,
    justifyContent: 'center',
  },
  brandName: {
    color: '#cfd2e0',
    fontSize: 12,
  },
  brandSize: {
    color: '#e7e9f2',
    fontSize: 14,
    fontWeight: '700',
  },
  outcomesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  outcomeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#1b1d25',
    gap: 6,
    minHeight: 44,
  },
  outcomeSymbol: {
    fontSize: 16,
    fontWeight: '700',
  },
  outcomeBrand: {
    color: '#e7e9f2',
    fontSize: 13,
  },
  emptyState: {
    gap: 4,
  },
  emptyTitle: {
    color: '#e7e9f2',
    fontSize: 15,
    fontWeight: '700',
  },
  emptyText: {
    color: '#9ca3af',
    fontSize: 13,
  },
  cta: {
    marginTop: 4,
    backgroundColor: '#1f7aec',
    borderRadius: 12,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaPressed: {
    opacity: 0.9,
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default FitSnapshotCard;

