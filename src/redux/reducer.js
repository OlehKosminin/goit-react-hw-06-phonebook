import { ADD_CONTACT, SET_FILTER, DELETE_CONTACT } from './types';

const initialStore = {
  contacts: [
    {
      id: '1',
      name: 'oleh',
      number: '0631539334',
    },
  ],
  filter: '',
};

const reduser = (store = initialStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...store.contacts, action.payload];
      return { ...store, contacts: newContacts };
    case SET_FILTER:
      return { ...store, filter: action.payload };
    case DELETE_CONTACT:
      const result = store.contacts.filter(item => {
        return item.id !== action.payload.payload;
      });
      return { ...store, contacts: result };
    default:
      return store;
  }
};

export default reduser;
