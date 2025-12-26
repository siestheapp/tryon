import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme';
import { BodyPart } from './FitCard';

export type BodyPartChipProps = {
  part: BodyPart;
  label: string;
  selected: boolean;
  disabled?: boolean;
  onToggle: (part: BodyPart) => void;
};

const BodyPartChip: React.FC<BodyPartChipProps> = ({
  part,
  label,
  selected,
  disabled,
  onToggle,
}) => {
  const { theme, spacing, radius } = useTheme();

  const styles = useMemo(() => StyleSheet.create({
    chip: {
      minHeight: 44,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.md,
      borderRadius: radius.md,
      backgroundColor: theme.colors.backgroundSecondary,
      borderWidth: 1,
      borderColor: theme.colors.border,
      justifyContent: 'center',
    },
    chipSelected: {
      borderColor: theme.colors.fitPerfect,
      backgroundColor: theme.colors.fitPerfectMuted,
    },
    chipPressed: {
      opacity: 0.9,
    },
    text: {
      color: theme.colors.textSecondary,
      fontSize: 13,
      fontWeight: '600',
    },
    textSelected: {
      color: theme.colors.textPrimary,
    },
  }), [theme, spacing, radius]);

  const handlePress = () => {
    if (!disabled) onToggle(part);
  };

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="checkbox"
      accessibilityLabel={label}
      accessibilityState={{ checked: selected, disabled }}
      hitSlop={10}
      disabled={disabled}
      style={({ pressed }) => [
        styles.chip,
        selected && styles.chipSelected,
        pressed && !disabled && styles.chipPressed,
      ]}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
    </Pressable>
  );
};

export default BodyPartChip;
