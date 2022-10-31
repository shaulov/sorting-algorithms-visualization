import store from '../store/index';

export type InitialState = {
  array: number[];
  arrayLength: number;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
