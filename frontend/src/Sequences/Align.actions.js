export const ADD_SEQUENCE = 'ADD_SEQUENCE';
export const ADD_SEQUENCE_SUCCESS = 'ADD_SEQUENCE_SUCCESS';
export const ADD_SEQUENCE_FAILED = 'ADD_SEQUENCE_FAILED';

export const addSequence = (payload) => ({
    type: ADD_SEQUENCE,
    payload,
  });
  
  export const addSequenceSuccess = (payload) => ({
    type: ADD_SEQUENCE_SUCCESS,
    payload,
  });
  
  export const addSequenceFailed = (payload) => ({
    type: ADD_SEQUENCE_FAILED,
    payload,
  });