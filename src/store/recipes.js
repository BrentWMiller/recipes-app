import { firebase } from '~utils/firebase';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  recipes: []
};

export const recipesReducer = createReducer(initialState, {
  [createAction('recipes/SET_RECIPES')]: (state, action) => {
    state.recipes = action.payload;
  },
});

export const saveRecipe = (recipe, uid) => {
  return async () => {
    try {
      await firebase.firestore().collection(`users/${uid}/recipes`).doc().set({
        ...recipe,
        created: new Date(),
        updated: new Date()
      });

      return;
    } catch (error) {
      throw error;
    }
  }
} 