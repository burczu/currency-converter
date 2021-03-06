import * as constants from '../constants';

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

export const convertCurrency = () => {
  return {
    type: constants.CONVERT_CURRENCY
  };
};

export const convertClearState = () => {
  return {
    type: constants.CONVERT_STATE_CLEAR
  }
};
