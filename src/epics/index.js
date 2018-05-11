import { combineEpics } from 'redux-observable';
import { convertSymbolsGet } from './convertEpics/convertSymbolsGetEpic';
import { changeCurrentAmountEpic } from './convertEpics/changeCurrentAmountEpic';

const rootEpic = combineEpics(
  convertSymbolsGet,
  changeCurrentAmountEpic
);

export default rootEpic;
