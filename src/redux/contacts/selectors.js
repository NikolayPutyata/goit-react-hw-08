import { createSelector } from "@reduxjs/toolkit";
import { selectQueryFilter } from "../filters/selectors";

export const selectContactsState = (state) => state.contacts;

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectQueryFilter],
  (contacts, query) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.number.toLowerCase().includes(query.toLowerCase())
    );
  }
);
