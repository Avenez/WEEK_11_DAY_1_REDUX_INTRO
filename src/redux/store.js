import { configureStore } from "@reduxjs/toolkit";
import { prefCompaniesReducer } from "./prefCompanies";

export default configureStore({
  reducer: {
    prefCompanies: prefCompaniesReducer,
  },
});
