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

    const completedElements: number[] = [];

    listenerApi.dispatch(setSortedElements(sortByBubble(array)));

    console.log(sortByBubble(array));
  }
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(bubbleSortListener.middleware),
});

export default store;
