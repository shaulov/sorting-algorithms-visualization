import { createAsyncThunk } from '@reduxjs/toolkit';
import { createArray } from '../utils/createArray';
import { AppDispatch, State, } from '../types/state';
import { NameSpace } from '../const';

export const resetArrayAction = createAsyncThunk<number[], undefined, {
  dispatch: AppDispatch;
  state: State;
}>(
  'ARRAY/RESET_ARRAY',
  (_arg, {dispatch, getState}) => {
    const arrayLength: number = getState()[NameSpace.Array].arrayLength;

    return createArray(arrayLength);
  },
);
