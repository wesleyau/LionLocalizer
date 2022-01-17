import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import {
  GET_SEQUENCES,
  getSequencesSuccess,
  getSequencesFailed,
} from './Sequences.actions';
import { getSequences } from '../utils/api';

function* getSequencesSaga() {
  try {
    const data = yield call(getSequences);
    yield put(getSequencesSuccess(data));
  } catch (error) {
    yield put(getSequencesFailed(error.message));
  }
}

function* getSequencesWatcher() {
  yield takeEvery(GET_SEQUENCES, getSequencesSaga);
}


export default function* sequencesSaga() {
  yield all([getSequencesWatcher()]);
}
