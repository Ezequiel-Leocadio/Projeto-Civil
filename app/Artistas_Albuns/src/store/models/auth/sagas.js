import {Alert, Linking} from 'react-native';

import {takeLatest, call, put, all} from 'redux-saga/effects';

import jwtDecode from 'jwt-decode';
import {ToastActionsCreators} from 'react-native-redux-toast';
import {signInSuccess, signFailure, verificaLoginSuccess} from './actions';

import api from '~/services/api';

import {store} from '~/store';

export function* signIn({payload}) {
  try {
    const {login, senha} = payload;
    let data = [];

    yield api
      .post('/login', {login, senha}, {timeout: 9000})
      .then((response) => {
        data = response.data;
      })
      .catch((err) => {
        data = {success: false, message: err};
      });

    const {token, user, success, message} = data;

    if (!success) {
      yield put(
        ToastActionsCreators.displayError(
          `Falha na autenticaçao ${message}`,
          5000,
        ),
      );

      yield put(signFailure());
    } else {
      yield (api.defaults.headers.Authorization = `Bearer ${token}`);
      yield put(signInSuccess(token, user));
    }

    // history.push('/darshboard');
  } catch (error) {
    yield put(signFailure());
    if (error.response) {
      yield put(
        ToastActionsCreators.displayError(
          `Falha na autenticaçao ${error.response.data}`,
          5000,
        ),
      );
      // Alert.alert(
      //   'Erro no Login.',
      //   `Falha na autenticaçao ${error.response.data}`,
      // );
    } else {
      yield put(
        ToastActionsCreators.displayError(
          `Falha na autenticaçao ${error}`,
          5000,
        ),
      );
      // Alert.alert('Erro no Login.', `Falha na autenticaçao ${error}`);
    }
  }
}
export function* setToken({payload}) {
  if (!payload) {
    return;
  }

  const {token} = payload.auth;
  const {ipAcesso} = payload.all;
  if (token) {
    yield (api.defaults.baseURL = `${ipAcesso}`);
    yield (api.defaults.headers.Authorization = `Bearer ${token}`);
  }
}

export function* signUp({payload}) {
  try {
    const {login, empresa, senha, funcao, permissoes, tipo, pessoa} = payload;
    yield call(api.post, 'usuario', {
      empresa,
      login,
      senha,
      funcao,
      permissoes,
      tipo,
      pessoa,
    });
  } catch (error) {
    yield put(
      ToastActionsCreators.displayError(
        `Falha no Cadastro ${JSON.stringify(error)}`,
        5000,
      ),
    );
    // Alert.alert('Falha no cadastro', 'Erro');
    yield put(signFailure());
  }
}

export function* verificaLogin() {
  try {
    const {token} = store.getState().auth;
    if (token) {
      const decodedToken = yield jwtDecode(token);

      const dateNow = new Date();
      const dateNoww = new Date();
      let isExpired = false;
      dateNoww.setTime(decodedToken.exp * 1000);
      const timeExpiration = decodedToken.exp * 1000;
      if (timeExpiration < dateNow.getTime()) {
        isExpired = true;
      }
      // alert(JSON.stringify(`${dateNoww}----${dateNow.getTime() / 1000}`));
      yield put(verificaLoginSuccess(!isExpired));
    }
  } catch (error) {
    yield put(
      ToastActionsCreators.displayError(`Error ${JSON.stringify(error)}`, 5000),
    );
    // Alert.alert('Erro', JSON.stringify(error));
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/VERIFICA_LOGIN_REQUEST', verificaLogin),
]);
