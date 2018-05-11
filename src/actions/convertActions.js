import * as constants from '../constants';

export const convertSymbolsGet = () => {
  return {
    type: constants.CONVERT_SYMBOLS_GET
  };
};

export const changeCurrentCurrency = (value) => {
  return {
    type: constants.CONVERT_CURRENT_CURRENCY_CHANGE,
    payload: { value }
  };
};

export const changeCurrentAmount = (value) => {
  return {
    type: constants.CONVERT_CURRENT_AMOUNT_CHANGE,
    payload: { value }
  };
};

export const changeWantedCurrency = (value) => {
  return {
    type: constants.CONVERT_WANTED_CURRENCY_CHANGE,
    payload: { value }
  };
};
