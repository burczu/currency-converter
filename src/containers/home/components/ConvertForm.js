import React from 'react';
import './ConvertForm.scss';
import arrowDown from '../../../static/arrow-down.svg';

const ConvertForm = (props) => {
  return (
    <div className="convert-form">
      <h2 className="convert-form__title">Convert your currency</h2>
      <form>
        <fieldset className="convert-form__fieldset">
          <label htmlFor="my-currency">Currency I have:</label>
          <select id="my-currency">
            <option>PLN</option>
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
            <option>USD</option>
          </select>
        </fieldset>
        <fieldset className="convert-form__buttons">
          <button type="submit">Convert</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ConvertForm;
