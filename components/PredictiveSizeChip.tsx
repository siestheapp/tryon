import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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

const CONFIDENCE_COLOR: Record<Confidence, string> = {
  high: '#5be88a',
  medium: '#e8c45b',
  low: '#9ca3af',
};

const PredictiveSizeChip: React.FC<PredictiveSizeChipProps> = ({
  size,
  isSelected,
  confidence,
  reason,
  disabled,
  onPress,
}) => {
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
      <View style={[styles.dot, { backgroundColor: CONFIDENCE_COLOR[confidence] }]} />
      <Text style={[styles.sizeText, isSelected && styles.sizeTextSelected]}>{size}</Text>
      <Text style={styles.confidenceText}>{CONFIDENCE_COPY[confidence]}</Text>
      {reason ? <Text style={styles.reasonText} numberOfLines={1}>{reason}</Text> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    minHeight: 44,
    minWidth: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a2d38',
    backgroundColor: '#12131a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 2,
  },
  chipSelected: {
    borderColor: '#5be88a',
  },
  chipPressed: {
    opacity: 0.9,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  sizeText: {
    color: '#e7e9f2',
    fontSize: 16,
    fontWeight: '700',
  },
  sizeTextSelected: {
    color: '#ffffff',
  },
  confidenceText: {
    color: '#cfd2e0',
    fontSize: 12,
    fontWeight: '600',
  },
  reasonText: {
    color: '#9ca3af',
    fontSize: 11,
  },
});

export default PredictiveSizeChip;

