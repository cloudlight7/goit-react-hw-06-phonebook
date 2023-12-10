// import { combineReducers } from 'redux'
// import { todoReducer } from './todo/todoReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
