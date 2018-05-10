import { combineEpics } from 'redux-observable';
import { convertSymbolsGet } from './convertEpics/convertSymbolsGetEpic';

const rootEpic = combineEpics(
  convertSymbolsGet
);

export default rootEpic;
