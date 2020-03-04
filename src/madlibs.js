import { FIELD_NAMES } from './constants';

import { getTextTemplates } from './helpers';

// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const SUBMIT_ESSAY = 'MADLIBS.SUBMIT_ESSAY';
export const START_OVER = 'MADLIBS.START_OVER';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar
  ],

  fieldAnswers: {},
  essayText: ''
};

// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const {
        payload: { answer, fieldName }
      } = action;
      const { fieldAnswers } = state;
      const prevFieldAnswer = fieldAnswers[fieldName];
      const fieldNameNotChanged = () =>
        prevFieldAnswer && prevFieldAnswer.answer === answer;

      if (!answer.length || fieldNameNotChanged()) return state;

      const availableTemplateSize = getTextTemplates(fieldName).length;
      const generateRandomIndex = Math.floor(
        Math.random() * availableTemplateSize
      );

      return {
        ...state,
        fieldAnswers: {
          ...fieldAnswers,
          [fieldName]: {
            answer: answer,
            templateIndex: generateRandomIndex
          }
        }
      };
    }

    case SUBMIT_ESSAY: {
      const {
        payload: { essay }
      } = action;
      return {
        ...state,
        essayText: essay
      };
    }

    case START_OVER: {
      return {
        ...INITIAL_STATE
      };
    }

    default:
      return state;
  }
}

// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}

export function submitEssay(essay) {
  return { type: SUBMIT_ESSAY, payload: { essay } };
}

export function startOver() {
  return { type: START_OVER };
}
