import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducors/user.slice";
import { getAxiosInstance } from "@/app/axios.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { axios: getAxiosInstance() },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
