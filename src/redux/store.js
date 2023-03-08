import { createStore, combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';

const rootReducer = combineReducers({
  reservations: reservationsReducer,
});

const store = createStore(rootReducer);

export default store;
