import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signSuccess } from './action';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'login', { email, password });

  const { admin, token } = response.data;
  yield put(signSuccess(admin, token));

  history.push('/delivery');
}

export default all([takeLatest('@auth/SIGN_REQUEST', signIn)]);
