import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface MaskedTextProps {
  /** The text to display */
  text: string;
  /** Text styles to apply */
  style?: TextStyle;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Duration of the animation (ms) */
  duration?: number;
  /** Container style overrides */
  containerStyle?: ViewStyle;
}

/**
 * MaskedText - Agency-grade text reveal animation
 *
 * Text slides up from below while fading in, masked by overflow:hidden container.
 * Creates a "poured into place" effect that feels premium and intentional.
 *
 * Uses React Native's built-in Animated API for Expo Go compatibility.
 */
export const MaskedText: React.FC<MaskedTextProps> = ({
  text,
  style,
  delay = 0,
  duration = 800,
  containerStyle,
}) => {
  const translateY = useRef(new Animated.Value(40)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration * 0.75,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay, duration]);

  return (
    <View style={[styles.mask, containerStyle]}>
      <Animated.Text
        style={[
          style,
          {
            transform: [{ translateY }],
            opacity,
          },
        ]}
      >
        {text}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mask: {
    overflow: 'hidden',
  },
});

export default MaskedText;
