import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../Button/Button';
import { startOver, submitEssay } from '../../madlibs';

require('./EssayEditor.scss');

const EssayEditor = ({ essayText, startOver, submitEssay }) => (
  <div className='EssayEditor__Container'>
    <h1>Your essay text</h1>
    <textarea
      defaultValue={essayText}
      onBlur={e => submitEssay(e.target.value)}
    />
    <Button handleClick={() => startOver()} textContent='Start over' />
  </div>
);

EssayEditor.propTypes = {
  essayText: PropTypes.string.isRequired,
  startOver: PropTypes.func.isRequired,
  submitEssay: PropTypes.func.isRequired
};

function mapStateToProps({ essayText }) {
  return {
    essayText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startOver: () => dispatch(startOver()),
    submitEssay: essay => dispatch(submitEssay(essay))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EssayEditor);
