import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {verificaLoginRequest} from '~/store/models/auth/actions';

import createRouter from './routes';

export default function App() {
  const dispatch = useDispatch();

  dispatch(verificaLoginRequest());
  const signed = useSelector((state) => state.auth.signed);
  const Routes = createRouter(signed);
  return <Routes />;
}
