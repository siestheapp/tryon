import { useState, useCallback, useMemo, useEffect } from 'react';
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
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '../../theme';
import { QRScanner } from '../../components/QRScanner';
import {
  lookupProduct,
  ProductLookupResult,
  getUserQueue,
  QueueItem,
  addToQueue,
  removeFromQueue,
} from '../../lib/supabase';

// Extract URLs from text (handles multiple URLs separated by newlines, spaces, or commas)
function extractUrls(text: string): string[] {
  const urlRegex = /https?:\/\/[^\s,]+/gi;
  const matches = text.match(urlRegex);
  return matches ? [...new Set(matches)] : []; // dedupe
}

export default function ScanScreen() {
  const { theme, spacing, radius, fontSize, fontWeight } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams<{ entry_point?: string }>();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<ProductLookupResult | null>(null);

  // Queue state
  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [queueLoading, setQueueLoading] = useState(true);
  const [bulkAddStatus, setBulkAddStatus] = useState<string | null>(null);

  // QR Scanner state
  const [showScanner, setShowScanner] = useState(false);

  // Load queue on mount and when screen focuses
  const loadQueue = useCallback(async () => {
    try {
      const items = await getUserQueue();
      setQueue(items);
    } catch (e) {
      console.error('Failed to load queue:', e);
    } finally {
      setQueueLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadQueue();
    }, [loadQueue])
  );

  // Detect if input contains multiple URLs
  const detectedUrls = useMemo(() => extractUrls(url), [url]);
  const isMultiUrl = detectedUrls.length > 1;

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
        // Queue section styles
        queueSection: {
          marginHorizontal: spacing['2xl'],
          marginBottom: spacing.xl,
        },
        queueHeader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing.md,
        },
        queueTitle: {
          fontSize: fontSize.lg,
          fontWeight: fontWeight.semibold,
          color: theme.colors.textPrimary,
        },
        queueCount: {
          fontSize: fontSize.sm,
          color: theme.colors.textSecondary,
        },
        queueScroll: {
          marginHorizontal: -spacing['2xl'],
          paddingHorizontal: spacing['2xl'],
        },
        queueItem: {
          width: 120,
          marginRight: spacing.md,
          backgroundColor: theme.colors.surface,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: theme.colors.border,
          overflow: 'hidden',
        },
        queueItemImage: {
          width: 120,
          height: 120,
          backgroundColor: theme.colors.backgroundSecondary,
        },
        queueItemInfo: {
          padding: spacing.sm,
        },
        queueItemBrand: {
          fontSize: fontSize.xs,
          fontWeight: fontWeight.medium,
          color: theme.colors.primary,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        },
        queueItemTitle: {
          fontSize: fontSize.xs,
          color: theme.colors.textPrimary,
          marginTop: 2,
        },
        queueItemRemove: {
          position: 'absolute',
          top: 4,
          right: 4,
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: 10,
          width: 20,
          height: 20,
          alignItems: 'center',
          justifyContent: 'center',
        },
        queueItemRemoveText: {
          color: '#fff',
          fontSize: 12,
          fontWeight: '600',
        },
        inputContainer: {
          paddingHorizontal: spacing['2xl'],
          gap: spacing.md,
        },
        inputRow: {
          flexDirection: 'row',
          gap: spacing.sm,
          alignItems: 'flex-start',
        },
        inputWrapper: {
          flex: 1,
          position: 'relative',
        },
        scanButton: {
          width: 48,
          height: 48,
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.border,
          borderRadius: radius.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        scanButtonActive: {
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
        },
        scannerContainer: {
          marginBottom: spacing.md,
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
          minHeight: 48,
        },
        inputMultiline: {
          minHeight: 80,
          textAlignVertical: 'top',
        },
        clearButton: {
          position: 'absolute',
          right: 12,
          top: 12,
          justifyContent: 'center',
          alignItems: 'center',
          width: 24,
          height: 24,
        },
        clearButtonText: {
          color: theme.colors.textMuted,
          fontSize: 18,
          fontWeight: '500',
        },
        multiUrlHint: {
          fontSize: fontSize.sm,
          color: theme.colors.primary,
          marginTop: -spacing.xs,
        },
        buttonRow: {
          flexDirection: 'row',
          gap: spacing.sm,
        },
        button: {
          flex: 1,
          backgroundColor: theme.colors.primary,
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          borderRadius: radius.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        buttonSecondary: {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.primary,
        },
        buttonDisabled: {
          backgroundColor: theme.colors.border,
        },
        buttonText: {
          fontSize: fontSize.base,
          fontWeight: fontWeight.semibold,
          color: theme.colors.textOnPrimary,
        },
        buttonTextSecondary: {
          color: theme.colors.primary,
        },
        bulkStatus: {
          marginHorizontal: spacing['2xl'],
          marginTop: spacing.md,
          padding: spacing.md,
          backgroundColor: theme.colors.successMuted,
          borderRadius: radius.md,
        },
        bulkStatusText: {
          color: theme.colors.success,
          fontSize: fontSize.sm,
          textAlign: 'center',
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
        productButtonRow: {
          flexDirection: 'row',
          gap: spacing.sm,
          margin: spacing.lg,
          marginTop: spacing.sm,
        },
        continueButton: {
          flex: 1,
          backgroundColor: theme.colors.primary,
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          borderRadius: radius.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        addQueueButton: {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.primary,
          paddingVertical: spacing.md,
          paddingHorizontal: spacing.lg,
          borderRadius: radius.md,
          alignItems: 'center',
          justifyContent: 'center',
        },
        continueButtonText: {
          fontSize: fontSize.base,
          fontWeight: fontWeight.semibold,
          color: theme.colors.textOnPrimary,
        },
        addQueueButtonText: {
          fontSize: fontSize.base,
          fontWeight: fontWeight.semibold,
          color: theme.colors.primary,
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
      }),
    [theme, spacing, radius, fontSize, fontWeight]
  );

  // Single URL lookup
  const handleLookup = useCallback(async () => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;

    // If multiple URLs, use bulk add instead
    if (isMultiUrl) {
      handleBulkAdd();
      return;
    }

    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const result = await lookupProduct(trimmedUrl);
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
  }, [url, isMultiUrl]);

  // Bulk add multiple URLs to queue
  const handleBulkAdd = useCallback(async () => {
    if (detectedUrls.length === 0) return;

    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setBulkAddStatus(null);

    let added = 0;
    let failed = 0;

    for (const singleUrl of detectedUrls) {
      try {
        const result = await lookupProduct(singleUrl);
        if (result) {
          await addToQueue(result.product_id, result.selected_variant_id ?? undefined);
          added++;
        } else {
          failed++;
        }
      } catch (e) {
        console.error('Failed to add:', singleUrl, e);
        failed++;
      }
    }

    setLoading(false);
    setUrl('');

    // Show status message
    if (added > 0 && failed === 0) {
      setBulkAddStatus(`Added ${added} item${added > 1 ? 's' : ''} to queue`);
    } else if (added > 0 && failed > 0) {
      setBulkAddStatus(`Added ${added} item${added > 1 ? 's' : ''}, ${failed} not found`);
    } else {
      setError(`Couldn't find any of those products. Check the URLs and try again.`);
    }

    // Refresh queue
    loadQueue();

    // Clear status after 3 seconds
    setTimeout(() => setBulkAddStatus(null), 3000);
  }, [detectedUrls, loadQueue]);

  // Handle QR code scan result
  const handleQRScan = useCallback(async (scannedUrl: string) => {
    setShowScanner(false);
    setUrl(scannedUrl); // Show in input for transparency
    Keyboard.dismiss();
    setLoading(true);
    setError(null);
    setProduct(null);

    try {
      const result = await lookupProduct(scannedUrl);
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
  }, []);

  // Handle QR scanner error
  const handleQRError = useCallback((message: string) => {
    setShowScanner(false);
    setError(message);
  }, []);

  // Add single product to queue
  const handleAddToQueue = useCallback(async () => {
    if (!product) return;

    try {
      await addToQueue(product.product_id, product.selected_variant_id ?? undefined);
      setProduct(null);
      setUrl('');
      loadQueue();
    } catch (e) {
      console.error('Failed to add to queue:', e);
      setError('Failed to add to queue. Please try again.');
    }
  }, [product, loadQueue]);

  // Remove item from queue
  const handleRemoveFromQueue = useCallback(
    async (queueId: number) => {
      try {
        await removeFromQueue(queueId);
        setQueue((prev) => prev.filter((item) => item.queue_id !== queueId));
      } catch (e) {
        console.error('Failed to remove from queue:', e);
      }
    },
    []
  );

  // Navigate to confirm screen for a queued item
  const handleQueueItemPress = useCallback(
    async (item: QueueItem) => {
      // We need to get full product data for the confirm screen
      // For now, we'll do a product lookup to get sizes, colors, fits
      setLoading(true);
      try {
        // We need to construct a URL or find another way to get product data
        // Let's use the product_id directly with a new function
        // For now, let's navigate with the data we have
        router.push({
          pathname: '/confirm',
          params: {
            product_id: item.product_id.toString(),
            selected_variant_id: item.variant_id?.toString() ?? '',
            brand: item.brand,
            title: item.title,
            category: item.category ?? '',
            image_url: item.image_url ?? '',
            // We need to fetch sizes/colors/fits - for now pass empty and let confirm screen handle it
            from_queue: 'true',
            queue_id: item.queue_id.toString(),
          },
        });
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

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
              {queue.length > 0
                ? 'Tap an item below or paste a new link'
                : 'Paste a product link to start logging your fit'}
            </Text>
          </View>

          {/* Queue Section */}
          {queue.length > 0 && (
            <View style={styles.queueSection}>
              <View style={styles.queueHeader}>
                <Text style={styles.queueTitle}>Ready to Try</Text>
                <Text style={styles.queueCount}>{queue.length} item{queue.length > 1 ? 's' : ''}</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.queueScroll}
                contentContainerStyle={{ paddingRight: spacing['2xl'] }}
              >
                {queue.map((item) => (
                  <Pressable
                    key={item.queue_id}
                    style={styles.queueItem}
                    onPress={() => handleQueueItemPress(item)}
                  >
                    {item.image_url && (
                      <Image
                        source={{ uri: item.image_url }}
                        style={styles.queueItemImage}
                        contentFit="cover"
                      />
                    )}
                    <View style={styles.queueItemInfo}>
                      <Text style={styles.queueItemBrand} numberOfLines={1}>
                        {item.brand}
                      </Text>
                      <Text style={styles.queueItemTitle} numberOfLines={2}>
                        {item.title}
                      </Text>
                    </View>
                    <Pressable
                      style={styles.queueItemRemove}
                      onPress={(e) => {
                        e.stopPropagation();
                        handleRemoveFromQueue(item.queue_id);
                      }}
                      hitSlop={8}
                    >
                      <Text style={styles.queueItemRemoveText}>×</Text>
                    </Pressable>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}

          {/* URL Input */}
          <View style={styles.inputContainer}>
            {/* QR Scanner (inline) */}
            {showScanner && (
              <View style={styles.scannerContainer}>
                <QRScanner
                  onScan={handleQRScan}
                  onClose={() => setShowScanner(false)}
                  onError={handleQRError}
                />
              </View>
            )}

            {/* Input row with QR button */}
            <View style={styles.inputRow}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, isMultiUrl && styles.inputMultiline]}
                  value={url}
                  onChangeText={setUrl}
                  placeholder="Paste link or scan QR..."
                  placeholderTextColor={theme.colors.textMuted}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="url"
                  returnKeyType="go"
                  multiline={isMultiUrl}
                  onSubmitEditing={!isMultiUrl ? handleLookup : undefined}
                  onFocus={() => setShowScanner(false)}
                />
                {url.length > 0 && (
                  <Pressable
                    style={styles.clearButton}
                    onPress={() => {
                      setUrl('');
                      setProduct(null);
                      setError(null);
                      setBulkAddStatus(null);
                    }}
                    hitSlop={8}
                  >
                    <Text style={styles.clearButtonText}>×</Text>
                  </Pressable>
                )}
              </View>

              {/* QR Scan Button */}
              <Pressable
                style={[styles.scanButton, showScanner && styles.scanButtonActive]}
                onPress={() => {
                  Keyboard.dismiss();
                  setShowScanner(!showScanner);
                }}
                accessibilityLabel="Scan QR code"
              >
                <Ionicons
                  name="qr-code-outline"
                  size={24}
                  color={showScanner ? theme.colors.textOnPrimary : theme.colors.primary}
                />
              </Pressable>
            </View>

            {isMultiUrl && (
              <Text style={styles.multiUrlHint}>
                {detectedUrls.length} links detected - will add all to queue
              </Text>
            )}

            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.button, !url.trim() && styles.buttonDisabled]}
                onPress={handleLookup}
                disabled={loading || !url.trim()}
              >
                {loading ? (
                  <ActivityIndicator color={theme.colors.textOnPrimary} size="small" />
                ) : (
                  <Text style={styles.buttonText}>
                    {isMultiUrl ? `Add ${detectedUrls.length} to Queue` : 'Look Up'}
                  </Text>
                )}
              </Pressable>
            </View>
          </View>

          {/* Bulk Add Status */}
          {bulkAddStatus && (
            <View style={styles.bulkStatus}>
              <Text style={styles.bulkStatusText}>{bulkAddStatus}</Text>
            </View>
          )}

          {/* Error */}
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {/* Product Card */}
          {product &&
            (() => {
              // Compute the correct title based on selected variant
              const selectedColor = product.selected_variant_id
                ? product.colors.find((c) => c.variant_id === product.selected_variant_id)
                : null;

              let displayTitle = product.title;
              if (selectedColor) {
                // Replace any other color name in the title with the selected color
                for (const color of product.colors) {
                  if (
                    product.title.includes(color.color_name) &&
                    color.color_name !== selectedColor.color_name
                  ) {
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

                  {/* Action Buttons */}
                  <View style={styles.productButtonRow}>
                    <Pressable style={styles.addQueueButton} onPress={handleAddToQueue}>
                      <Text style={styles.addQueueButtonText}>Add to Queue</Text>
                    </Pressable>
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
                      <Text style={styles.continueButtonText}>Log Now</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })()}

          {/* Empty State */}
          {!product && !loading && !error && queue.length === 0 && (
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
