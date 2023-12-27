import { configureStore } from "@reduxjs/toolkit";
import userReducer, { saveUserData } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.subscribe(() => {
  saveUserData(store.getState().user);
});

export default store;
