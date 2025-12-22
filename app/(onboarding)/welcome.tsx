import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from '../../components/OnboardingScreen';

const welcomeAnimation = require('../../assets/animations/welcome.json');

const ONBOARDING_KEY = '@tryon/onboarded';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.push('/(onboarding)/promise');
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    router.replace('/(tabs)/scan');
  };

  return (
    <OnboardingScreen
      animation={welcomeAnimation}
      headline="Finally know what fits"
      subtext="Stop guessing. Start knowing."
      ctaLabel="Continue"
      onCtaPress={handleNext}
      currentStep={1}
      totalSteps={3}
      onSkip={handleSkip}
    />
  );
}
