import * as constants from '../../constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

export const changeCurrentAmountEpic = (action$) => {
  return action$.ofType(constants.CONVERT_CURRENT_AMOUNT_CHANGE)
    .mergeMap((action) => {
      const { value } = action.payload;
      const parsed = Number.parseInt(value || 0, 10);
      if (isNaN(parsed) === false) {
        return Observable.of({
          type: constants.CONVERT_CURRENT_AMOUNT_CHANGE_VALID,
          payload: { value: `${parsed}` }
        });
      }

      return Observable.empty();
    });
};
