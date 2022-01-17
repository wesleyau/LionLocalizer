import { combineReducers } from 'redux';
import sequences from '../Sequences/Sequences.reducer';
import align from '../Sequences/align.reducer';

export default combineReducers({
  sequences, align
});