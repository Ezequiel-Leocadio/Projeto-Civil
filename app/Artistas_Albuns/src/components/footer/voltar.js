import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import {roundToNearestMinutes} from 'date-fns/esm';
import {Container, Iten, Text, Title} from './styles';

export default function button({rota, navigation, voltar}) {
  function handleRota(e) {
    navigation.navigate(e);
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
      <Iten type="button" onPress={() => handleRota(voltar)}>
        <Icon name="keyboard-backspace" size={50} color="#fff" />
      </Iten>

      <Title>{rota}</Title>

      <Iten type="button" onPress={() => handleRota('Artistas')}>
        <Icon name="home" size={30} color="#fff" />
        <Text>Home</Text>
      </Iten>
    </Container>
  );
}

button.prototype = {
  rota: PropTypes.string.isRequired,
};
