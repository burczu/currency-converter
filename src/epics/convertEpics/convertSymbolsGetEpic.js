import * as constants from '../../constants';
import { symbolsApiUrl } from '../../config/api.config';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

export const convertSymbolsGet = (action$) => {
  return action$.ofType(constants.CONVERT_SYMBOLS_GET)
    .mergeMap(() => {
      return ajax.get(symbolsApiUrl)
        .map((responseData) => {
          const { response } = responseData;

          if (response.success) {
            return {
              type: constants.CONVERT_SYMBOLS_GET_SUCCESS,
              payload: { symbols: response.symbols }
            };
          }

          return {
            type: constants.CONVERT_SYMBOLS_GET_ERROR
          };
        });
    });
};
