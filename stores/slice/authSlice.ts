import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getCookie, setCookie, removeCookie } from "@/lib/cookieUtil";
import type { AuthState, TokenPayload } from "@/api/types";

const initialState: AuthState = {
  token: null,
  payload: null,
};

const TOKEN_KEY = "token";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAuth: (state) => {
      const token = getCookie(TOKEN_KEY);
      if (token) {
        state.token = token;
        state.payload = JSON.parse(atob(token.split(".")[1])) as TokenPayload;
      }
    },
    loginAuth: (state, action: PayloadAction<string>) => {
      setCookie(TOKEN_KEY, action.payload);
      state.token = action.payload;
      state.payload = JSON.parse(
        atob(action.payload.split(".")[1])
      ) as TokenPayload;
    },
    logoutAuth: (state) => {
      state.token = null;
      removeCookie(TOKEN_KEY);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadAuth, loginAuth, logoutAuth } = authSlice.actions;

export default authSlice.reducer;
