import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import * as Haptics from 'expo-haptics';
import { colors, spacing, typography, components } from '../theme/tokens';
import { MaskedText } from './MaskedText';
import { ProgressDots } from './ProgressDots';

export type OnboardingScreenProps = {
  /** Lottie animation source (require statement) */
  animation: any;
  /** Main headline */
  headline: string;
  /** Supporting text below headline */
  subtext: string;
  /** CTA button label */
  ctaLabel: string;
  /** Called when CTA is pressed */
  onCtaPress: () => void;
  /** Current step (1-indexed) */
  currentStep: number;
  /** Total number of steps */
  totalSteps: number;
  /** Optional skip handler - shows skip button if provided */
  onSkip?: () => void;
};

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  animation,
  headline,
  subtext,
  ctaLabel,
  onCtaPress,
  currentStep,
  totalSteps,
  onSkip,
}) => {
  const { height } = useWindowDimensions();
  const animationSize = Math.min(280, height * 0.35);

  // Haptic feedback on CTA press
  const handleCtaPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCtaPress();
  };

  // Haptic feedback on skip
  const handleSkipPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onSkip?.();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Skip button */}
      {onSkip && (
        <Pressable
          style={styles.skipButton}
          onPress={handleSkipPress}
          accessibilityRole="button"
          accessibilityLabel="Skip onboarding"
        >
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      )}

      {/* Main content */}
      <View style={styles.content}>
        {/* Animation - plays immediately */}
        <View
          style={[styles.animationContainer, { height: animationSize }]}
          accessibilityLabel={`Onboarding illustration for step ${currentStep}`}
        >
          <LottieView
            source={animation}
            autoPlay
            loop
            style={{ width: animationSize, height: animationSize }}
          />
        </View>

        {/* Text content - choreographed entry */}
        <View style={styles.textContainer}>
          {/* Headline enters at 300ms */}
          <MaskedText
            text={headline}
            style={styles.headline}
            delay={300}
            containerStyle={styles.headlineContainer}
          />

          {/* Subtext enters at 450ms */}
          <MaskedText
            text={subtext}
            style={styles.subtext}
            delay={450}
          />
        </View>
      </View>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        {/* Animated progress dots */}
        <ProgressDots total={totalSteps} current={currentStep} />

        {/* CTA button with haptic feedback */}
        <Pressable
          style={({ pressed }) => [
            styles.ctaButton,
            pressed && styles.ctaButtonPressed,
          ]}
          onPress={handleCtaPress}
          accessibilityRole="button"
          accessibilityLabel={ctaLabel}
        >
          <Text style={styles.ctaText}>{ctaLabel}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: spacing['2xl'],
    zIndex: 10,
    padding: spacing.sm,
  },
  skipText: {
    ...typography.bodyMedium,
    color: colors.textMuted,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing['2xl'],
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing['3xl'],
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  headlineContainer: {
    marginBottom: spacing.lg,
  },
  headline: {
    ...typography.h1,
    fontSize: 32,
    textAlign: 'center',
  },
  subtext: {
    ...typography.body,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
  },
  bottomSection: {
    paddingHorizontal: spacing['2xl'],
    paddingBottom: spacing['2xl'],
    gap: spacing.xl,
  },
  ctaButton: {
    ...components.buttonPrimary,
    paddingVertical: spacing.lg,
  },
  ctaButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  ctaText: {
    ...components.buttonPrimaryText,
    fontSize: 18,
  },
});

export default OnboardingScreen;
