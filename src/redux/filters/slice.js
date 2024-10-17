import { createSlice } from "@reduxjs/toolkit";

const filters = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filters,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
