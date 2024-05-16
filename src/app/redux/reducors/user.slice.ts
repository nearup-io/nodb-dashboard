import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/redux/store.ts";

export interface User {
  clerkUserId: string;
  email: string;
}

export interface UserState {
  user: User;
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
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState): boolean =>
  !!state.user.user.clerkUserId;

export const selectUser = (state: RootState): UserState => state.user;

export default userSlice.reducer;
