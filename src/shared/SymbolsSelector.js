import React from 'react';
import PropTypes from 'prop-types';
import './SymbolsSelector.scss';
import _ from 'lodash';

const getOptions = (symbols, restrict = false) => {
  const result = [
    <option disabled value="" key=""> -- select currency -- </option>
  ];

  _.forOwn(symbols, (value, key) => {
    const disabled = restrict && key !== 'EUR';
    result.push(<option disabled={disabled} key={key} value={key}>{`${key} - ${value}`}</option>);
  });

  return result;
};

const SymbolsSelector = (props) => {
  return [
    <label key="label" className="symbols-label" htmlFor="my-currency">{props.label}</label>,
    <select key="select"
            className="symbols-select"
            id="my-currency"
            value={props.value}
            onChange={props.onChange}
    >
      {getOptions(props.symbols, props.restricted)}
    </select>
  ];
};

SymbolsSelector.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  symbols: PropTypes.object.isRequired,
  restricted: PropTypes.bool.isRequired
};

export default SymbolsSelector;
