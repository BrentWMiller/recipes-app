import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { firebase } from './src/utils/firebase';
import { Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular} from "@expo-google-fonts/inter";
import * as Font from 'expo-font';
import LoggedIn from '~navigation/LoggedIn';
import LoggedOut from '~navigation/LoggedOut';
import { Provider, useDispatch } from 'react-redux';
import store from '~store/store';

const AppInner = () => {
  const dispatch = useDispatch();
  const [isAuthenticationReady, setAuthenticationReady] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [fontsLoading, setFontsLoading] = useState(true);

  const _loadFontsAsync = async() => {
    await Font.loadAsync({
      'Inter400': Inter_400Regular,
      'Inter500': Inter_500Medium,
      'Inter600': Inter_600SemiBold,
      'Inter700': Inter_700Bold,
    });
    setFontsLoading(false);
  };

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  // firebase auth
  onAuthStateChanged = (user) => {
    const authenticated = (user?.uid && user.uid !== '') || false;

    if (authenticated) {
      dispatch({
        type: 'user/SET_USER',
        payload: { email: user.email, uid: user.uid, name: user.displayName },
      });
      setAuthenticationReady(true);
    }

    setAuthenticated(authenticated);
  };

  firebase.auth().onAuthStateChanged(onAuthStateChanged);

  if (fontsLoading) {
    return (
      <AppLoading />
    );
  }
  
  if (!fontsLoading && (isAuthenticationReady && isAuthenticated)) {
    return (
      <LoggedIn />
    )
  } else {
    return (
      <LoggedOut />
    )
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <AppInner />
    </Provider>
  );
}