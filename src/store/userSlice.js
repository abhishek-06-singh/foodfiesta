// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadUserData = () => {
  try {
    const serializedData = localStorage.getItem("userData");
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    console.error("Error loading user data from local storage:", err);
    return undefined;
  }
};

const saveUserData = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem("userData", serializedData);
  } catch (err) {
    console.error("Error saving user data to local storage:", err);
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: loadUserData() || {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUserData: () => {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export const selectUserData = (state) => state.user;
export { saveUserData }; // Export saveUserData function

export default userSlice.reducer;
