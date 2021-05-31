import { firebase } from '~utils/firebase';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const userReducer = createReducer(initialState, {
  [createAction('user/SET_USER')]: (state, action) => {
    state.user = action.payload;
  },
});

export const createUserWithEmailAndPassword = (email, password, name) => {
  return async (dispatch) => {
    try {
      const userRef = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await userRef.user.updateProfile({
        displayName: name,
      });
    } catch (error) {
      throw error;
    }
  };
};

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