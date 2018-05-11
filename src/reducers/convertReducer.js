import * as constants from '../constants';

const initialState = {
  availableSymbols: {},
  availableSymbolsLoading: true,
  availableSymbolsError: false,
  currentCurrency: '',
  currentAmount: '',
  wantedCurrency: ''
};

export default function convertReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CONVERT_SYMBOLS_GET:
      return { ...state, availableSymbolsLoading: true, availableSymbolsError: false };
    case constants.CONVERT_SYMBOLS_GET_SUCCESS:
      return {
        ...state,
        availableSymbolsLoading: false,
        availableSymbolsError: false,
        availableSymbols: action.payload.symbols
      };
    case constants.CONVERT_SYMBOLS_GET_ERROR:
      return { ...state, availableSymbolsLoading: false, availableSymbolsError: true };

    case constants.CONVERT_CURRENT_CURRENCY_CHANGE:
      return { ...state, currentCurrency: action.payload.value };
    case constants.CONVERT_CURRENT_AMOUNT_CHANGE_VALID:
      return { ...state, currentAmount: action.payload.value };
    case constants.CONVERT_WANTED_CURRENCY_CHANGE:
      return { ...state, wantedCurrency: action.payload.value };

    default:
      return { ...state };
  }
}
