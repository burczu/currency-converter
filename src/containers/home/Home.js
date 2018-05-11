import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as convertActions from '../../actions/convertActions';
import ConvertPanel from './components/ConvertPanel';

class Home extends Component {
  static propTypes = {
    homeState: PropTypes.object.isRequired,
    convertSymbolsGet: PropTypes.func.isRequired,
    changeCurrentCurrency: PropTypes.func.isRequired,
    changeCurrentAmount: PropTypes.func.isRequired,
    changeWantedCurrency: PropTypes.func.isRequired,
    convertCurrency: PropTypes.func.isRequired,
    clearCurrencyState: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { convertSymbolsGet, homeState: { availableSymbolsLoaded } } = this.props;

    if (availableSymbolsLoaded === false) {
      convertSymbolsGet();
    }
  };

  onCurrentCurrencyChanged = (event) => {
    const { value } = event.currentTarget;
    const { changeCurrentCurrency } = this.props;
    changeCurrentCurrency(value);
  };

  onCurrentAmountChange = (event) => {
    const { value } = event.currentTarget;
    const { changeCurrentAmount } = this.props;
    changeCurrentAmount(value);
  };

  onWantedCurrencyChange = (event) => {
    const { value } = event.currentTarget;
    const { changeWantedCurrency } = this.props;
    changeWantedCurrency(value);
  };

  onConvertFormSubmit = (event) => {
    event.preventDefault();

    if (this.isReadyToConvert()) {
      const { convertCurrency } = this.props;
      convertCurrency();
    }
  };

  onOnceAgainClick = () => {
    const { clearCurrencyState } = this.props;
    clearCurrencyState();
  };

  isReadyToConvert = () => {
    const {
      homeState: {
        currentCurrency,
        currentAmount,
        wantedCurrency
      }
    } = this.props;

    return currentCurrency.length > 0 && currentAmount.length > 0 && wantedCurrency.length > 0;
  };

  render = () => {
    const {
      homeState: {
        availableSymbols,
        loading,
        error,
        currentCurrency,
        currentAmount,
        wantedCurrency,
        showConvertedValue,
        convertedValue
      }
    } = this.props;

    return (
      <ConvertPanel isLoading={loading}
                    isError={error}
                    symbols={availableSymbols}
                    wantedCurrency={wantedCurrency}
                    currentCurrency={currentCurrency}
                    currentAmount={currentAmount}
                    onCurrentCurrencyChanged={this.onCurrentCurrencyChanged}
                    onCurrentAmountChange={this.onCurrentAmountChange}
                    onWantedCurrencyChange={this.onWantedCurrencyChange}
                    onConvertFormSubmit={this.onConvertFormSubmit}
                    readyToConvert={this.isReadyToConvert()}
                    showConvertedValue={showConvertedValue}
                    convertResult={convertedValue}
                    onOnceAgainClick={this.onOnceAgainClick}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  homeState: state.homeState
});

const mapDispatchToProps = (dispatch) => ({
  convertSymbolsGet: () => dispatch(convertActions.convertSymbolsGet()),
  changeCurrentCurrency: (value) => dispatch(convertActions.changeCurrentCurrency(value)),
  changeCurrentAmount: (value) => dispatch(convertActions.changeCurrentAmount(value)),
  changeWantedCurrency: (value) => dispatch(convertActions.changeWantedCurrency(value)),
  convertCurrency: () => dispatch(convertActions.convertCurrency()),
  clearCurrencyState: () => dispatch(convertActions.convertClearState())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
