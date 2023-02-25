import { SET_FILTER } from './filter-types';

const initialStore = '';

const fifilterReduser = (store = initialStore, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return store;
  }
};

export default fifilterReduser;
