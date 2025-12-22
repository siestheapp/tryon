import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../../components/OnboardingScreen';

const promiseAnimation = require('../../assets/animations/promise.json');

const ONBOARDING_KEY = '@tryon/onboarded';

export default function PromiseScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/ready');
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    router.replace('/(tabs)/scan');
  };

  return (
    <OnboardingScreen
      animation={promiseAnimation}
      headline="Log fits in seconds"
      subtext="Paste a link. Pick your size. Rate the fit."
      ctaLabel="Next"
      onCtaPress={handleNext}
      currentStep={2}
      totalSteps={3}
      onSkip={handleSkip}
    />
  );
}
