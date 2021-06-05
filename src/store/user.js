import { firebase } from '~utils/firebase';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: {
    uid: null,
    name: '',
    email: ''
  },
  creating: false
};

export const userReducer = createReducer(initialState, {
  [createAction('user/SET_USER')]: (state, action) => {
    state.user = action.payload;
  },
  [createAction('user/SET_CREATING')]: (state, action) => {
    state.creating = action.payload;
  },
});

export const createUserWithEmailAndPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'user/SET_CREATING', payload: true });

      const userRef = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (userRef) {
        try {
          userRef.user.updateProfile({
            displayName: name,
          });
          await firebase.firestore().collection('users').doc(userRef.user.uid).set({
            created: new Date()
          });

          dispatch({ type: 'user/SET_CREATING', payload: false });
        } catch (error) {
          dispatch({ type: 'user/SET_CREATING', payload: false });
          throw error;
        }

        dispatch(signInWithEmailAndPassword(email, password));
      }
    } catch (error) {
      dispatch({ type: 'user/SET_CREATING', payload: false });
      throw error;
    }
  };
};

export const createUserDoc = (uid) => {
  return async () => {
    try {
      firebase.firestore().collection('users').doc(uid).set({
        uid
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export const signInWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const { user } = userCredential;

      dispatch({
        type: 'user/SET_USER',
        payload: { email: user.email, uid: user.uid, name: user.displayName },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch({
        type: 'user/SET_USER',
        payload: {},
      });
    } catch (error) {
      throw error;
    }
  };
};