import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

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

const styles = StyleSheet.create({
  chip: {
    minHeight: 44,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#1b1d25',
    borderWidth: 1,
    borderColor: '#2a2d38',
    justifyContent: 'center',
  },
  chipSelected: {
    borderColor: '#5be88a',
    backgroundColor: '#14251b',
  },
  chipPressed: {
    opacity: 0.9,
  },
  text: {
    color: '#cfd2e0',
    fontSize: 13,
    fontWeight: '600',
  },
  textSelected: {
    color: '#e7e9f2',
  },
});

export default BodyPartChip;



