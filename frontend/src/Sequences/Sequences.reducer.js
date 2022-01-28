import {
  GET_SEQUENCES,
  GET_SEQUENCES_FAILED,
  GET_SEQUENCES_SUCCESS,
} from './Sequencesactions';

const initialState = {
  isLoading: false,
  sequences: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SEQUENCES:
    case GET_SEQUENCES_SUCCESS:
      return {
        ...state,
        sequences: payload,
        isLoading: false,
      };
    case GET_SEQUENCES_FAILED:
    default:
      return state;
  }
};
