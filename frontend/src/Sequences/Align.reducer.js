import {
  ADD_SEQUENCE,
  ADD_SEQUENCE_FAILED,
  ADD_SEQUENCE_SUCCESS,
} from './Align.actions';

const initialState = {
  isLoading: false,
  align: [],
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_SEQUENCE:
      return { ...state, isLoading: true };
    case ADD_SEQUENCE_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    case ADD_SEQUENCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        align: payload,
      };
    default:
      return state;
  }
};