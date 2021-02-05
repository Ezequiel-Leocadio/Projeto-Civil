import React, {forwardRef, useState} from 'react';
import {Modal} from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';

import {
  ContainerOption,
  Text,
  OptionBody,
  OptionIten,
  OptionText,
} from './styles';

function select({style, icon, iconf, name, itens, onSelected, ...rest}, ref) {
  const [modalItens, setModalItens] = useState(false);
  const [nameSelect, setNameSelect] = useState(name);
  return (
    <>
      <Modal
        transparent
        animationType="slide"
        visible={modalItens}
        onRequestClose={() => setModalItens(false)}>
        <OptionBody>
          {itens.map((f) => (
            <OptionIten
              key={f.value}
              onPress={() => {
                onSelected({item: f});
                setNameSelect(f.label);
                setModalItens(false);
              }}>
              <OptionText>{f.label}</OptionText>
            </OptionIten>
          ))}
        </OptionBody>
      </Modal>
      <ContainerOption
        style={style}
        onPress={() => setModalItens(true)}
        {...rest}>
        {icon && <Icon name={icon} size={20} color="rgba(255, 255,255, 0.6)" />}
        {iconf && (
          <IconF name={iconf} size={20} color="rgba(255, 255,255, 0.6)" />
        )}
        <Text>{nameSelect}</Text>
        <Icon
          name="keyboard-arrow-down"
          size={20}
          color="rgba(255, 255,255, 0.6)"
        />
      </ContainerOption>
    </>
  );
}

select.propTypes = {
  icon: PropTypes.string,
  iconf: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  itens: PropTypes.array,
  onSelected: PropTypes.func,
};

select.defaultProps = {
  icon: null,
  iconf: null,
  style: {},
  itens: [],
  onSelected: () => {},
};

export default forwardRef(select);
