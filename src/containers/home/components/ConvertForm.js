import React from 'react';
import PropTypes from 'prop-types';
import './ConvertForm.scss';
import arrowDown from '../../../static/arrow-down.svg';
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

const ConvertForm = (props) => {
  return (
    <div className="convert-form">
      <h2 className="convert-form__title">Convert your currency</h2>
      <form onSubmit={props.onConvertFormSubmit}>
        <fieldset className="convert-form__fieldset">
          <label htmlFor="my-currency">Currency I have:</label>
          <select id="my-currency"
                  value={props.currentCurrency}
                  onChange={props.onCurrentCurrencyChanged}
          >
            {getOptions(props.symbols, true)}
          </select>

          <label htmlFor="my-amount">Amount:</label>
          <input type="currency"
                 id="my-amount"
                 placeholder="How much you want to convert?"
                 value={props.currentAmount}
                 onChange={props.onCurrentAmountChange}
          />
        </fieldset>

        <div className="convert-form__separator">
          <img src={arrowDown} alt="Arrow down indicator" />
        </div>

        <fieldset className="convert-form__fieldset">
          <label htmlFor="wanted-currency">Currency I want:</label>
          <select id="wanted-currency"
                  value={props.wantedCurrency}
                  onChange={props.onWantedCurrencyChange}
          >
            {getOptions(props.symbols)}
          </select>
        </fieldset>

        <fieldset className="convert-form__buttons">
          <button disabled={props.readyToConvert === false} type="submit">Convert</button>
        </fieldset>
      </form>
    </div>
  );
};

ConvertForm.propTypes = {
  symbols: PropTypes.object.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  currentAmount: PropTypes.string.isRequired,
  wantedCurrency: PropTypes.string.isRequired,
  onCurrentCurrencyChanged: PropTypes.func.isRequired,
  onCurrentAmountChange: PropTypes.func.isRequired,
  onWantedCurrencyChange: PropTypes.func.isRequired,
  onConvertFormSubmit: PropTypes.func.isRequired,
  readyToConvert: PropTypes.bool.isRequired
};

export default ConvertForm;
