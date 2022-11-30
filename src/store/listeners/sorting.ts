import { createListenerMiddleware } from '@reduxjs/toolkit';
// import { setArray } from '../array-process/array-process';
import { setNewParams } from '../action';
// import { NameSpace } from '../../const';
// import { State } from '../../types/state';

const setNewParamsListener = createListenerMiddleware();
setNewParamsListener.startListening({
  actionCreator: setNewParams,
  effect: (action, listenerApi) => {
    listenerApi.getState();
    // eslint-disable-next-line
    // const array: number[] = state && Object.keys(state).length !== 0 ? [...state[NameSpace.Array].array] : [];
    // const params = action.payload;

    // for (const index in params) {
    //   array[index] = params[index];
    // }
    // // eslint-disable-next-line
    // console.log(array);

    // listenerApi.dispatch(setArray(array));
  }
});

// const setDelay = createListenerMiddleware();
