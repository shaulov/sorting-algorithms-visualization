import { createAction } from '@reduxjs/toolkit';

export const setArray = createAction<number[], 'ARRAY/SET_ARRAY'>('ARRAY/SET_ARRAY');

export const setLength = createAction<number, 'ARRAY/SET_LENGTH'>('ARRAY/SET_LENGTH');
