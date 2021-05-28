import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular} from "@expo-google-fonts/inter";
import * as Font from 'expo-font';
import LoggedIn from '~navigation/LoggedIn';

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
    return LoggedIn();
  }
}
