import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userData: {},
    userStatus: {
      connected: false,
    },
  },
  reducers: {
    userSignIn: (state, action) => {
      state.userData = action.payload;
      state.userStatus = { connected: true };
    },
    userNameUpdate: (state, action) => {
      state.userData.userName = action.payload;
    },
    userSignOut: (state) => {
      state.userData = {};
      state.userStatus = { connected: false };
    },
  },
});
export const { userSignIn, userSignOut, userNameUpdate } = userSlice.actions;