import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  userName: string;
  email: string;
}

const initialState: AuthState = {
  userName: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState>) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
