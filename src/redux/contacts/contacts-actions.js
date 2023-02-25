import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';
import { nanoid } from 'nanoid';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const setDelite = payload => {
  return {
    type: DELETE_CONTACT,
    payload: {
      payload,
    },
  };
};
