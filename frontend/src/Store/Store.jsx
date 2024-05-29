import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice"

const store = configureStore({
  reducer: {
    USER: userSlice.reducer,
  },
});

export default store