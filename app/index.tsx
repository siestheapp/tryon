import { Redirect } from 'expo-router';
import { useAuth } from '../lib/auth';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../theme';

export default function Index() {
  const { theme } = useTheme();
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View style={[styles.loading, { backgroundColor: theme.colors.background }]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  // Redirect based on auth state
  if (session) {
    return <Redirect href="/(tabs)/scan" />;
  } else {
    return <Redirect href="/(auth)/sign-in" />;
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
