import { combineReducers } from '@reduxjs/toolkit';
import { arraySlice } from './array-process/array-process';
import { comparisonSlice } from './comparison-process/comparison-process';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Array]: arraySlice.reducer,
  [NameSpace.Comparison]: comparisonSlice.reducer,
});
