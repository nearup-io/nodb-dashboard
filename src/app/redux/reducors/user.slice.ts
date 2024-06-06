import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/redux/store.ts";

export interface User {
  clerkUserId: string;
  email: string;
}

export interface UserTelegramSettings {
  telegramId: number;
  appName: string;
  envName: string;
}

export interface UserState {
  user: User;
  userTelegramSettings?: UserTelegramSettings;
}

const initialState: UserState = {
  user: {
    clerkUserId: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState): boolean =>
  !!state.user.user.clerkUserId;

export const selectUser = (state: RootState): User => state.user.user;

export default userSlice.reducer;
