import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContactsAction: {
      // Модифікація обʼєкту перед записом у стейт
      prepare: contacts => {
        return { payload: { ...contacts, id: nanoid() } };
      },
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContactsAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
