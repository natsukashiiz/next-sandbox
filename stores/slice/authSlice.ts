import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadAuth: (state) => {
      const tokenStore = localStorage.getItem("token");

      if (window.location.pathname === "/login") {
        return;
      }

      if (!tokenStore) {
        // window.location.href = "/login";
      }

      state.token = tokenStore;
    },
    loginAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logoutAuth: (state) => {
      state.token = null;
      localStorage.removeItem("token");
      //   window.location.href = "/login";
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadAuth, loginAuth, logoutAuth } = authSlice.actions;

export default authSlice.reducer;
