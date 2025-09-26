import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  count: number;
  isReady: boolean;
}


//* Estado inicial del slice
const initialState: CounterState = {
  count: 5,
  isReady: false,
};


//* Reducers del slice, un slice es una porcion del estado global de la aplicacion. Que contiene el estado inicial y los reducers.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isReady) return;
      
      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      state.count--;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;

      state.count = action.payload;
    },
  },
});

export const { addOne, substractOne, resetCounter } = counterSlice.actions;

export default counterSlice.reducer