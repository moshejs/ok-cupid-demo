import React from 'react';
import PropTypes from 'prop-types';

require('./QuestionField.scss');

export const QuestionField = ({ name, question, answer, handleBlur }) => (
  <li>
    <label>
      <div>{question}</div>
      <input
        type='text'
        defaultValue={answer}
        onBlur={e => handleBlur(name, e.target.value)}
      />
    </label>
  </li>
);

QuestionField.propTypes = {
  name: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.object,
  handleBlur: PropTypes.func.isRequired
};
