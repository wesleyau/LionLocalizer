import { call, put, takeEvery } from 'redux-saga/effects';
import { getShortSequenceSuccess } from '../State/shortSequenceState'


function* workGetShortSequenceFetch() {
    const shortSeqs = yield call(() => fetch('http://127.0.0.1:8000/mapping/sequence-list/'))
    const formattedShortSeq = yield shortSeqs.json();
    yield put(getShortSequenceSuccess(formattedShortSeq))
}

function* shortSequenceSaga() {
    yield takeEvery('shortSeqs/getShortSequenceFetch', workGetShortSequenceFetch); 
}

export default shortSequenceSaga;