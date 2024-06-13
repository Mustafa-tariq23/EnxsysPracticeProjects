import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slices/TaskSlice'

import { loadStateFromLocalStorage, saveStateToLocalStorage } from "./localStorage";


const persistedState = loadStateFromLocalStorage();


export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;