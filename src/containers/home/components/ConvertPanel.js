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
      <ConvertForm symbols={props.symbols} />
    </Loader>
  );
};

ConvertPanel.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  symbols: PropTypes.object.isRequired
};

export default ConvertPanel;
