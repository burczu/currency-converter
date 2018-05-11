import { combineReducers } from 'redux';
import symbolsReducer from './symbolsReducer';
import convertReducer from './convertReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  symbolsState: symbolsReducer,
  homeState: convertReducer,
  historyState: historyReducer
});
