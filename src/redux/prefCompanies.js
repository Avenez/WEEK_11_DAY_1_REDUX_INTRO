import { createSlice } from "@reduxjs/toolkit";

export const prefCompaniesSlice = createSlice({
  // ---------NAME--------------
  name: "prefCompanies",

  // ---------- INITIAL STATE-------------
  initialState: {
    value: ["ciao ciao"],
  },

  // ----------REDUCERS-------------------

  reducers: {
    addCompanie: (state, action) => {
      if (state.value.includes(action.payload)) {
        console.log("compagnia già aggiunta!");
      } else {
        state.value.push(action.payload);
      }

      //   state.value.forEach((i) => console.log(i));
      //   console.log(action.payload);
    },
  },
});

export const { addCompanie } = prefCompaniesSlice.actions;
export const prefCompaniesReducer = prefCompaniesSlice.reducer;
