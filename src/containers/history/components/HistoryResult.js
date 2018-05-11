import React from 'react';
import PropTypes from 'prop-types';
import './HistoryResult.scss';

const HistoryResult = (props) => {
  return (
    <div className="history-result">
      <span className="history-result__result">
        Between selected dates <strong>{props.myCurrency}</strong> to <strong>{props.otherCurrency}</strong> has changed by <strong>{props.currencyDifference}</strong>
      </span>
      <button type="button" onClick={props.onOnceAgainClick}>Once again</button>
    </div>
  );
};

HistoryResult.propTypes = {
  myCurrency: PropTypes.string.isRequired,
  otherCurrency: PropTypes.string.isRequired,
  currencyDifference: PropTypes.string.isRequired,
  onOnceAgainClick: PropTypes.func.isRequired
};

export default HistoryResult;
