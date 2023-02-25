import { ADD_CONTACT, SET_FILTER, DELETE_CONTACT } from './types';
//  ;
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

export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
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
