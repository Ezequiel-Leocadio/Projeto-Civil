import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { setTokenSuccess } from './actions';

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* setTokenLogin({ value, user }) {
  try {
    yield (api.defaults.headers.Authorization = `Bearer ${value}`);
    yield put(setTokenSuccess(value, user));
  } catch (error) {
    toast.error(`Erro ao Inserir Token ${error}`);
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_TOKEN', setTokenLogin),
]);
