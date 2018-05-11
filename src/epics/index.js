import { combineEpics } from 'redux-observable';
import { symbolsGetEpic } from './symbolsEpics/symbolsGetEpic';
import { changeCurrentAmountEpic } from './convertEpics/changeCurrentAmountEpic';
import { convertCurrencyEpic } from './convertEpics/convertCurrencyEpic';

const rootEpic = combineEpics(
  symbolsGetEpic,
  changeCurrentAmountEpic,
  convertCurrencyEpic
);

export default rootEpic;
