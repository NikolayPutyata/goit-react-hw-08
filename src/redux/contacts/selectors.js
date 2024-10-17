import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContactsState = (state) => state.contacts;

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
