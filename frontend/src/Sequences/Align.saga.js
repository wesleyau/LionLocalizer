import { takeEvery, all, call, put, takeLeading, takeLatest } from 'redux-saga/effects';
import {
  ADD_SEQUENCE,
  addSequenceFailed,
  addSequenceSuccess,
} from './Align.actions';
import { addSequence } from '../utils/api';

function* addSequenceSaga(action) {
  try {
    const data = yield call(addSequence, action.payload);
    yield put(addSequenceSuccess({ query: action.payload, array: data }));
    console.log(action.payload)
  } catch (error) {
    yield put(addSequenceFailed({query: action.payload},error.message));
  }
}

function* addSequenceWatcher() {
  yield takeLeading(ADD_SEQUENCE, addSequenceSaga);
}

export default function* sequencesSaga() {
  yield all([addSequenceWatcher()]);
}

