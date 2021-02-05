import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';
import {ToastActionsCreators} from 'react-native-redux-toast';
import {ipBackend, load} from './actions';
import api from '~/services/api';
import {store} from '~/store';

export function* verificaAcessoApi() {
  try {
    const {ipAcesso} = store.getState().all;
    if (ipAcesso) {
      yield (api.defaults.baseURL = `${ipAcesso}`);
    }

    if (ipAcesso === undefined || ipAcesso === '') {
      yield (api.defaults.baseURL = `http://192.168.0.1:3334`);
    }
  } catch (error) {
    yield put(load(false));
    yield put(ToastActionsCreators.displayError(`Erro ${error}`, 5000));
    // Alert.alert('Erro', error);
  }
}

export function* verificaAcessoApiSetIp({ip}) {
  try {
    yield put(ipBackend(ip));
    yield (api.defaults.baseURL = `${ip}`);
    yield put(
      ToastActionsCreators.displayInfo(
        `URL de Acesso Alterado com Sucesso`,
        5000,
      ),
    );
    // Alert.alert('Sucesso', 'Ip de Acesso Alterado com Sucesso');
  } catch (error) {
    yield put(load(false));
    yield put(ToastActionsCreators.displayError(`Erro ${error}`, 5000));
    // Alert.alert('Erro', error);
  }
}

export default all([
  takeLatest('@all/ACESSO_EXTERNO', verificaAcessoApi),
  takeLatest('@all/ACESSO_EXTERNO_IP', verificaAcessoApiSetIp),
]);
