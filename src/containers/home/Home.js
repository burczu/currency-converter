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
    changeWantedCurrency: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { convertSymbolsGet } = this.props;
    convertSymbolsGet();
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

  render = () => {
    const {
      homeState: {
        availableSymbols,
        availableSymbolsLoading,
        availableSymbolsError,
        currentCurrency,
        currentAmount,
        wantedCurrency
      }
    } = this.props;

    return (
      <ConvertPanel isLoading={availableSymbolsLoading}
                    isError={availableSymbolsError}
                    symbols={availableSymbols}
                    wantedCurrency={wantedCurrency}
                    currentCurrency={currentCurrency}
                    currentAmount={currentAmount}
                    onCurrentCurrencyChanged={this.onCurrentCurrencyChanged}
                    onCurrentAmountChange={this.onCurrentAmountChange}
                    onWantedCurrencyChange={this.onWantedCurrencyChange}
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
  changeWantedCurrency: (value) => dispatch(convertActions.changeWantedCurrency(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
