import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as symbolsActions from '../../actions/symbolsActions';
import HistoryPanel from './components/HistoryPanel';

class History extends Component {
  static propTypes = {
    symbolsGet: PropTypes.func.isRequired,
    symbolsState: PropTypes.object.isRequired,
    historyState: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    const { symbolsGet, symbolsState: { availableSymbolsLoaded } } = this.props;

    if (availableSymbolsLoaded === false) {
      symbolsGet();
    }
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
        endDate
      }
    } = this.props;

    const loading = this.props.symbolsState.loading || this.props.historyState.loading;
    const error = this.props.symbolsState.error || this.props.historyState.error;

    return (
      <HistoryPanel symbols={availableSymbols}
                    loading={loading}
                    error={error}
                    myCurrency={myCurrency}
                    otherCurrency={otherCurrency}
                    startDate={startDate}
                    endDate={endDate}
                    readyToCheck={this.isReadyToCheck()}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  symbolsState: state.symbolsState,
  historyState: state.historyState
});

const mapDispatchToProps = (dispatch) => ({
  symbolsGet: () => dispatch(symbolsActions.symbolsGet())
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
