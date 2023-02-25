import { createReducer } from '@reduxjs/toolkit';
import { addContact, setDelite } from './contacts-actions';

const contactReduser = createReducer([], {
  [addContact]: (store, { payload }) => [...store, payload],
  [setDelite]: (store, { payload }) =>
    store.filter(item => item.id !== payload.payload),
});

// import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

// const initialStore = [];

// const contactReduser = (store = initialStore, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...store, action.payload];
//     case DELETE_CONTACT:
//       const result = store.filter(item => item.id !== action.payload.payload);
//       return { ...store, contacts: result };
//     default:
//       return store;
//   }
// };

export default contactReduser;
