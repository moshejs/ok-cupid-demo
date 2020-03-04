import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FIELDS } from '../../constants';
import { submitField } from '../../madlibs';
import { QuestionField } from '../QuestionField/QuestionField';

import './QuestionList.scss';

const QuestionList = ({ fieldOrder, fieldAnswers, submitField }) => (
  <div className='QuestionList__Container'>
    <h1>About Me</h1>
    <ul>
      {fieldOrder.map(name => (
        <QuestionField
          key={name}
          name={name}
          question={FIELDS[name]}
          answer={fieldAnswers[name]}
          handleBlur={submitField}
        />
      ))}
    </ul>
  </div>
);

QuestionList.propTypes = {
  fieldOrder: PropTypes.array.isRequired,
  fieldAnswers: PropTypes.object.isRequired,
  submitField: PropTypes.func.isRequired
};

function mapStateToProps({ fieldOrder, fieldAnswers }) {
  return {
    fieldOrder,
    fieldAnswers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitField: (fieldName, answer) =>
      dispatch(submitField({ id: fieldName, answer }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
