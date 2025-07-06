import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
