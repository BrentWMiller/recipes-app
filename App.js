import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Inter_500Medium, Inter_600SemiBold} from "@expo-google-fonts/inter";
import * as Font from 'expo-font';
import BUTTONS from '~styles/buttons';
import TYPOGRAPHY from '~styles/typography';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async() => {
    await Font.loadAsync({
      'Inter500': Inter_500Medium,
      'Inter600': Inter_600SemiBold,
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Pressable>
          <Text style={[BUTTONS.default]}>Button Example</Text>
        </Pressable>
        <Pressable>
          <Text style={[BUTTONS.dark]}>Button Example</Text>
        </Pressable>
        <Pressable>
          <Text style={[BUTTONS.light]}>Button Example</Text>
        </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
