import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';
import loaderImg from '../static/loader.svg';

const Loader = (props) => {
  const loader = <img className="loader-container__loader" src={loaderImg} alt="Loading indicator" />;

  if (props.isError) {
    return (
      <div className={`${props.className} loader-container`}>
        <span className="loader-container__error">An error occured...</span>
      </div>
    )
  }

  return (
    <div className={`${props.className} loader-container`}>
      {props.isLoading ? loader : props.children}
    </div>
  );
};

Loader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

export default Loader;
