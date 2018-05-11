import * as constants from '../constants';

const initialState = {
  loading: false,
  error: false,
  myCurrency: 'EUR',
  otherCurrency: '',
  startDate: undefined,
  endDate: undefined
};

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case constants.HISTORY_MY_CURRENCY_CHANGE:
      return { ...state, myCurrency: action.payload.value };
    case constants.HISTORY_OTHER_CURRENCY_CHANGE:
      return { ...state, otherCurrency: action.payload.value };
    case constants.HISTORY_START_DATE_CHANGE:
      return { ...state, startDate: action.payload.date };
    case constants.HISTORY_END_DATE_CHANGE:
      return { ...state, endDate: action.payload.date };

    default:
      return state;
  }
}
