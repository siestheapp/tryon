import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type FitOutcome = 'too_small' | 'just_right' | 'too_large';

// Exported for BodyPartChip and other components
export type BodyPart =
  | 'chest_shoulders'
  | 'waist'
  | 'sleeves_arms'
  | 'length'
  | 'overall_cut';

export type FitCardProps = {
  id: string;
  productName: string;
  brand: string;
  image: ImageSourcePropType;
  sizeChosen: string;
  fitOutcome: FitOutcome;
  loggedAt?: string; // Optional, not displayed but kept for data
  onPress?: (id: string) => void;
  isSkeleton?: boolean;
};

const OUTCOME_LABEL: Record<FitOutcome, string> = {
  too_small: 'Too small',
  just_right: 'Just right',
  too_large: 'Too large',
};

const OUTCOME_COLORS: Record<FitOutcome, { dot: string; bg: string; border: string }> = {
  too_small: { dot: '#f87171', bg: 'rgba(248, 113, 113, 0.1)', border: 'rgba(248, 113, 113, 0.3)' },
  just_right: { dot: '#4ade80', bg: 'rgba(74, 222, 128, 0.1)', border: 'rgba(74, 222, 128, 0.3)' },
  too_large: { dot: '#fbbf24', bg: 'rgba(251, 191, 36, 0.1)', border: 'rgba(251, 191, 36, 0.3)' },
};

const FitCard: React.FC<FitCardProps> = ({
  id,
  productName,
  brand,
  image,
  sizeChosen,
  fitOutcome,
  onPress,
  isSkeleton,
}) => {
  const handlePress = () => {
    if (onPress) onPress(id);
  };

  const colors = OUTCOME_COLORS[fitOutcome];
  const accessibilityLabel = `${brand} ${productName}, size ${sizeChosen}, ${OUTCOME_LABEL[fitOutcome]}`;

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
        isSkeleton && styles.cardSkeleton,
      ]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      disabled={isSkeleton}
    >
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.product} numberOfLines={2}>
          {productName}
        </Text>

        {/* Combined Size + Fit Pill - THE core insight */}
        <View style={[styles.fitPill, { backgroundColor: colors.bg, borderColor: colors.border }]}>
          <View style={[styles.fitDot, { backgroundColor: colors.dot }]} />
          <Text style={styles.fitText}>
            {sizeChosen} · {OUTCOME_LABEL[fitOutcome]}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#111218',
    borderWidth: 1,
    borderColor: '#1f212a',
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardSkeleton: {
    opacity: 0.6,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#1c1e26',
  },
  content: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  brand: {
    color: '#9ca3af',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  product: {
    color: '#f3f4f6',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 2,
    lineHeight: 20,
  },
  fitPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 10,
  },
  fitDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  fitText: {
    color: '#f3f4f6',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default FitCard;
