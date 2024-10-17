import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  extraReducers: (builder) => {
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        isAnyOf(
          addContact.fulfilled,
          deleteContact.fulfilled,
          fetchContacts.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addContact.pending,
          deleteContact.pending,
          fetchContacts.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          addContact.rejected,
          deleteContact.rejected,
          fetchContacts.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
