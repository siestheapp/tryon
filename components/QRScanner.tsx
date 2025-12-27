import { useState, useEffect, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet, Linking, Dimensions } from 'react-native';
import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useTheme } from '../theme';
import * as Haptics from 'expo-haptics';

interface QRScannerProps {
  onScan: (url: string) => void;
  onClose: () => void;
  onError: (message: string) => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCANNER_SIZE = SCREEN_WIDTH * 0.7;

export function QRScanner({ onScan, onClose, onError }: QRScannerProps) {
  const { theme, spacing, radius, fontSize, fontWeight } = useTheme();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          aspectRatio: 1,
          borderRadius: radius.lg,
          overflow: 'hidden',
          backgroundColor: theme.colors.backgroundSecondary,
        },
        camera: {
          flex: 1,
        },
        overlay: {
          ...StyleSheet.absoluteFillObject,
          justifyContent: 'center',
          alignItems: 'center',
        },
        scanFrame: {
          width: SCANNER_SIZE * 0.6,
          height: SCANNER_SIZE * 0.6,
          borderWidth: 2,
          borderColor: theme.colors.primary,
          borderRadius: radius.md,
          backgroundColor: 'transparent',
        },
        cornerTL: {
          position: 'absolute',
          top: -2,
          left: -2,
          width: 20,
          height: 20,
          borderTopWidth: 4,
          borderLeftWidth: 4,
          borderColor: theme.colors.primary,
          borderTopLeftRadius: radius.md,
        },
        cornerTR: {
          position: 'absolute',
          top: -2,
          right: -2,
          width: 20,
          height: 20,
          borderTopWidth: 4,
          borderRightWidth: 4,
          borderColor: theme.colors.primary,
          borderTopRightRadius: radius.md,
        },
        cornerBL: {
          position: 'absolute',
          bottom: -2,
          left: -2,
          width: 20,
          height: 20,
          borderBottomWidth: 4,
          borderLeftWidth: 4,
          borderColor: theme.colors.primary,
          borderBottomLeftRadius: radius.md,
        },
        cornerBR: {
          position: 'absolute',
          bottom: -2,
          right: -2,
          width: 20,
          height: 20,
          borderBottomWidth: 4,
          borderRightWidth: 4,
          borderColor: theme.colors.primary,
          borderBottomRightRadius: radius.md,
        },
        hint: {
          position: 'absolute',
          bottom: spacing.xl,
          fontSize: fontSize.sm,
          color: '#fff',
          textAlign: 'center',
          textShadowColor: 'rgba(0,0,0,0.8)',
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 3,
        },
        closeButton: {
          position: 'absolute',
          top: spacing.md,
          right: spacing.md,
          backgroundColor: 'rgba(0,0,0,0.6)',
          paddingVertical: spacing.xs,
          paddingHorizontal: spacing.md,
          borderRadius: radius.full,
        },
        closeButtonText: {
          color: '#fff',
          fontSize: fontSize.sm,
          fontWeight: fontWeight.medium,
        },
        permissionContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: spacing.xl,
        },
        permissionText: {
          fontSize: fontSize.base,
          color: theme.colors.textSecondary,
          textAlign: 'center',
          marginBottom: spacing.lg,
        },
        settingsButton: {
          backgroundColor: theme.colors.primary,
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.lg,
          borderRadius: radius.md,
          marginBottom: spacing.md,
        },
        settingsButtonText: {
          color: theme.colors.textOnPrimary,
          fontSize: fontSize.base,
          fontWeight: fontWeight.semibold,
        },
        cancelText: {
          color: theme.colors.textMuted,
          fontSize: fontSize.sm,
          marginTop: spacing.sm,
        },
        loadingText: {
          fontSize: fontSize.base,
          color: theme.colors.textSecondary,
          textAlign: 'center',
        },
      }),
    [theme, spacing, radius, fontSize, fontWeight]
  );

  // Request permission on mount if not determined
  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    if (scanned) return;

    // Validate it's a URL
    const urlPattern = /^https?:\/\/.+/i;
    if (!urlPattern.test(data)) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      onError("This QR code doesn't contain a product link");
      return;
    }

    setScanned(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onScan(data);
  };

  // Still loading permission status
  if (!permission) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Text style={styles.loadingText}>Requesting camera access...</Text>
        </View>
      </View>
    );
  }

  // Permission denied
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>
            Camera access is needed to scan QR codes on product tags
          </Text>
          {permission.canAskAgain ? (
            <Pressable style={styles.settingsButton} onPress={requestPermission}>
              <Text style={styles.settingsButtonText}>Grant Access</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.settingsButton} onPress={() => Linking.openSettings()}>
              <Text style={styles.settingsButtonText}>Open Settings</Text>
            </Pressable>
          )}
          <Pressable onPress={onClose}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        {/* Viewfinder overlay */}
        <View style={styles.overlay}>
          <View style={styles.scanFrame}>
            <View style={styles.cornerTL} />
            <View style={styles.cornerTR} />
            <View style={styles.cornerBL} />
            <View style={styles.cornerBR} />
          </View>
          <Text style={styles.hint}>Point at a QR code</Text>
        </View>

        {/* Close button */}
        <Pressable style={styles.closeButton} onPress={onClose} hitSlop={12}>
          <Text style={styles.closeButtonText}>Cancel</Text>
        </Pressable>
      </CameraView>
    </View>
  );
}
