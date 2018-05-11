import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as symbolsActions from '../../actions/symbolsActions';
import * as convertActions from '../../actions/convertActions';
import ConvertPanel from './components/ConvertPanel';

class Home extends Component {
  static propTypes = {
    homeState: PropTypes.object.isRequired,
    symbolsState: PropTypes.object.isRequired,
    symbolsGet: PropTypes.func.isRequired,
    changeCurrentCurrency: PropTypes.func.isRequired,
    changeCurrentAmount: PropTypes.func.isRequired,
    changeWantedCurrency: PropTypes.func.isRequired,
    convertCurrency: PropTypes.func.isRequired,
    clearCurrencyState: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { symbolsGet, symbolsState: { availableSymbolsLoaded } } = this.props;

    if (availableSymbolsLoaded === false) {
      symbolsGet();
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
      symbolsState: {
        availableSymbols
      },
      homeState: {
        currentCurrency,
        currentAmount,
        wantedCurrency,
        showConvertedValue,
        convertedValue
      }
    } = this.props;

    const loading = this.props.symbolsState.loading || this.props.homeState.loading;
    const error = this.props.symbolsState.error || this.props.homeState.error;

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
  homeState: state.homeState,
  symbolsState: state.symbolsState
});

const mapDispatchToProps = (dispatch) => ({
  symbolsGet: () => dispatch(symbolsActions.symbolsGet()),
  changeCurrentCurrency: (value) => dispatch(convertActions.changeCurrentCurrency(value)),
  changeCurrentAmount: (value) => dispatch(convertActions.changeCurrentAmount(value)),
  changeWantedCurrency: (value) => dispatch(convertActions.changeWantedCurrency(value)),
  convertCurrency: () => dispatch(convertActions.convertCurrency()),
  clearCurrencyState: () => dispatch(convertActions.convertClearState())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
