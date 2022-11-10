import { createAction } from '@reduxjs/toolkit';

export const bubbleSort = createAction<number[]>('SORTING/BUBBLE');
