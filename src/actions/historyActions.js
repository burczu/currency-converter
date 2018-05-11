import * as constants from '../constants';

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
