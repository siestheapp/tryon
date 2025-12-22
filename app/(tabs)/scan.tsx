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
import { useRouter, useLocalSearchParams } from 'expo-router';
import { colors, spacing, borderRadius, typography, components } from '../../theme/tokens';
import { lookupProduct, ProductLookupResult } from '../../lib/supabase';

export default function ScanScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ entry_point?: string }>();
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
            <View style={styles.inputWrapper}>
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
              {url.length > 0 && (
                <Pressable
                  style={styles.clearButton}
                  onPress={() => {
                    setUrl('');
                    setProduct(null);
                    setError(null);
                  }}
                  hitSlop={8}
                >
                  <Text style={styles.clearButtonText}>✕</Text>
                </Pressable>
              )}
            </View>
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
          {product && (() => {
            // Compute the correct title based on selected variant
            const selectedColor = product.selected_variant_id
              ? product.colors.find(c => c.variant_id === product.selected_variant_id)
              : null;

            let displayTitle = product.title;
            if (selectedColor) {
              // Replace any other color name in the title with the selected color
              for (const color of product.colors) {
                if (product.title.includes(color.color_name) && color.color_name !== selectedColor.color_name) {
                  displayTitle = product.title.replace(color.color_name, selectedColor.color_name);
                  break;
                }
              }
            }

            return (
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
                <Text style={styles.productTitle}>{displayTitle}</Text>
              </View>

          {/* Continue Button */}
          <Pressable
            style={styles.continueButton}
            onPress={() => {
              router.push({
                pathname: '/confirm',
                params: {
                  product_id: product.product_id.toString(),
                  selected_variant_id: product.selected_variant_id?.toString() ?? '',
                  brand: product.brand,
                  title: displayTitle,
                  category: product.category,
                  image_url: product.image_url ?? '',
                  sizes: JSON.stringify(product.sizes),
                  colors: JSON.stringify(product.colors),
                  fits: JSON.stringify(product.fits ?? []),
                  entry_point: params.entry_point ?? 'scan',
                },
              });
            }}
          >
            <Text style={styles.continueButtonText}>Select Size & Rate Fit</Text>
          </Pressable>
            </View>
            );
          })()}

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
  inputWrapper: {
    position: 'relative',
  },
  input: {
    ...components.input,
    paddingRight: 44,
  },
  clearButton: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
  },
  clearButtonText: {
    color: colors.textMuted,
    fontSize: 18,
    fontWeight: '500',
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



