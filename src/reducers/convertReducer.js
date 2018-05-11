import * as constants from '../constants';

const initialState = {
  loading: false,
  error: false,
  currentCurrency: 'EUR',
  currentAmount: '',
  wantedCurrency: '',
  convertedValue: '',
  showConvertedValue: false
};

export default function convertReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CONVERT_CURRENT_CURRENCY_CHANGE:
      return { ...state, currentCurrency: action.payload.value };
    case constants.CONVERT_CURRENT_AMOUNT_CHANGE_VALID:
      return { ...state, currentAmount: action.payload.value };
    case constants.CONVERT_WANTED_CURRENCY_CHANGE:
      return { ...state, wantedCurrency: action.payload.value };

    case constants.CONVERT_CURRENCY:
      return { ...state, loading: true, error: false };
    case constants.CONVERT_CURRENCY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        showConvertedValue: true,
        convertedValue: action.payload.value
      };
    case constants.CONVERT_CURRENCY_ERROR:
      return { ...state, loading: false, error: true };

    case constants.CONVERT_CLEAR_STATE:
      return { ...initialState };

    default:
      return { ...state };
  }
}
