import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
// const contactReduser = createReducer([], {
//   [addContact]: (store, { payload }) => [...store, payload],
//   [setDelite]: (store, { payload }) =>
//     store.filter(item => item.id !== payload.payload),
// });

const contactsSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    setDelete: (store, { payload }) =>
      store.filter(item => item.id !== payload.payload),
  },
});

export const { addContact, setDelete } = contactsSlice.actions;
export default contactsSlice.reducer;
