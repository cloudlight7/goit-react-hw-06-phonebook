import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    addFilterAction: {
      // Модифікація обʼєкту перед записом у стейт
      prepare: filter => {
        //contactsSlice.action.addContactsAction()
        return { payload: { filter } };
      },
      reducer: (state, action) => {
        state.filter = action.payload;
        //state.contacts.push(action.payload);
      },
    },
  },
});

export const { addFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
