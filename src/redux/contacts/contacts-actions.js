import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});
export const setDelite = createAction('contacts/delete', payload => {
  return {
    payload: {
      payload,
    },
  };
});
// export const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// export const setDelite = payload => {
//   return {
//     type: DELETE_CONTACT,
//     payload: {
//       payload,
//     },
//   };
// };
