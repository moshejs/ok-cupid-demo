import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import QuestionList from './QuestionList/QuestionList';
import EssayPreview from './EssayPreview/EssayPreview';
import EssayEditor from './EssayEditor/EssayEditor';

import './App.scss';

const App = ({ essayText }) => (
  <div className='matchArea'>
    {essayText.length ? (
      <EssayEditor />
    ) : (
      <>
        <QuestionList />
        <EssayPreview />
      </>
    )}
  </div>
);

App.propTypes = {
  essayText: PropTypes.string.isRequired
};

function mapStateToProps({ essayText }) {
  return {
    essayText
  };
}

export default connect(mapStateToProps)(App);
