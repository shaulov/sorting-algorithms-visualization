import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { bubbleSort } from './action';
import { setSortedElements } from './comparison-process/comparison-process';
import { sortByBubble } from '../utils/sortByBubble';

const bubbleSortListener = createListenerMiddleware();

bubbleSortListener.startListening({
  actionCreator: bubbleSort,
  effect: (action, listenerApi) => {
    const array = [...action.payload];

    // for(let step = 0; step < array.length - 1; step++) {
    //   for(let compareIndex = 0; compareIndex < array.length - 1 - step; compareIndex++) {

    //   }
    // }

    // console.log(array);

    // listenerApi.dispatch(setNewParams());
    listenerApi.dispatch(setSortedElements(sortByBubble(array)));
  }
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(bubbleSortListener.middleware),
});

export default store;
