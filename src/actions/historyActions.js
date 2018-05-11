import * as constants from '../constants';
import moment from 'moment';

export const changeMyCurrency = (value) => {
  return {
    type: constants.HISTORY_MY_CURRENCY_CHANGE,
    payload: { value }
  };
};

export const changeOtherCurrency = (value) => {
  return {
    type: constants.HISTORY_OTHER_CURRENCY_CHANGE,
    payload: { value }
  };
};

export const changeStartDate = (date) => {
  return {
    type: constants.HISTORY_START_DATE_CHANGE,
    payload: { date: moment(date).format('YYYY-MM-DD') }
  };
};

export const changeEndDate = (date) => {
  return {
    type: constants.HISTORY_END_DATE_CHANGE,
    payload: { date: moment(date).format('YYYY-MM-DD') }
  }
};

export const checkCurrencyHistoryRequest = () => {
  return {
    type: constants.HISTORY_CHECK_FIRST_DATE
  };
};

export const clearHistoryData = () => {
  return {
    type: constants.HISTORY_STATE_CLEAR
  };
};
