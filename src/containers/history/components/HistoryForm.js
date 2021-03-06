import React from 'react';
import PropTypes from 'prop-types';
import './HistoryForm.scss';
import SymbolsSelector from '../../../shared/SymbolsSelector';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const HistoryForm = (props) => {
  return (
    <div className="history-form">
      <h2 className="history-form__title">How currency has changed?</h2>
      <form onSubmit={props.onCurrencyHistorySubmit}>
        <fieldset className="history-form__fieldset">
          <SymbolsSelector label="My currency"
                           value={props.myCurrency}
                           onChange={props.onMyCurrencyChange}
                           symbols={props.symbols}
                           restricted={true}
          />
          <SymbolsSelector label="Compared to currency:"
                           value={props.otherCurrency}
                           onChange={props.onOtherCurrencyChange}
                           symbols={props.symbols}
                           restricted={false}
          />
        </fieldset>

        <fieldset className="history-form__fieldset">
          <label htmlFor="start-date">Start date:</label>
          <div className="history-form__date-picker">
            <DatePicker id="start-date"
                        dateFormat="YYYY-MM-DD"
                        selected={props.startDate !== '' ? moment(props.startDate) : undefined}
                        onChange={props.onStartDateChange}
                        placeholderText="Select starting date"
                        maxDate={moment()}
            />
          </div>

          <label htmlFor="end-date">End date:</label>
          <div className="history-form__date-picker">
            <DatePicker id="end-date"
                        dateFormat="YYYY-MM-DD"
                        selected={props.endDate !== '' ? moment(props.endDate) : undefined}
                        onChange={props.onEndDateChange}
                        placeholderText="Select finishing date"
                        maxDate={moment()}
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  readyToCheck: PropTypes.bool.isRequired,
  onMyCurrencyChange: PropTypes.func.isRequired,
  onOtherCurrencyChange: PropTypes.func.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  onCurrencyHistorySubmit: PropTypes.func.isRequired
};

export default HistoryForm;
