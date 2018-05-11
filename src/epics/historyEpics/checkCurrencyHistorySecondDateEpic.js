import * as constants from '../../constants';
import { getHistoryApiUrl } from '../../config/api.config';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

export const checkCurrencyHistorySecondDateEpic = (action$, { getState }) => {
  return action$.ofType(constants.HISTORY_CHECK_SECOND_DATE)
    .mergeMap(() => {
      const state = getState().historyState;
      const { myCurrency, otherCurrency, endDate } = state;

      const url = getHistoryApiUrl(endDate.format('YYYY-MM-DD'));

      return ajax.get(`${url}&base=${myCurrency}&symbols=${otherCurrency}`)
        .map((responseData) => {
          const { response } = responseData;

          if (response.success) {
            return {
              type: constants.HISTORY_CHECK_SECOND_DATE_SUCCESS,
              payload: { endDateValue: response.rates[otherCurrency] }
            };
          }

          return {
            type: constants.HISTORY_CHECK_SECOND_DATE_ERROR
          };
        })
        .takeUntil(action$.ofType(constants.HISTORY_CHECK_FIRST_DATE_ERROR))
        .takeUntil(action$.ofType(constants.HISTORY_CHECK_SECOND_DATE_ERROR));
    });
};
