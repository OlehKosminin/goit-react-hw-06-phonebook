import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const filterReduser = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
// import { SET_FILTER } from './filter-types';

// const initialStore = '';

// const fifilterReduser = (store = initialStore, action) => {
//   switch (action.type) {
//     case SET_FILTER:
//       return action.payload;
//     default:
//       return store;
//   }
// };

export default filterReduser;
