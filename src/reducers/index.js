import { combineReducers } from 'redux';
import convertReducer from './convertReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  homeState: convertReducer,
  historyState: historyReducer
});
