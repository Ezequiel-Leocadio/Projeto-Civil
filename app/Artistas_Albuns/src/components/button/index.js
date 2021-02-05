import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {Container, Text} from './styles';

export default function button({
  children,
  loading,
  icon,
  iconf,
  color,
  top,
  hidden,
  ...rest
}) {
  let colorExa = '';
  switch (color) {
    case 'success':
      colorExa = '#16a085';
      break;
    case 'info':
      colorExa = '#0097e6';
      break;
    case 'warning':
      colorExa = '#f1c40f';
      break;
    case 'danger':
      colorExa = '#c23616';
      break;
    case 'dark':
      colorExa = '#000000e3';
      break;
    case 'transparent':
      colorExa = 'transparent';
      break;
    default:
      colorExa = '#3b9eff';
  }
  return (
    <Container hidden={hidden} mTop={top} color={colorExa} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <>
          {icon && <Icon name={icon} size={35} color="#fff" />}
          {iconf && <IconF name={iconf} size={35} color="#fff" />}
          <Text>{children}</Text>
        </>
      )}
    </Container>
  );
}

button.prototype = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  hidden: PropTypes.bool,
};

button.defaultProps = {
  icon: null,
  loading: false,
  color: '',
  top: 0,
  hidden: false,
};
