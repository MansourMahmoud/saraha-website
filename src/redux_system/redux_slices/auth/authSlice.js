import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authData = {
  cn: false,
  tc: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: authData,
  reducers: {
    setAuth: (state, action) => {
      state.tc === "sjdcndsjkcslckeowjwieojdweoijdweoijdowe";
      state.cn = true;

      //   state.tc = action.payload.data.data.token;
      //   if (action.payload.data.data.token) {
      //     state.cn = true;
      //   }
    },

    logoutAuth: (state, action) => {
      state.tc = "";
      state.cn = false;
    },
  },
});
export const { setAuth, logoutAuth } = authSlice.actions;
export const auth = authSlice.reducer;
