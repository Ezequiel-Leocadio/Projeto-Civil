import React, {useRef, useState, useEffect, useCallback} from 'react';
import {Linking} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/backgound';
import {signOut} from '~/store/models/auth/actions';

import {Container, Form, FormInput, Title, Separator} from './styles';

import ButtonXl from '~/components/button/buttonXl';
import {BtnGroup} from '~/components/button/styles';
import Footer from '~/components/footer';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.auth.user);

  const loginRef = useRef();

  const [login, setLogin] = useState(profile.login);
  const [name, setName] = useState(profile.nome);

  const [textSaldacao, setTextSaldacao] = useState('');

  useEffect(() => {
    function load() {
      const date = new Date();
      const hora = date.getHours();
      if (hora < 12 && hora > 1) {
        setTextSaldacao('Bom Dia!');
      } else if (hora >= 12 && hora < 18) {
        setTextSaldacao('Boa Tarde!');
      } else if (hora >= 18) {
        setTextSaldacao('Boa Noite!');
      }
    }
    load();
  }, [profile]);

  function handleLogaut() {
    dispatch(signOut());
  }

  const config = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Meu Perfil</Title>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu Nome"
            returnKeyType="next"
            onSubmitEditing={() => loginRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            value={login}
            onChangeText={setLogin}
          />
          <Separator />
          <BtnGroup>
            <ButtonXl
              color="success"
              iconf="whatsapp"
              onPress={() =>
                Linking.canOpenURL('whatsapp://send?text=oi').then(
                  (supported) => {
                    if (supported) {
                      return Linking.openURL(
                        `whatsapp://send?phone=5565999405113&text=${textSaldacao}, Aqui é o(a) ${name}`,
                      );
                    }
                    return Linking.openURL(
                      `https://api.whatsapp.com/send?phone=5565999405113&text=${textSaldacao}, Aqui é o(a) ${name}`,
                    );
                  },
                )
              }
            />
            <ButtonXl color="primary" icon="brightness-7" onPress={config} />
            <ButtonXl
              color="danger"
              icon="exit-to-app"
              onPress={handleLogaut}
            />
          </BtnGroup>
        </Form>
        {/* </ViewShot> */}
      </Container>

      <Footer navigation={navigation} />
    </Background>
  );
}
