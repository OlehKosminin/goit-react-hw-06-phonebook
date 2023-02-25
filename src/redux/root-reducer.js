import fifilterReduser from './filter/filter-reducer';
import contactReduser from './contacts/contacts-reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactReduser,
  filter: fifilterReduser,
});

export default rootReducer;
