import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';

export type Confidence = 'low' | 'medium' | 'high';

export type PredictiveSizeChipProps = {
  size: string;
  isSelected: boolean;
  confidence: Confidence;
  reason?: string;
  disabled?: boolean;
  onPress: (size: string) => void;
};

const CONFIDENCE_COPY: Record<Confidence, string> = {
  high: 'Likely best',
  medium: 'Try this first',
  low: 'First guess',
};

const PredictiveSizeChip: React.FC<PredictiveSizeChipProps> = ({
  size,
  isSelected,
  confidence,
  reason,
  disabled,
  onPress,
}) => {
  const { theme, spacing, radius } = useTheme();

  // Get confidence colors from theme
  const confidenceColors = useMemo(() => ({
    high: theme.colors.fitPerfect,
    medium: theme.colors.fitTooLarge, // gold/yellow for medium
    low: theme.colors.textMuted,
  }), [theme]);

  const styles = useMemo(() => StyleSheet.create({
    chip: {
      minHeight: 44,
      minWidth: 80,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 2,
    },
    chipSelected: {
      borderColor: theme.colors.fitPerfect,
    },
    chipPressed: {
      opacity: 0.9,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginBottom: spacing.xs,
    },
    sizeText: {
      color: theme.colors.textPrimary,
      fontSize: 16,
      fontWeight: '700',
    },
    sizeTextSelected: {
      color: theme.colors.textPrimary,
    },
    confidenceText: {
      color: theme.colors.textSecondary,
      fontSize: 12,
      fontWeight: '600',
    },
    reasonText: {
      color: theme.colors.textMuted,
      fontSize: 11,
    },
  }), [theme, spacing, radius]);

  const handlePress = () => {
    if (!disabled) onPress(size);
  };

  const label = `${CONFIDENCE_COPY[confidence]}: ${size}`;

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.chip,
        isSelected && styles.chipSelected,
        pressed && !disabled && styles.chipPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={reason || 'Select size'}
      hitSlop={10}
    >
      <View style={[styles.dot, { backgroundColor: confidenceColors[confidence] }]} />
      <Text style={[styles.sizeText, isSelected && styles.sizeTextSelected]}>{size}</Text>
      <Text style={styles.confidenceText}>{CONFIDENCE_COPY[confidence]}</Text>
      {reason ? <Text style={styles.reasonText} numberOfLines={1}>{reason}</Text> : null}
    </Pressable>
  );
};

export default PredictiveSizeChip;
