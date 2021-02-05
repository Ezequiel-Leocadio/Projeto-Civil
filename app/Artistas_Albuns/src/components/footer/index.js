import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Iten, Text} from './styles';

export default function button({navigation}) {
  function handleRota(rota) {
    navigation.navigate(rota);
  }

  const [hiddenKeyboad, setHiddenKeyboad] = useState(false);
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
  return (
    <Container hidden={hiddenKeyboad}>
      <Iten type="button" onPress={() => handleRota('Artistas')}>
        <Icon name="home" size={30} color="#fff" />
        <Text>Artistas</Text>
      </Iten>

      <Iten type="button" onPress={() => handleRota('Profile')}>
        <Icon name="person" size={30} color="#fff" />
        <Text>Perfil</Text>
      </Iten>
    </Container>
  );
}
