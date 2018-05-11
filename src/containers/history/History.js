import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as symbolsActions from '../../actions/symbolsActions';
import * as historyActions from '../../actions/historyActions';
import HistoryPanel from './components/HistoryPanel';
import numeral from 'numeral';

class History extends Component {
  static propTypes = {
    symbolsGet: PropTypes.func.isRequired,
    symbolsState: PropTypes.object.isRequired,
    historyState: PropTypes.object.isRequired,
    changeMyCurrency: PropTypes.func.isRequired,
    changeOtherCurrency: PropTypes.func.isRequired,
    changeStartDate: PropTypes.func.isRequired,
    changeEndDate: PropTypes.func.isRequired,
    checkCurrencyHistory: PropTypes.func.isRequired,
    clearHistoryData: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { symbolsGet, symbolsState: { availableSymbolsLoaded } } = this.props;

    if (availableSymbolsLoaded === false) {
      symbolsGet();
    }
  };

  onMyCurrencyChange = (event) => {
    const { value } = event.currentTarget;
    const { changeMyCurrency } = this.props;
    changeMyCurrency(value);
  };

  onOtherCurrencyChange = (event) => {
    const { value } = event.currentTarget;
    const { changeOtherCurrency } = this.props;
    changeOtherCurrency(value);
  };

  onStartDateChange = (date) => {
    const { changeStartDate } = this.props;
    changeStartDate(date);
  };

  onEndDateChange = (date) => {
    const { changeEndDate } = this.props;
    changeEndDate(date);
  };

  onCurrencyHistorySubmit = (event) => {
    event.preventDefault();

    if (this.isReadyToCheck()) {
      const { checkCurrencyHistory } = this.props;
      checkCurrencyHistory();
    }
  };

  onOnceAgainClick = () => {
    const { clearHistoryData } = this.props;
    clearHistoryData();
  };

  isReadyToCheck = () => {
    const {
      historyState: {
        myCurrency,
        otherCurrency,
        startDate,
        endDate
      }
    } = this.props;

    return myCurrency.length > 0 && otherCurrency.length > 0 && startDate !== undefined && endDate !== undefined;
  };

  render = () => {
    const {
      symbolsState: {
        availableSymbols
      },
      historyState: {
        myCurrency,
        otherCurrency,
        startDate,
        endDate,
        startDateValue,
        endDateValue,
        showCheckedValue
      }
    } = this.props;

    const loading = this.props.symbolsState.loading || this.props.historyState.loading;
    const error = this.props.symbolsState.error || this.props.historyState.error;

    const currencyDifference = numeral(startDateValue - endDateValue).format('0.00');

    return (
      <HistoryPanel symbols={availableSymbols}
                    loading={loading}
                    error={error}
                    myCurrency={myCurrency}
                    otherCurrency={otherCurrency}
                    startDate={startDate}
                    endDate={endDate}
                    readyToCheck={this.isReadyToCheck()}
                    onMyCurrencyChange={this.onMyCurrencyChange}
                    onOtherCurrencyChange={this.onOtherCurrencyChange}
                    onStartDateChange={this.onStartDateChange}
                    onEndDateChange={this.onEndDateChange}
                    onCurrencyHistorySubmit={this.onCurrencyHistorySubmit}
                    currencyDifference={currencyDifference}
                    onOnceAgainClick={this.onOnceAgainClick}
                    showResult={showCheckedValue}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  symbolsState: state.symbolsState,
  historyState: state.historyState
});

const mapDispatchToProps = (dispatch) => ({
  symbolsGet: () => dispatch(symbolsActions.symbolsGet()),
  changeMyCurrency: (value) => dispatch(historyActions.changeMyCurrency(value)),
  changeOtherCurrency: (value) => dispatch(historyActions.changeOtherCurrency(value)),
  changeStartDate: (date) => dispatch(historyActions.changeStartDate(date)),
  changeEndDate: (date) => dispatch(historyActions.changeEndDate(date)),
  checkCurrencyHistory: () => dispatch(historyActions.checkCurrencyHistoryRequest()),
  clearHistoryData: () => dispatch(historyActions.clearHistoryData())
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
