import * as constants from '../constants';

const initialState = {
  availableSymbols: {},
  availableSymbolsLoaded: false,
  loading: true,
  error: false
};

export default function symbolsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SYMBOLS_GET:
      return { ...state, loading: true, error: false };
    case constants.SYMBOLS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        availableSymbols: action.payload.symbols,
        availableSymbolsLoaded: true
      };
    case constants.SYMBOLS_GET_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return { ...state };
  }
}
