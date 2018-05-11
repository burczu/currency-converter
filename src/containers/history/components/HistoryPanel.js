import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../shared/Loader';
import HistoryForm from './HistoryForm';
import HistoryResult from './HistoryResult';
import './HistoryPanel.scss';

const HistoryPanel = (props) => {
  return (
    <Loader className="history-panel"
            isLoading={props.loading}
            isError={props.error}
    >
      {props.showResult ? (
        <HistoryResult onOnceAgainClick={props.onOnceAgainClick}
                       currencyDifference={props.currencyDifference}
                       myCurrency={props.myCurrency}
                       otherCurrency={props.otherCurrency}
        />
      ) : (
        <HistoryForm symbols={props.symbols}
                     myCurrency={props.myCurrency}
                     otherCurrency={props.otherCurrency}
                     startDate={props.startDate}
                     endDate={props.endDate}
                     readyToCheck={props.readyToCheck}
                     onEndDateChange={props.onEndDateChange}
                     onMyCurrencyChange={props.onMyCurrencyChange}
                     onOtherCurrencyChange={props.onOtherCurrencyChange}
                     onStartDateChange={props.onStartDateChange}
                     onCurrencyHistorySubmit={props.onCurrencyHistorySubmit}
        />
      )}
    </Loader>
  );
};

HistoryPanel.propTypes = {
  symbols: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  myCurrency: PropTypes.string.isRequired,
  otherCurrency: PropTypes.string.isRequired,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  readyToCheck: PropTypes.bool.isRequired,
  onMyCurrencyChange: PropTypes.func.isRequired,
  onOtherCurrencyChange: PropTypes.func.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  onCurrencyHistorySubmit: PropTypes.func.isRequired,
  onOnceAgainClick: PropTypes.func.isRequired,
  currencyDifference: PropTypes.string.isRequired,
  showResult: PropTypes.bool.isRequired
};

export default HistoryPanel;
