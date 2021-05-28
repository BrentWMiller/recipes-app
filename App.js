import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Inter_500Medium, Inter_600SemiBold} from "@expo-google-fonts/inter";
import * as Font from 'expo-font';
import buttonStyles from './styles/buttons';

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
        <Text style={{...buttonStyles.default}}>Button Example</Text>
        <Text style={{...buttonStyles.dark}}>Button Example</Text>
        <Text style={{...buttonStyles.light}}>Button Example</Text>
      </View>
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
