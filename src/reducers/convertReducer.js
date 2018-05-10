import * as constants from '../constants';

const initialState = {
  availableSymbols: [],
  availableSymbolsLoading: true,
  availableSymbolsError: false
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
    default:
      return { ...state };
  }
}
