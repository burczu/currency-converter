import { combineEpics } from 'redux-observable';
import { convertSymbolsGet } from './convertEpics/convertSymbolsGetEpic';
import { changeCurrentAmountEpic } from './convertEpics/changeCurrentAmountEpic';
import { convertCurrencyEpic } from './convertEpics/convertCurrencyEpic';

const rootEpic = combineEpics(
  convertSymbolsGet,
  changeCurrentAmountEpic,
  convertCurrencyEpic
);

export default rootEpic;
