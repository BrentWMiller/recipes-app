import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { recipesReducer } from './recipes';

export default configureStore({
  reducer: combineReducers({
    userReducer,
    recipesReducer
  }),
});