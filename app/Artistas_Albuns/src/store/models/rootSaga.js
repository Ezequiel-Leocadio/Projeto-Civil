import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import allSaga from './all/sagas';

export default function* rootSaga() {
  return yield all([auth, allSaga]);
}
