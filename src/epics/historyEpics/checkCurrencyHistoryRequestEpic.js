import * as constants from '../../constants';
import { getHistoryApiUrl } from '../../config/api.config';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

export const checkCurrencyHistoryRequestEpic = (action$, { getState }) => {
  return action$.ofType(constants.HISTORY_CHECK_FIRST_DATE)
    .mergeMap(() => {
      const state = getState().historyState;
      const { myCurrency, otherCurrency, startDate } = state;

      const url = getHistoryApiUrl(startDate);

      return ajax.get(`${url}&base=${myCurrency}&symbols=${otherCurrency}`)
        .flatMap((responseData) => {
          const { response } = responseData;

          if (response.success) {
            return [{
              type: constants.HISTORY_CHECK_FIRST_DATE_SUCCESS,
              payload: { startDateValue: response.rates[otherCurrency] }
            }, {
              type: constants.HISTORY_CHECK_SECOND_DATE
            }];
          }

          return [{
            type: constants.HISTORY_CHECK_FIRST_DATE_ERROR
          }];
        })
        .takeUntil(action$.ofType(constants.HISTORY_CHECK_FIRST_DATE_ERROR))
        .takeUntil(action$.ofType(constants.HISTORY_CHECK_SECOND_DATE_ERROR));
    });
};
