import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { resetArrayAction, setNewParamsAction } from '../sorting-actions';
import { ArrayProcess } from '../../types/state';
import { DEFAULT_ARRAY_LENGTH, NameSpace } from '../../const';

const initialState: ArrayProcess = {
  array: [],
  arrayLength: DEFAULT_ARRAY_LENGTH,
};

export const arraySlice = createSlice({
  name: NameSpace.Array,
  initialState: initialState,
  reducers: {
    setArray: (state, action: PayloadAction<number[]>) => {
      state.array = action.payload;
    },
    setLength: (state, action: PayloadAction<number>) => {
      state.arrayLength = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(resetArrayAction.fulfilled, (state, action: PayloadAction<number[]>) => {
        state.array = action.payload;
      })
      .addCase(setNewParamsAction.fulfilled, (state, action: PayloadAction<number[]>) => {
        state.array = action.payload;
      });
  },
});

export const { setArray, setLength } = arraySlice.actions;
