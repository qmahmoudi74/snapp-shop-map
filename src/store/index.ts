import { configureStore } from "@reduxjs/toolkit";
import map from "store/slices/component-slices/mapSlice";

const store = configureStore({
  reducer: { map }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
