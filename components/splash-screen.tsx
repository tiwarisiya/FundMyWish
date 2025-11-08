import React from 'react';
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';

export type SplashScreenProps = {
  visible: boolean;
};

export default function SplashScreen({ visible }: SplashScreenProps) {
  if (!visible) return null;

  // Use the custom logo from assets
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const logo = require('@/assets/images/fundmywishlogo.png');

  return (
    <View style={styles.container} pointerEvents="auto">
      <StatusBar barStyle="light-content" translucent={false} backgroundColor="#57A6FF" />
      <Image source={logo} style={styles.logo} resizeMode="contain" accessibilityIgnoresInvertColors />
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#57A6FF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    paddingHorizontal: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '700',
  },
});
