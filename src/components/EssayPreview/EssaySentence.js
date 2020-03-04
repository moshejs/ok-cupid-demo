import React from 'react';
import PropTypes from 'prop-types';
import { getTextTemplates, makeUpperCase } from '../../helpers';

export const EssaySentence = ({ fieldName, fieldAnswer }) => {
  if (!fieldAnswer) return null;
  const { answer, templateIndex } = fieldAnswer;
  const line = getTextTemplates(fieldName)[templateIndex];
  const [start, end] = line.split('$answer');

  return (
    <>
      {start}
      <strong>{start.length ? answer : makeUpperCase(answer)}</strong>
      {end + ' '}
    </>
  );
};

EssaySentence.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldAnswer: PropTypes.object
};
