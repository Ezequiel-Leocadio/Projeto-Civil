import axios from 'axios';
import { toast } from 'react-toastify';

const urlhostname = window.location.hostname;
const url1 = `http://${urlhostname}:3334`;

const api = axios.create({
  baseURL: url1,
  timeout: 9000,
  timeoutErrorMessage: 'Erro de Conexão, Verifique sua Rede!!',
});

export const url = url1;

export const request = async (route, method, data, timeout) => {
  try {
    let response = [];
    let dataParams = data;
    if (method.toUpperCase() === 'GET') dataParams = { params: data };
    await api[method](route, dataParams, { timeout })
      .then((res) => {
        const { success, message } = res.data;
        if (success) {
          response = res.data;
          toast.success(message);
        } else {
          response = { success: false };
          toast.error(message);
        }
      })
      .catch((error) => {
        response = { success: false };
        toast.error(`Erro ${error}`);
      });

    return response;
  } catch (error) {
    toast.error(`Erro ${error}`);
    return { success: false };
  }
};
export default api;
