import { combineReducers } from '@reduxjs/toolkit';
import { arraySlice } from './array-process/array-process';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Array]: arraySlice.reducer,
});
