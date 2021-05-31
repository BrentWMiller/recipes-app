import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDp-2J5RhEbiRxWmwN1nfukNxrSRnuKIO4',
  authDomain: 'recipes-rn.firebaseapp.com',
  databaseURL: 'https://recipes-rn.nam5.firebasedatabase.app',
  projectId: 'recipes-rn',
  storageBucket: 'recipes-rn.appspot.com',
  messagingSenderId: '1010486636390',
  appId: '1:1010486636390:ios:037fc6ecf16b1db748a2a7',
};

// Initialize firebase...
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

export { firebase };