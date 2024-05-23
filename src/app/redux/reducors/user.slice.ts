import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/redux/store.ts";
import { type Axios } from "axios";

export interface User {
  clerkUserId: string;
  email: string;
  jwtToken: string;
}

interface UserSettings {
  telegramId?: number;
  whatsappNumber?: string;
}

export interface UserState {
  user: User;
  settings: UserSettings;
}

const initialState: UserState = {
  user: {
    clerkUserId: "",
    email: "",
    jwtToken: "",
  },
  settings: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserSettings.fulfilled, (state, action) => {
      state.settings = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const selectIsUserLoggedIn = (state: RootState): boolean =>
  !!state.user.user.clerkUserId;

export const selectUser = (state: RootState): User => state.user.user;

export default userSlice.reducer;

export const updateUserSettings = createAsyncThunk<
  UserSettings,
  UserSettings,
  {
    extra: {
      axios: Axios;
    };
  }
>(
  "user/updateSettings",
  async (settings: UserSettings, thunkAPI): Promise<UserSettings> => {
    const { axios } = thunkAPI.extra;

    const response = await axios.patch<UserSettings>(
      "/users/settings/telegram",
      {
        telegramId: settings.telegramId,
      },
    );
    console.log("axios", axios);
    console.log("settings", settings);
    console.log("response", response.data);

    return {
      telegramId: 555,
      whatsappNumber: undefined,
    };
  },
);
