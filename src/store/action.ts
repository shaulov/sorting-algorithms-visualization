import { createAction } from '@reduxjs/toolkit';

export const setArray = createAction<number[]>('ARRAY/SET_ARRAY');

export const setLength = createAction<number>('ARRAY/SET_LENGTH');

export const reset = createAction('COMPARISON/RESET');

export const toggleSort = createAction<boolean>('COMPARISON/TOGGLE_SORT');

export const setSortingSpeed = createAction<number>('COMPARISON/SET_SORTING_SPEED');

export const setActiveElements = createAction<number[]>('COMPARISON/SET_ACTIVE_ELEMENTS');

export const setAdditionalElements = createAction<number[]>('COMPARISON/SET_ADDITIONAL_ELEMENTS');

export const setSortedElements = createAction<number[]>('COMPARISON/SET_SORTED_ELEMENTS');
