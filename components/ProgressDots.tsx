import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/tokens';

interface ProgressDotsProps {
  /** Total number of steps */
  total: number;
  /** Current step (1-indexed) */
  current: number;
}

interface DotProps {
  isActive: boolean;
}

/**
 * Individual animated dot component
 * Expands into a pill shape when active
 *
 * Uses React Native's built-in Animated API for Expo Go compatibility.
 */
const Dot: React.FC<DotProps> = ({ isActive }) => {
  const width = useRef(new Animated.Value(isActive ? 24 : 8)).current;

  useEffect(() => {
    Animated.timing(width, {
      toValue: isActive ? 24 : 8,
      duration: 400,
      useNativeDriver: false, // width can't use native driver
    }).start();
  }, [isActive]);

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          width,
          backgroundColor: isActive ? colors.petrol500 : colors.border,
        },
      ]}
    />
  );
};

/**
 * ProgressDots - Spring-loaded progress indicator
 *
 * Active dot expands into a pill shape with smooth animation.
 * Uses brand petrol color for active state.
 */
export const ProgressDots: React.FC<ProgressDotsProps> = ({ total, current }) => {
  return (
    <View style={styles.container} accessibilityLabel={`Step ${current} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <Dot key={i} isActive={i + 1 === current} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
});

export default ProgressDots;
