import { firebase } from '~utils/firebase';
import { format as formatDate } from 'date-fns';
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

export const getUserRecipes = (uid) => {
  return async (dispatch) => {
    try {
      await firebase.firestore().collection(`users/${uid}/recipes`)
        .onSnapshot(async (snapshot) => {
          let recipes = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() };
          })
          .map((recipe) => {
            recipe.created = recipe.created.seconds;
            recipe.updated = recipe.updated.seconds;

            return recipe;
          });

          // Sort by updated date
          recipes = recipes.sort((a, b) => a.updated - b.updated).reverse();

          dispatch({ type: 'recipes/SET_RECIPES', payload: recipes });
        });
    } catch (error) {
      console.error(error);
    }
  }
}