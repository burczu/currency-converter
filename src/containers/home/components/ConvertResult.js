import React from 'react';
import PropTypes from 'prop-types';
import './ConvertResult.scss';

const ConvertResult = (props) => {
  return (
    <div className="convert-result">
      <span className="convert-result__result">
        {props.currentAmount}{props.currentCurrency} = {props.convertResult}{props.wantedCurrency}
      </span>
      <button type="button" onClick={props.onOnceAgainClick}>Once again</button>
    </div>
  );
};

ConvertResult.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  currentAmount: PropTypes.string.isRequired,
  wantedCurrency: PropTypes.string.isRequired,
  convertResult: PropTypes.string.isRequired,
  onOnceAgainClick: PropTypes.func.isRequired
};

export default ConvertResult;
