import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {ContainerIOS, Text, Icon, IconF} from './styles';

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
  let colorExaLight = '';
  switch (color) {
    case 'success':
      colorExa = '#16a085';
      colorExaLight = '#16a08561';
      break;
    case 'info':
      colorExa = '#00a7ff';
      colorExaLight = '#0097e65c';
      break;
    case 'primary':
      colorExa = '#4fcfef';
      colorExaLight = '#4fcfef9c';

      break;
    case 'warning':
      colorExa = '#ff9800de';
      colorExaLight = '#9e610787';
      break;
    case 'danger':
      colorExa = '#c23616';
      colorExaLight = '#f5573475';
      break;
    case 'dark':
      colorExa = '#000000e3';
      colorExaLight = '#00000082';
      break;
    case 'transparent':
      colorExa = 'transparent';
      colorExaLight = '#0097e65c';
      break;
    default:
      colorExa = '#3b9eff';
      colorExaLight = '#0097e65c';
  }
  return (
    <ContainerIOS hidden={hidden} mTop={top} color={colorExaLight} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <>
          {icon && (
            <Icon colorIcon={colorExa} name={icon} size={35} color="#fff" />
          )}
          {iconf && (
            <IconF colorIcon={colorExa} name={iconf} size={35} color="#fff" />
          )}
          <Text>{children}</Text>
        </>
      )}
    </ContainerIOS>
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
