import React, {forwardRef, useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';

import {Alert} from 'react-native';
import PropTypes from 'prop-types';

import {Container, ButtonImage, ButtonImageText} from './styles';

function Image({style, name, onSelected, ...rest}, ref) {
  const [selected, setSelected] = useState(name);

  function handleSelectImage(e) {
    ImagePicker[e](
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        let prefix;
        let ext;

        if (response.fileName) {
          [prefix, ext] = response.fileName.split('.');
          ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
        } else {
          prefix = new Date().getTime();
          ext = 'jpg';
        }

        const image = {
          ...response,
          uri: response.uri,
          type: response.type,
          name: `${prefix}.${ext}`,
        };
        onSelected(image);
        setSelected(image.name);
      },
    );
  }

  return (
    <ButtonImage
      onPress={() => {
        Alert.alert('Selecione', `Carregar da Câmera ou Galeria?`, [
          {
            text: 'Câmera',
            onPress: () => handleSelectImage('launchCamera'),
          },
          {
            text: 'Galeria',
            onPress: () => handleSelectImage('launchImageLibrary'),
          },
        ]);
      }}>
      <ButtonImageText>{selected}</ButtonImageText>
    </ButtonImage>
  );
}

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSelected: PropTypes.func,
};

Image.defaultProps = {
  onSelected: () => {},
  style: {},
};

export default forwardRef(Image);
