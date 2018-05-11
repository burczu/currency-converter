import * as constants from '../constants';

const initialState = {
  loading: false,
  error: false,
  myCurrency: 'EUR',
  otherCurrency: '',
  startDate: undefined,
  endDate: undefined,
  startDateValue: 0,
  endDateValue: 0,
  showCheckedValue: false
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

    case constants.HISTORY_CHECK_FIRST_DATE:
      return { ...state, loading: true, error: false };
    case constants.HISTORY_CHECK_FIRST_DATE_SUCCESS:
      return { ...state, startDateValue: action.payload.startDateValue };
    case constants.HISTORY_CHECK_FIRST_DATE_ERROR:
      return { ...state, loading: false, error: true };

    case constants.HISTORY_CHECK_SECOND_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        endDateValue: action.payload.endDateValue,
        showCheckedValue: true
      };
    case constants.HISTORY_CHECK_SECOND_DATE_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
}
