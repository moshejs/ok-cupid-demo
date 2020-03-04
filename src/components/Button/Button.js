import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ textContent, handleClick }) => (
  <button onClick={() => handleClick()}>{textContent}</button>
);

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
