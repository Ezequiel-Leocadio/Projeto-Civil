import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import api, { request } from '../../services/api';
import Loading from '../../components/Load';
import { Container, Content } from './styles';

import { setToken, signOut } from '../../store/models/auth/actions';
import Button from '../../components/Button/button';

function Login() {
  const dispatch = useDispatch();
  const inputLogin = useRef(null);
  const history = useHistory();
  const [nextPage, setNextPage] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await request(
      'login',
      'post',
      {
        login,
        senha,
      },
      9000
    );
    const { success, token, user } = res;

    if (success) {
      await (api.defaults.headers.Authorization = `Bearer ${token}`);
      await dispatch(setToken(token, user));
      history.push(`/${nextPage}`);
      // window.location.href = `/${nextPage}`;
    }
    setLoading(false);
  }

  useEffect(() => {
    async function load() {
      const { pathname } = window.location;
      const [n0, n1, n2, n3] = pathname.split('/');
      if (n2 !== undefined) {
        if (n3 !== undefined) {
          const page = `${n2}/${n3}`;
          setNextPage(page);
        } else {
          setNextPage(n2);
        }
      }
      await dispatch(signOut());
      if (inputLogin.current) {
        inputLogin.current.focus();
      }
    }

    load();
  }, [dispatch]);

  return (
    <Container>
      <Loading loading={loading} />
      <Content>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputLogin}
            required
            type="text"
            className="form-control"
            placeholder="Login"
            name="login"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />

          <input
            required
            type="password"
            className="form-control"
            placeholder="Senha"
            name="senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />

          <Button
            color="success"
            size={100}
            icon="fa-sign-in-alt"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Content>
    </Container>
  );
}

export default Login;
