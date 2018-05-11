import React from 'react';
import PropTypes from 'prop-types';
import './ConvertPanel.scss';
import ConvertForm from './ConvertForm';
import Loader from '../../../shared/Loader';

const ConvertPanel = (props) => {
  return (
    <Loader className="convert-panel"
            isError={props.isError}
            isLoading={props.isLoading}
    >
      <ConvertForm symbols={props.symbols}
                   currentCurrency={props.currentCurrency}
                   currentAmount={props.currentAmount}
                   wantedCurrency={props.wantedCurrency}
                   onCurrentAmountChange={props.onCurrentAmountChange}
                   onCurrentCurrencyChanged={props.onCurrentCurrencyChanged}
                   onWantedCurrencyChange={props.onWantedCurrencyChange}
      />
    </Loader>
  );
};

ConvertPanel.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  symbols: PropTypes.object.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  currentAmount: PropTypes.string.isRequired,
  wantedCurrency: PropTypes.string.isRequired,
  onCurrentCurrencyChanged: PropTypes.func.isRequired,
  onCurrentAmountChange: PropTypes.func.isRequired,
  onWantedCurrencyChange: PropTypes.func.isRequired
};

export default ConvertPanel;
