import store from '../store/index';

export type ArrayProcess = {
  array: number[];
  arrayLength: number;
}

export type ComparisonProcess = {
  inProgress: boolean;
  sortingSpeed: number;
  activeElements: number[];
  sortedElements: number[];
  additionalElenents: number[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
