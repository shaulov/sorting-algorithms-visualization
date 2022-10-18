import { createReducer } from '@reduxjs/toolkit';
import { setArray, setLength } from './action';
import { InitialState } from '../types/initial-state';
import { DEFAULT_ARRAY_LENGTH } from '../const';

const initialState: InitialState = {
  array: [],
  arrayLength: DEFAULT_ARRAY_LENGTH,
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setArray, (state, action) => {
      state.array = action.payload;
    })
    .addCase(setLength, (state, action) => {
      state.arrayLength = action.payload;
    });
});
