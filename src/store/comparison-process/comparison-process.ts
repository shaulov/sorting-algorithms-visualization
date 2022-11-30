import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ComparisonProcess } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ComparisonProcess = {
  inProgress: false,
  sortingSpeed: 1,
  activeElements: [],
  sortedElements: [],
  additionalElenents: [],
};

export const comparisonSlice = createSlice({
  name: NameSpace.Comparison,
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
    toggleSort: (state, action: PayloadAction<boolean>) => {
      state.inProgress = action.payload;
    },
    setSortingSpeed: (state, action: PayloadAction<number>) => {
      state.sortingSpeed = action.payload;
    },
    setActiveElements: (state, action: PayloadAction<number[]>) => {
      state.activeElements = action.payload;
    },
    setAdditionalElements: (state, action: PayloadAction<number[]>) => {
      state.additionalElenents = action.payload;
    },
    setSortedElements: (state, action: PayloadAction<number[]>) => {
      state.sortedElements = action.payload;
    },
  },
});

export const { reset, toggleSort, setSortingSpeed, setActiveElements, setAdditionalElements, setSortedElements } = comparisonSlice.actions;
