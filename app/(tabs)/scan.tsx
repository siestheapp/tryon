import { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { colors, spacing, borderRadius, typography, components } from '../../theme/tokens';
import { lookupProduct, ProductLookupResult } from '../../lib/supabase';

export default function ScanScreen() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductLookupResult | null>(null);

  const handleLookup = useCallback(async () => {
    if (!url.trim()) return;
    
    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const result = await lookupProduct(url.trim());
      if (result) {
        setProduct(result);
      } else {
        setError("We couldn't find that product. Check the URL and try again.");
      }
    } catch (e) {
      console.error(e);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [url]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Log a Try-On</Text>
            <Text style={styles.subtitle}>
              Paste a product link to start logging your fit
            </Text>
          </View>

          {/* URL Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={url}
              onChangeText={setUrl}
              placeholder="https://brand.com/product..."
              placeholderTextColor={colors.textMuted}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              returnKeyType="go"
              onSubmitEditing={handleLookup}
            />
            <Pressable
              style={[styles.button, !url.trim() && styles.buttonDisabled]}
              onPress={handleLookup}
              disabled={loading || !url.trim()}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.buttonText}>Look Up</Text>
              )}
            </Pressable>
          </View>

          {/* Error */}
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {/* Product Card */}
          {product && (
            <View style={styles.productCard}>
              {product.image_url && (
                <Image
                  source={{ uri: product.image_url }}
                  style={styles.productImage}
                  contentFit="cover"
                  transition={200}
                />
              )}
              <View style={styles.productInfo}>
                <Text style={styles.productBrand}>{product.brand}</Text>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productCategory}>{product.category}</Text>
                
                {/* Colors */}
                {product.colors.length > 0 && (
                  <Text style={styles.productMeta}>
                    {product.colors.length} color{product.colors.length !== 1 ? 's' : ''} available
                  </Text>
                )}
                
                {/* Sizes */}
                {product.sizes.length > 0 && (
                  <View style={styles.sizesContainer}>
                    <Text style={styles.sizesLabel}>Sizes:</Text>
                    <Text style={styles.sizesText}>
                      {product.sizes.map(s => s.display).join(', ')}
                    </Text>
                  </View>
                )}
              </View>

          {/* Continue Button */}
          <Pressable
            style={styles.continueButton}
            onPress={() => {
              router.push({
                pathname: '/confirm',
                params: {
                  product_id: product.product_id.toString(),
                  brand: product.brand,
                  title: product.title,
                  category: product.category,
                  image_url: product.image_url ?? '',
                  sizes: JSON.stringify(product.sizes),
                  colors: JSON.stringify(product.colors),
                  fits: JSON.stringify(product.fits ?? []),
                },
              });
            }}
          >
            <Text style={styles.continueButtonText}>Select Size & Rate Fit</Text>
          </Pressable>
            </View>
          )}

          {/* Empty State */}
          {!product && !loading && !error && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                Paste a product URL above to get started
              </Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing['3xl'],
  },
  header: {
    paddingHorizontal: spacing['2xl'],
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
  },
  inputContainer: {
    paddingHorizontal: spacing['2xl'],
    gap: spacing.md,
  },
  input: {
    ...components.input,
  },
  button: {
    ...components.buttonPrimary,
  },
  buttonDisabled: {
    backgroundColor: colors.border,
  },
  buttonText: {
    ...components.buttonPrimaryText,
  },
  errorContainer: {
    marginHorizontal: spacing['2xl'],
    marginTop: spacing.lg,
    padding: spacing.md,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    textAlign: 'center',
  },
  productCard: {
    ...components.card,
    marginHorizontal: spacing['2xl'],
    marginTop: spacing.xl,
    padding: 0,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 280,
    backgroundColor: colors.surfaceElevated,
  },
  productInfo: {
    padding: spacing.lg,
  },
  productBrand: {
    ...typography.caption,
    color: colors.petrol500,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },
  productTitle: {
    ...typography.h2,
    marginBottom: spacing.xs,
  },
  productCategory: {
    ...typography.body,
    color: colors.textMuted,
    textTransform: 'capitalize',
    marginBottom: spacing.md,
  },
  productMeta: {
    ...typography.small,
    marginBottom: spacing.sm,
  },
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: spacing.xs,
  },
  sizesLabel: {
    ...typography.caption,
  },
  sizesText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },
  continueButton: {
    ...components.buttonPrimary,
    margin: spacing.lg,
    marginTop: spacing.sm,
  },
  continueButtonText: {
    ...components.buttonPrimaryText,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing['3xl'],
  },
  emptyStateText: {
    ...typography.body,
    textAlign: 'center',
  },
});



