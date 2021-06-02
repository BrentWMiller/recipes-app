import { firebase } from '~utils/firebase';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  modalIsVisible: false
};

export const recipesReducer = createReducer(initialState, {
  [createAction('recipes/SET_MODAL_VISIBILITY')]: (state, action) => {
    state.modalIsVisible = action.payload;
  },
});

export const setModalVisibility = (visibility) => {
  return async (dispatch) => {
    dispatch({
      type: 'recipes/SET_MODAL_VISIBILITY',
      payload: visibility,
    });
  }
} 