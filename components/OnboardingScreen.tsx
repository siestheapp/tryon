import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  AccessibilityInfo,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { colors, spacing, typography, components } from '../theme/tokens';

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

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Skip button */}
      {onSkip && (
        <Pressable
          style={styles.skipButton}
          onPress={onSkip}
          accessibilityRole="button"
          accessibilityLabel="Skip onboarding"
        >
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      )}

      {/* Main content */}
      <View style={styles.content}>
        {/* Animation */}
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

        {/* Text content */}
        <View style={styles.textContainer}>
          <Text
            style={styles.headline}
            accessibilityRole="header"
          >
            {headline}
          </Text>
          <Text style={styles.subtext}>{subtext}</Text>
        </View>
      </View>

      {/* Bottom section */}
      <View style={styles.bottomSection}>
        {/* Progress dots */}
        <View style={styles.dotsContainer} accessibilityLabel={`Step ${currentStep} of ${totalSteps}`}>
          {Array.from({ length: totalSteps }, (_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i + 1 === currentStep && styles.dotActive,
              ]}
            />
          ))}
        </View>

        {/* CTA button */}
        <Pressable
          style={styles.ctaButton}
          onPress={onCtaPress}
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
  headline: {
    ...typography.h1,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: spacing.lg,
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.textMuted,
  },
  dotActive: {
    backgroundColor: colors.petrol500,
    width: 24,
  },
  ctaButton: {
    ...components.buttonPrimary,
    paddingVertical: spacing.lg,
  },
  ctaText: {
    ...components.buttonPrimaryText,
    fontSize: 18,
  },
});

export default OnboardingScreen;
