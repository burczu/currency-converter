import React from 'react';
import PropTypes from 'prop-types';
import './ConvertForm.scss';
import arrowDown from '../../../static/arrow-down.svg';
import _ from 'lodash';

const getOptions = (symbols) => {
  const result = [];

  _.forOwn(symbols, (value, key) => {
    result.push(<option key={key}>{`${key} - ${value}`}</option>);
  });

  return result;
};

const ConvertForm = (props) => {
  return (
    <div className="convert-form">
      <h2 className="convert-form__title">Convert your currency</h2>
      <form>
        <fieldset className="convert-form__fieldset">
          <label htmlFor="my-currency">Currency I have:</label>
          <select id="my-currency">
            {getOptions(props.symbols)}
          </select>

          <label htmlFor="my-amount">Amount:</label>
          <input type="currency" id="my-amount" placeholder="How much you want to convert?" />
        </fieldset>

        <div className="convert-form__separator">
          <img src={arrowDown} alt="Arrow down indicator" />
        </div>

        <fieldset className="convert-form__fieldset">
          <label htmlFor="wanted-currency">Currency I want:</label>
          <select id="wanted-currency">
            {getOptions(props.symbols)}
          </select>
        </fieldset>

        <fieldset className="convert-form__buttons">
          <button type="submit">Convert</button>
        </fieldset>
      </form>
    </div>
  );
};

ConvertForm.propTypes = {
  symbols: PropTypes.object.isRequired
};

export default ConvertForm;
