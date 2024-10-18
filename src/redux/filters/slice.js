import { createSlice } from "@reduxjs/toolkit";

const filters = {
  query: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filters,
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
