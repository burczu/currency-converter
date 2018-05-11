import { combineEpics } from 'redux-observable';
import { symbolsGetEpic } from './symbolsEpics/symbolsGetEpic';
import { changeCurrentAmountEpic } from './convertEpics/changeCurrentAmountEpic';
import { convertCurrencyEpic } from './convertEpics/convertCurrencyEpic';
import { checkCurrencyHistoryRequestEpic } from './historyEpics/checkCurrencyHistoryRequestEpic';
import { checkCurrencyHistorySecondDateEpic } from './historyEpics/checkCurrencyHistorySecondDateEpic';

const rootEpic = combineEpics(
  symbolsGetEpic,
  changeCurrentAmountEpic,
  convertCurrencyEpic,
  checkCurrencyHistoryRequestEpic,
  checkCurrencyHistorySecondDateEpic
);

export default rootEpic;
