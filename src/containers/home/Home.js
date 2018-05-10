import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as convertActions from '../../actions/convertActions';
import ConvertPanel from './components/ConvertPanel';

class Home extends Component {
  static propTypes = {
    convertSymbolsGet: PropTypes.func.isRequired,
    homeState: PropTypes.object.isRequired,
    symbols: PropTypes.array.isRequired
  };

  componentDidMount = () => {
    const { convertSymbolsGet } = this.props;
    convertSymbolsGet();
  };

  render = () => {
    const {
      homeState: {
        availableSymbols,
        availableSymbolsLoading,
        availableSymbolsError
      }
    } = this.props;

    return (
      <ConvertPanel isLoading={availableSymbolsLoading}
                    isError={availableSymbolsError}
                    symbols={availableSymbols}
      />
    );
  };
}

const mapStateToProps = (state) => ({
  homeState: state.homeState
});

const mapDispatchToProps = (dispatch) => ({
  convertSymbolsGet: () => dispatch(convertActions.convertSymbolsGet())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
