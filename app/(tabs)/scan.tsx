import { useState, useCallback, useMemo } from 'react';
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
import { useTheme } from '../../theme';
import { lookupProduct, ProductLookupResult } from '../../lib/supabase';

export default function ScanScreen() {
  const { theme, spacing, radius, fontSize, fontWeight } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams<{ entry_point?: string }>();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductLookupResult | null>(null);

  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
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
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.bold,
      color: theme.colors.textPrimary,
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: fontSize.base,
      color: theme.colors.textSecondary,
    },
    inputContainer: {
      paddingHorizontal: spacing['2xl'],
      gap: spacing.md,
    },
    inputWrapper: {
      position: 'relative',
    },
    input: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: radius.md,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      paddingRight: 44,
      fontSize: fontSize.base,
      color: theme.colors.textPrimary,
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
      color: theme.colors.textMuted,
      fontSize: 18,
      fontWeight: '500',
    },
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonDisabled: {
      backgroundColor: theme.colors.border,
    },
    buttonText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: theme.colors.textOnPrimary,
    },
    errorContainer: {
      marginHorizontal: spacing['2xl'],
      marginTop: spacing.lg,
      padding: spacing.md,
      backgroundColor: theme.colors.errorMuted,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: theme.colors.error,
    },
    errorText: {
      color: theme.colors.error,
      fontSize: 14,
      textAlign: 'center',
    },
    productCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginHorizontal: spacing['2xl'],
      marginTop: spacing.xl,
      overflow: 'hidden',
    },
    productImage: {
      width: '100%',
      height: 280,
      backgroundColor: theme.colors.backgroundSecondary,
    },
    productInfo: {
      padding: spacing.lg,
    },
    productBrand: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.medium,
      color: theme.colors.primary,
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: spacing.xs,
    },
    productTitle: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.semibold,
      color: theme.colors.textPrimary,
      marginBottom: spacing.xs,
    },
    continueButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      margin: spacing.lg,
      marginTop: spacing.sm,
    },
    continueButtonText: {
      fontSize: fontSize.base,
      fontWeight: fontWeight.semibold,
      color: theme.colors.textOnPrimary,
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing['3xl'],
    },
    emptyStateText: {
      fontSize: fontSize.base,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
  }), [theme, spacing, radius, fontSize, fontWeight]);

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
                placeholderTextColor={theme.colors.textMuted}
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
                <ActivityIndicator color={theme.colors.textOnPrimary} size="small" />
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
