import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { EssaySentence } from './EssaySentence';
import { getTextTemplates, makeUpperCase } from '../../helpers';
import { submitEssay } from '../../madlibs';

import './EssayPreview.scss';

const EssayPreview = ({ fieldOrder, fieldAnswers, submitEssay }) => {
  const handleClick = () => {
    const sentenceArray = fieldOrder.map(fieldName => {
      const { answer, templateIndex } = fieldAnswers[fieldName];
      const template = getTextTemplates(fieldName)[templateIndex];
      const line = template.replace('$answer', answer);

      return makeUpperCase(line);
    });
    submitEssay(sentenceArray.join(' '));
  };

  const showEditButton =
    fieldOrder.length === Object.values(fieldAnswers).length;

  return (
    <div className='EssayPreview__Container'>
      <h1>Your essay text</h1>
      <div className='EssayPreview__Sentences'>
        {fieldOrder.map(name => (
          <EssaySentence
            key={name}
            fieldAnswer={fieldAnswers[name]}
            fieldName={name}
          />
        ))}
      </div>
      {showEditButton && <button onClick={() => handleClick()}>Edit</button>}
    </div>
  );
};

EssayPreview.propTypes = {
  fieldOrder: PropTypes.array.isRequired,
  fieldAnswers: PropTypes.object.isRequired,
  submitEssay: PropTypes.func.isRequired
};

function mapStateToProps({ fieldOrder, fieldAnswers }) {
  return {
    fieldOrder,
    fieldAnswers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitEssay: essay => dispatch(submitEssay(essay))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EssayPreview);
