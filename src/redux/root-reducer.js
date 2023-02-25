import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import fifilterReduser from './filter/filter-reducer';
import contactReduser from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactReduser,
  filter: fifilterReduser,
});

const persistConfig = {
  storage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
