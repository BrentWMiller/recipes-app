import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular} from "@expo-google-fonts/inter";
import * as Font from 'expo-font';
import BUTTONS from '~styles/buttons';
import TYPOGRAPHY from '~styles/typography';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async() => {
    await Font.loadAsync({
      'Inter400': Inter_400Regular,
      'Inter500': Inter_500Medium,
      'Inter600': Inter_600SemiBold,
      'Inter700': Inter_700Bold,
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
      <SafeAreaView>
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

        <Text style={[TYPOGRAPHY.heading]}>Heading</Text>
        <Text style={[TYPOGRAPHY.subheading]}>Subheading</Text>
        <Text style={[TYPOGRAPHY.body]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sint consectetur esse aut magnam iste earum id excepturi. Qui sequi labore, nisi rerum dolores explicabo.</Text>
      </SafeAreaView>
    );
  }
}
