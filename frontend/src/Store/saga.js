// export default function* () {
//   console.log('I am redux-saga');
// }

import { all } from 'redux-saga/effects';
import sequencesSaga from '../sequences/Sequences.saga';
import alignSaga from '../sequences/Align.saga';

export default function* () {
  yield all([sequencesSaga(), alignSaga()]);
}