import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from '../../types/initial-state';
import { DEFAULT_ARRAY_LENGTH, NameSpace } from '../../const';
import { createArray } from '../../utils/createArray';

const resetArray = createAsyncThunk<number[], undefined>(
  'ARRAY/RESET_ARRAY',
  (_arg, thunkAPI) => createArray(DEFAULT_ARRAY_LENGTH),
);

const initialState: InitialState = {
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
      .addCase(resetArray.fulfilled, (state, action: PayloadAction<number[]>) => {
        state.array = action.payload;
      });
  },
});
