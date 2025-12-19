import { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors, spacing, borderRadius, typography, components } from '../theme/tokens';
import { saveTryon, FitRating, BodyPartFit, LengthFit, SizeOption } from '../lib/supabase';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const FIT_OPTIONS: { value: FitRating; label: string; emoji: string }[] = [
  { value: 'too_small', label: 'Too Small', emoji: '😤' },
  { value: 'just_right', label: 'Perfect', emoji: '😍' },
  { value: 'too_large', label: 'Too Large', emoji: '🫠' },
];

// Body-part feedback options (shown only when fit is not perfect)
type BodyPartKey = 'chest' | 'waist' | 'sleeves' | 'length';

interface BodyPartOption {
  key: BodyPartKey;
  label: string;
  icon: string;
}

const BODY_PART_OPTIONS: BodyPartOption[] = [
  { key: 'chest', label: 'Chest/Shoulders', icon: '👔' },
  { key: 'waist', label: 'Waist', icon: '📏' },
  { key: 'sleeves', label: 'Sleeves/Arms', icon: '💪' },
  { key: 'length', label: 'Length', icon: '📐' },
];

interface ColorOption {
  variant_id: number;
  color_name: string;
  swatch_url: string | null;
}

export default function ConfirmScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    product_id: string;
    brand: string;
    title: string;
    category: string;
    image_url: string;
    sizes: string;
    colors: string;
    fits: string;
  }>();

  const sizeOptions: SizeOption[] = params.sizes ? JSON.parse(params.sizes) : [];
  const colorOptions: ColorOption[] = params.colors ? JSON.parse(params.colors) : [];
  const fitOptions: string[] = params.fits ? JSON.parse(params.fits) : [];
  const productId = params.product_id ? parseInt(params.product_id, 10) : 0;

  // Wizard state
  const [currentStep, setCurrentStep] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  // Form state
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [isOtherColor, setIsOtherColor] = useState(false);
  const [customColorName, setCustomColorName] = useState('');
  const [selectedFitType, setSelectedFitType] = useState<string | null>(null); // Product fit (Classic, Slim, etc.)
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const [selectedFit, setSelectedFit] = useState<FitRating | null>(null); // User's fit rating (too_small, etc.)
  const [selectedBodyParts, setSelectedBodyParts] = useState<Set<BodyPartKey>>(new Set());
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);

  // Determine steps dynamically
  // Body-parts step only shows when fit is NOT 'just_right'
  const hasColors = colorOptions.length > 0;
  const hasFitTypes = fitOptions.length > 0;
  const needsBodyParts = selectedFit !== null && selectedFit !== 'just_right';

  const steps = [
    ...(hasColors ? ['color'] : []),
    ...(hasFitTypes ? ['fit_type'] : []),
    'size',
    'fit',
    ...(needsBodyParts ? ['body_parts'] : []),
  ];
  const totalSteps = steps.length;

  const animateToStep = (step: number) => {
    Animated.spring(slideAnim, {
      toValue: -step * SCREEN_WIDTH,
      useNativeDriver: true,
      tension: 50,
      friction: 10,
    }).start();
    setCurrentStep(step);
  };

  const canProceed = () => {
    const stepType = steps[currentStep];
    if (stepType === 'color') {
      return selectedColor || (isOtherColor && customColorName.trim());
    }
    if (stepType === 'fit_type') {
      return selectedFitType;
    }
    if (stepType === 'size') {
      return selectedSize;
    }
    if (stepType === 'fit') {
      return selectedFit;
    }
    if (stepType === 'body_parts') {
      // Body parts is optional - can always proceed (even with none selected)
      return true;
    }
    return false;
  };

  const toggleBodyPart = (key: BodyPartKey) => {
    setSelectedBodyParts(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      animateToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      animateToStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const handleColorSelect = (color: ColorOption) => {
    setSelectedColor(color);
    setIsOtherColor(false);
    setCustomColorName('');
  };

  const handleOtherColor = () => {
    setSelectedColor(null);
    setIsOtherColor(true);
  };

  const handleSave = useCallback(async () => {
    if (!selectedSize || !selectedFit) return;

    setSaving(true);
    try {
      let finalNotes = notes.trim();
      if (isOtherColor && customColorName.trim()) {
        const colorNote = `Color: ${customColorName.trim()}`;
        finalNotes = finalNotes ? `${colorNote}\n${finalNotes}` : colorNote;
      }

      // Determine body-part fit values based on overall fit and selections
      // For "too_small": selected parts are "tight" (chest/waist) or "short" (sleeves/length)
      // For "too_large": selected parts are "loose" (chest/waist) or "long" (sleeves/length)
      const getBodyPartValue = (key: BodyPartKey): BodyPartFit | LengthFit | undefined => {
        if (!selectedBodyParts.has(key)) return undefined;
        if (selectedFit === 'too_small') {
          return (key === 'chest' || key === 'waist') ? 'tight' : 'short';
        }
        if (selectedFit === 'too_large') {
          return (key === 'chest' || key === 'waist') ? 'loose' : 'long';
        }
        return undefined;
      };

      await saveTryon({
        product_id: productId,
        size_label: selectedSize.label,
        overall_fit: selectedFit,
        notes: finalNotes || undefined,
        variant_id: selectedColor?.variant_id,
        // Body-part feedback
        chest_fit: getBodyPartValue('chest') as BodyPartFit | undefined,
        waist_fit: getBodyPartValue('waist') as BodyPartFit | undefined,
        sleeve_fit: getBodyPartValue('sleeves') as LengthFit | undefined,
        length_fit: getBodyPartValue('length') as LengthFit | undefined,
      });

      router.replace('/(tabs)/history');
    } catch (e) {
      console.error('Failed to save tryon:', e);
    } finally {
      setSaving(false);
    }
  }, [selectedSize, selectedFit, selectedColor, isOtherColor, customColorName, notes, productId, router, selectedBodyParts]);

  // Render functions for each step
  const renderColorStep = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepQuestion}>What color did you try?</Text>
      <View style={styles.colorGrid}>
        {colorOptions.map((color) => (
          <Pressable
            key={color.variant_id}
            style={[
              styles.colorSwatch,
              selectedColor?.variant_id === color.variant_id && styles.colorSwatchSelected,
            ]}
            onPress={() => handleColorSelect(color)}
          >
            {color.swatch_url ? (
              <Image
                source={{ uri: color.swatch_url.replace(/\$pdp_sw\d+\$/, '$pdp_sw100$') }}
                style={styles.colorSwatchImage}
                contentFit="cover"
              />
            ) : (
              <View style={styles.colorSwatchFallback}>
                <Text style={styles.colorSwatchFallbackText}>
                  {color.color_name.charAt(0)}
                </Text>
              </View>
            )}
          </Pressable>
        ))}
        <Pressable
          style={[
            styles.colorSwatch,
            styles.colorSwatchOther,
            isOtherColor && styles.colorSwatchSelected,
          ]}
          onPress={handleOtherColor}
        >
          <Text style={styles.colorSwatchOtherText}>+</Text>
        </Pressable>
      </View>
      
      {selectedColor && (
        <Text style={styles.selectedLabel}>{selectedColor.color_name}</Text>
      )}
      
      {isOtherColor && (
        <TextInput
          style={styles.customInput}
          value={customColorName}
          onChangeText={setCustomColorName}
          placeholder="Enter color name..."
          placeholderTextColor={colors.textMuted}
          autoFocus
        />
      )}
    </View>
  );

  const renderFitTypeStep = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepQuestion}>Which fit type?</Text>
      <View style={styles.fitTypeGrid}>
        {fitOptions.map((fit) => (
          <Pressable
            key={fit}
            style={[
              styles.fitTypeChip,
              selectedFitType === fit && styles.fitTypeChipSelected,
            ]}
            onPress={() => setSelectedFitType(fit)}
          >
            <Text
              style={[
                styles.fitTypeChipText,
                selectedFitType === fit && styles.fitTypeChipTextSelected,
              ]}
            >
              {fit}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  const renderSizeStep = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepQuestion}>What size did you try?</Text>
      <View style={styles.sizeGrid}>
        {sizeOptions.map((sizeOption) => (
          <Pressable
            key={sizeOption.label}
            style={[
              styles.sizeChip,
              selectedSize?.label === sizeOption.label && styles.sizeChipSelected,
            ]}
            onPress={() => setSelectedSize(sizeOption)}
          >
            <Text
              style={[
                styles.sizeChipText,
                selectedSize?.label === sizeOption.label && styles.sizeChipTextSelected,
              ]}
            >
              {sizeOption.display}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  const renderFitStep = () => (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.stepContent}
    >
      <Text style={styles.stepQuestion}>How did it fit?</Text>
      <View style={styles.fitGrid}>
        {FIT_OPTIONS.map((option) => (
          <Pressable
            key={option.value}
            style={[
              styles.fitCard,
              selectedFit === option.value && styles.fitCardSelected,
            ]}
            onPress={() => setSelectedFit(option.value)}
          >
            <Text style={styles.fitEmoji}>{option.emoji}</Text>
            <Text
              style={[
                styles.fitLabel,
                selectedFit === option.value && styles.fitLabelSelected,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        style={styles.notesInput}
        value={notes}
        onChangeText={setNotes}
        placeholder="Notes (optional)"
        placeholderTextColor={colors.textMuted}
        multiline
        numberOfLines={2}
      />
    </KeyboardAvoidingView>
  );

  const renderBodyPartsStep = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepQuestion}>
        What felt {selectedFit === 'too_small' ? 'tight' : 'loose'}?
      </Text>
      <Text style={styles.stepSubtitle}>
        Select all that apply (optional)
      </Text>
      <View style={styles.bodyPartsGrid}>
        {BODY_PART_OPTIONS.map((option) => (
          <Pressable
            key={option.key}
            style={[
              styles.bodyPartChip,
              selectedBodyParts.has(option.key) && styles.bodyPartChipSelected,
            ]}
            onPress={() => toggleBodyPart(option.key)}
          >
            <Text style={styles.bodyPartIcon}>{option.icon}</Text>
            <Text
              style={[
                styles.bodyPartLabel,
                selectedBodyParts.has(option.key) && styles.bodyPartLabelSelected,
              ]}
            >
              {option.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  const renderStep = (stepType: string) => {
    switch (stepType) {
      case 'color':
        return renderColorStep();
      case 'fit_type':
        return renderFitTypeStep();
      case 'size':
        return renderSizeStep();
      case 'fit':
        return renderFitStep();
      case 'body_parts':
        return renderBodyPartsStep();
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps - 1;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>
            {currentStep === 0 ? '← Cancel' : '← Back'}
          </Text>
        </Pressable>
        
        {/* Progress indicator */}
        <View style={styles.progressContainer}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index <= currentStep && styles.progressDotActive,
              ]}
            />
          ))}
        </View>
        
        <View style={styles.headerSpacer} />
      </View>

      {/* Product mini card */}
      <View style={styles.productMini}>
        {params.image_url && (
          <Image
            source={{ uri: params.image_url }}
            style={styles.productMiniImage}
            contentFit="cover"
          />
        )}
        <View style={styles.productMiniInfo}>
          <Text style={styles.productMiniBrand}>{params.brand}</Text>
          <Text style={styles.productMiniTitle} numberOfLines={1}>
            {params.title}
          </Text>
        </View>
      </View>

      {/* Wizard steps */}
      <View style={styles.wizardContainer}>
        <Animated.View
          style={[
            styles.stepsRow,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          {steps.map((stepType, index) => (
            <View key={index} style={styles.stepWrapper}>
              {renderStep(stepType)}
            </View>
          ))}
        </Animated.View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable
          style={[
            styles.actionButton,
            !canProceed() && styles.actionButtonDisabled,
          ]}
          onPress={isLastStep ? handleSave : handleNext}
          disabled={!canProceed() || saving}
        >
          {saving ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text style={styles.actionButtonText}>
              {isLastStep ? 'Save Try-On ✓' : 'Next →'}
            </Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  backButton: {
    width: 80,
  },
  backButtonText: {
    ...typography.bodyMedium,
    color: colors.petrol500,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  progressDotActive: {
    backgroundColor: colors.petrol500,
  },
  headerSpacer: {
    width: 80,
  },
  productMini: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    gap: spacing.md,
  },
  productMiniImage: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.surfaceElevated,
  },
  productMiniInfo: {
    flex: 1,
  },
  productMiniBrand: {
    ...typography.caption,
    color: colors.petrol500,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  productMiniTitle: {
    ...typography.bodyMedium,
    fontSize: 14,
  },
  wizardContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  stepsRow: {
    flexDirection: 'row',
    flex: 1,
  },
  stepWrapper: {
    width: SCREEN_WIDTH,
    paddingHorizontal: spacing.xl,
  },
  stepContent: {
    flex: 1,
    paddingTop: spacing.xl,
  },
  stepQuestion: {
    ...typography.h2,
    textAlign: 'center',
    marginBottom: spacing['2xl'],
  },
  // Color grid
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
  },
  colorSwatch: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'transparent',
    overflow: 'hidden',
    backgroundColor: colors.surfaceElevated,
  },
  colorSwatchSelected: {
    borderColor: colors.petrol500,
  },
  colorSwatchImage: {
    width: '100%',
    height: '100%',
  },
  colorSwatchFallback: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surfaceElevated,
  },
  colorSwatchFallbackText: {
    ...typography.bodyMedium,
    color: colors.textMuted,
  },
  colorSwatchOther: {
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorSwatchOtherText: {
    fontSize: 28,
    color: colors.textMuted,
  },
  selectedLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
  customInput: {
    ...components.input,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
  // Fit type grid (Classic, Slim, Tall, etc.)
  fitTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
  },
  fitTypeChip: {
    minWidth: 100,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
  },
  fitTypeChipSelected: {
    backgroundColor: colors.petrol500,
    borderColor: colors.petrol500,
  },
  fitTypeChipText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontSize: 16,
  },
  fitTypeChipTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  // Size grid
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  sizeChip: {
    minWidth: 56,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
  },
  sizeChipSelected: {
    backgroundColor: colors.petrol500,
    borderColor: colors.petrol500,
  },
  sizeChipText: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
  },
  sizeChipTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  // Fit grid
  fitGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.md,
  },
  fitCard: {
    width: 100,
    alignItems: 'center',
    paddingVertical: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.border,
  },
  fitCardSelected: {
    borderColor: colors.petrol500,
    backgroundColor: 'rgba(0, 163, 163, 0.1)',
  },
  fitEmoji: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  fitLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontSize: 13,
  },
  fitLabelSelected: {
    color: colors.petrol400,
  },
  notesInput: {
    ...components.input,
    marginTop: spacing['2xl'],
    minHeight: 80,
    textAlignVertical: 'top',
    paddingTop: spacing.md,
  },
  // Body parts grid
  stepSubtitle: {
    ...typography.body,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: -spacing.lg,
    marginBottom: spacing.xl,
  },
  bodyPartsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.md,
  },
  bodyPartChip: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 2,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  bodyPartChipSelected: {
    borderColor: colors.petrol500,
    backgroundColor: 'rgba(0, 163, 163, 0.1)',
  },
  bodyPartIcon: {
    fontSize: 24,
  },
  bodyPartLabel: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    fontSize: 14,
    flex: 1,
  },
  bodyPartLabelSelected: {
    color: colors.petrol500,
    fontWeight: '600',
  },
  // Footer
  footer: {
    padding: spacing.xl,
    paddingBottom: spacing.md,
  },
  actionButton: {
    ...components.buttonPrimary,
  },
  actionButtonDisabled: {
    backgroundColor: colors.border,
  },
  actionButtonText: {
    ...components.buttonPrimaryText,
  },
});



