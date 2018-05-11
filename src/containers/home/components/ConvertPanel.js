import React from 'react';
import PropTypes from 'prop-types';
import './ConvertPanel.scss';
import ConvertResult from './ConvertResult';
import ConvertForm from './ConvertForm';
import Loader from '../../../shared/Loader';

const ConvertPanel = (props) => {
  return (
    <Loader className="convert-panel"
            isError={props.isError}
            isLoading={props.isLoading}
    >
      {props.showConvertedValue ? (
        <ConvertResult currentCurrency={props.currentCurrency}
                       currentAmount={props.currentAmount}
                       wantedCurrency={props.wantedCurrency}
                       convertResult={props.convertResult}
                       onOnceAgainClick={props.onOnceAgainClick}
        />
      ) : (
        <ConvertForm symbols={props.symbols}
                     currentCurrency={props.currentCurrency}
                     currentAmount={props.currentAmount}
                     wantedCurrency={props.wantedCurrency}
                     onCurrentAmountChange={props.onCurrentAmountChange}
                     onCurrentCurrencyChanged={props.onCurrentCurrencyChanged}
                     onWantedCurrencyChange={props.onWantedCurrencyChange}
                     onConvertFormSubmit={props.onConvertFormSubmit}
                     readyToConvert={props.readyToConvert}
        />
      )}
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
  onWantedCurrencyChange: PropTypes.func.isRequired,
  onConvertFormSubmit: PropTypes.func.isRequired,
  onOnceAgainClick: PropTypes.func.isRequired,
  readyToConvert: PropTypes.bool.isRequired,
  showConvertedValue: PropTypes.bool.isRequired,
  convertResult: PropTypes.string.isRequired
};

export default ConvertPanel;
