import { createSlice } from "@reduxjs/toolkit";

export const prefCompaniesSlice = createSlice({
  // ---------NAME--------------
  name: "prefCompanies",

  // ---------- INITIAL STATE-------------
  initialState: {
    value: [],
  },

  // ----------REDUCERS-------------------

  reducers: {
    addCompanie: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCompanie } = prefCompaniesSlice.actions;
export const prefCompaniesReducer = prefCompaniesSlice.reducer;
