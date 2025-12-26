import React, { useMemo } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '../theme';

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
  const { theme, spacing, radius } = useTheme();

  // Get outcome colors from theme
  const outcomeColors = useMemo(() => ({
    too_small: {
      dot: theme.colors.fitTooSmall,
      bg: theme.colors.fitTooSmallMuted,
      border: theme.colors.fitTooSmall + '4D', // 30% opacity
    },
    just_right: {
      dot: theme.colors.fitPerfect,
      bg: theme.colors.fitPerfectMuted,
      border: theme.colors.fitPerfect + '4D',
    },
    too_large: {
      dot: theme.colors.fitTooLarge,
      bg: theme.colors.fitTooLargeMuted,
      border: theme.colors.fitTooLarge + '4D',
    },
  }), [theme]);

  const colors = outcomeColors[fitOutcome];

  const styles = useMemo(() => StyleSheet.create({
    card: {
      flexDirection: 'row',
      padding: spacing.md,
      borderRadius: radius.md,
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
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
      borderRadius: radius.sm,
      backgroundColor: theme.colors.backgroundSecondary,
    },
    content: {
      flex: 1,
      marginLeft: spacing.lg,
      justifyContent: 'center',
    },
    brand: {
      color: theme.colors.textMuted,
      fontSize: 13,
      fontWeight: '500',
      letterSpacing: 0.2,
    },
    product: {
      color: theme.colors.textPrimary,
      fontSize: 15,
      fontWeight: '600',
      marginTop: 2,
      lineHeight: 20,
    },
    fitPill: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.full,
      borderWidth: 1,
      marginTop: spacing.md,
    },
    fitDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: spacing.sm,
    },
    fitText: {
      color: theme.colors.textPrimary,
      fontSize: 13,
      fontWeight: '600',
    },
  }), [theme, spacing, radius]);

  const handlePress = () => {
    if (onPress) onPress(id);
  };

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

export default FitCard;
