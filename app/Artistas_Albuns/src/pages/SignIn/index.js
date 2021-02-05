import React, {useRef, useState, useEffect} from 'react';
import {Image, BackHandler, Modal, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ToastActionsCreators} from 'react-native-redux-toast';
import {
  Title,
  Container,
  Form,
  FormInput,
  SubmitButton,
  ContainerModal,
} from './styles';
import Logo from '~/assets/icon.png';

import Background from '~/components/backgound';
import {signInRequest, signOut} from '~/store/models/auth/actions';
import {acessoExterno, acessoExternoSetIp} from '~/store/models/all/actions';

import Button from '~/components/button';

export default function SignIn() {
  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });
  const dispatch = useDispatch();
  const passwordRef = useRef();
  // const toast = useRef(null);

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [urlServidor, setUrlServidor] = useState(
    useSelector((state) => state.all.ipAcesso),
  );
  const [hiddenKeyboad, setHiddenKeyboad] = useState(false);
  const [modal, setModal] = useState(false);

  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });

  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(signOut());
    dispatch(acessoExterno());
    dispatch(
      ToastActionsCreators.displayInfo(
        'Bem vindo(a) ao App de Artistas E Albuns!!',
      ),
    );
  }, []);

  const _keyboardDidShow = () => {
    setHiddenKeyboad(true);
  };

  const _keyboardDidHide = () => {
    setHiddenKeyboad(false);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  async function handleSubmit() {
    if (login === '' || senha === '') {
      dispatch(
        ToastActionsCreators.displayError(
          'Campos de Login E Senha São Obrigatórios!!',
          3000,
        ),
      );
      return;
    }
    await dispatch(signInRequest(login, senha));
  }

  async function handleSubmitUrl() {
    dispatch(acessoExternoSetIp(urlServidor));
    setModal(false);
  }

  return (
    <Background>
      <Modal visible={modal} transparent onRequestClose={() => setModal(false)}>
        <ContainerModal>
          <Title>Configuração do Servidor</Title>
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite Uma URL"
              returnKeyType="next"
              value={urlServidor}
              onChangeText={setUrlServidor}
            />
            <SubmitButton
              icon="save"
              loading={loading}
              onPress={handleSubmitUrl}>
              Salvar
            </SubmitButton>
          </Form>
        </ContainerModal>
      </Modal>

      <Container>
        <Image source={Logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu Login"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={login}
            onChangeText={setLogin}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCapitalize="none"
            placeholder="Digite sua Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={senha}
            onChangeText={setSenha}
          />

          <SubmitButton icon="input" loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
      </Container>
      <Button
        hidden={hiddenKeyboad}
        onPress={() => {
          setModal(true);
        }}
        icon="brightness-7"
        color="transparent"
      />
    </Background>
  );
}
