export const GET_SEQUENCES = 'GET_SEQUENCES';
export const GET_SEQUENCES_SUCCESS = 'GET_SEQUENCES_SUCCESS';
export const GET_SEQUENCES_FAILED = 'GET_SEQUENCES_FAILED';

export const getSequences = (payload) => ({
  type: GET_SEQUENCES,
  payload,
});

export const getSequencesSuccess = (payload) => ({
  type: GET_SEQUENCES_SUCCESS,
  payload,
});

export const getSequencesFailed = (payload) => ({
  type: GET_SEQUENCES_FAILED,
  payload,
});


