import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../../components/OnboardingScreen';

const readyAnimation = require('../../assets/animations/ready.json');

const ONBOARDING_KEY = '@tryon/onboarded';

export default function ReadyScreen() {
  const router = useRouter();

  const handleStart = async () => {
    // Mark onboarding as complete
    await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    // Navigate to main app
    router.replace('/(tabs)/scan');
  };

  return (
    <OnboardingScreen
      animation={readyAnimation}
      headline="Build your fit profile"
      subtext="Every fit you log makes your recommendations sharper."
      ctaLabel="Get started"
      onCtaPress={handleStart}
      currentStep={3}
      totalSteps={3}
      // No skip button on final screen
    />
  );
}
