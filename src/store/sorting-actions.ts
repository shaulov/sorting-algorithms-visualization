import { createAsyncThunk } from '@reduxjs/toolkit';
import { createArray } from '../utils/createArray';
import { AppDispatch, State, } from '../types/state';
import { NameSpace } from '../const';

interface IParams {
  [identifire: number]: number;
}

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

export const setNewParamsAction = createAsyncThunk<number[], IParams, {
  dispatch: AppDispatch;
  state: State;
}>(
  'ARRAY/SET_NEW_PARAMS',
  (params, {dispatch, getState}) => {
    const array: number[] = getState()[NameSpace.Array].array;
    for (const index in params) {
      array[index] = params[index];
    }

    return array;
  }
);
