import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { firebase } from './src/utils/firebase';
import { Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular} from "@expo-google-fonts/inter";
import * as Font from 'expo-font';
import LoggedIn from '~navigation/LoggedIn';
import LoggedOut from '~navigation/LoggedOut';
import { Provider } from 'react-redux';
import store from '~store/store';

export default function App() {
  const [isAuthenticationReady, setAuthenticationReady] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
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

  // firebase auth
  onAuthStateChanged = (user) => {
    setAuthenticationReady(true);
    setAuthenticated(!!user);
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else if (isAuthenticationReady && isAuthenticated) {
    return (
      <Provider store={store}>
        {LoggedIn()}
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        {LoggedOut()}
      </Provider>
    )
  }
}
