import axios from 'axios';
import {Alert} from 'react-native';

const urlBack = `http://192.168.1.6:3334`;

const api = axios.create({
  baseURL: urlBack,
  // baseURL: 'http://10.0.2.212:3333',
});

export default api;

export const url = urlBack;

export const request = async (route, method, data, timeout) => {
  try {
    let response = [];
    let dataParams = data;
    if (method.toUpperCase() === 'GET') dataParams = {params: data};
    await api[method](route, dataParams, {timeout})
      .then((res) => {
        const {success, message} = res.data;
        if (success) {
          response = res.data;
          Alert.alert('Sucesso', message);
        } else {
          Alert.alert('erro', message);

          response = {success: false, message};
        }
      })
      .catch((error) => {
        response = {success: false, message: `${error}`};
      });

    return response;
  } catch (error) {
    Alert.alert('Erro', ` ${error}`);
    return {success: false};
  }
};
