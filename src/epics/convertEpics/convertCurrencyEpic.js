import * as constants from '../../constants';
import { latestApiUrl } from '../../config/api.config';
import { ajax } from 'rxjs/observable/dom/ajax';
import numeral from 'numeral';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

export const convertCurrencyEpic = (action$, { getState }) => {
  return action$.ofType(constants.CONVERT_CURRENCY)
    .mergeMap(() => {
      const state = getState().homeState;
      const { currentCurrency, currentAmount, wantedCurrency } = state;

      const url = `${latestApiUrl}&base=${currentCurrency}&symbols=${wantedCurrency}`;

      return ajax.get(url)
        .map((responseData) => {
          const { response } = responseData;

          if (response.success) {
            const rate = response.rates[wantedCurrency];
            const value = rate * parseFloat(currentAmount);

            return {
              type: constants.CONVERT_CURRENCY_SUCCESS,
              payload: { value: numeral(value).format('0.00') }
            };
          }

          return {
            type: constants.CONVERT_CURRENCY_ERROR
          };
        });
    });
};
