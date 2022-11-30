import { createAction } from '@reduxjs/toolkit';

interface IParams {
  [identifire: number]: number;
}

export const setNewParams = createAction<IParams>('SORTING/SET_NEW_PARAMS');

export const bubbleSort = createAction<number[]>('SORTING/BUBBLE');
