import React from 'react';
import PropTypes from 'prop-types';
import './HistoryForm.scss';
import SymbolsSelector from '../../../shared/SymbolsSelector';
import DatePicker from 'react-datepicker';

const HistoryForm = (props) => {
  return (
    <div className="history-form">
      <h2 className="history-form__title">How currency has changed?</h2>
      <form>
        <fieldset className="history-form__fieldset">
          <SymbolsSelector label="My currency"
                           value={props.myCurrency}
                           onChange={() => {}}
                           symbols={props.symbols}
                           restricted={true}
          />
          <SymbolsSelector label="Compared to currency:"
                           value={props.otherCurrency}
                           onChange={() => {}}
                           symbols={props.symbols}
                           restricted={false}
          />
        </fieldset>

        <fieldset className="history-form__fieldset">
          <label htmlFor="start-date">Start date:</label>
          <div className="history-form__date-picker">
            <DatePicker id="start-date"
                        dateFormat="YYYY-MM-DD"
                        selected={props.startDate}
                        onChange={props.onStartDateChange}
            />
          </div>

          <label htmlFor="end-date">End date:</label>
          <div className="history-form__date-picker">
            <DatePicker id="end-date"
                        dateFormat="YYYY-MM-DD"
                        selected={props.endDate}
                        onChange={props.onEndDateChange}
            />
          </div>
        </fieldset>

        <fieldset className="convert-form__buttons">
          <button disabled={props.readyToCheck === false} type="submit">Check</button>
        </fieldset>
      </form>
    </div>
  );
};

HistoryForm.propTypes = {
  symbols: PropTypes.object.isRequired,
  myCurrency: PropTypes.string.isRequired,
  otherCurrency: PropTypes.string.isRequired,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  readyToCheck: PropTypes.bool.isRequired
};

export default HistoryForm;
