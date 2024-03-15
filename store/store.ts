 import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './orderSlice';
import paymentReducer from './paymentSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      order: orderReducer,
      payment: paymentReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

