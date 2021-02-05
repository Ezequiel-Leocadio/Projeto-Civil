import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt from 'jsonwebtoken';
import Modal from '../Modal';
import { Body } from '../Modal/styles';

import { ButtonLogin } from './styles';

function CheckLogin({ check }) {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const [next, setNext] = useState('');
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (check) {
      const { pathname } = window.location;
      if (pathname.split('/')[1] !== 'login') {
        jwt.verify(token, 'projeto_artistas_e_albuns', (err, decode) => {
          if (!err) {
            if (decode) {
              setStatus(false);
            }
          } else {
            setStatus(true);
            setNext(pathname);
          }
        });
      } else {
        setNext('');
        setStatus(false);
      }
    }
  }, [check]);

  return (
    <Modal visible={status}>
      <h1>Sua Sessão Expirou, É Necessário Fazer Login Novamente!!</h1>
      <Body>
        <ButtonLogin
          onClick={() => {
            setStatus(false);
            history.push(`/login${next}`);
            window.scrollTo(0, 0);
          }}
        >
          Clique Aqui Para Fazer Login!!
        </ButtonLogin>
      </Body>
    </Modal>
  );
}

export default CheckLogin;
