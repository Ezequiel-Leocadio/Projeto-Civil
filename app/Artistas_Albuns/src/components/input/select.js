import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';

import {ContainerOption, Text} from './styles';

function select({style, icon, iconf, name, ...rest}, ref) {
  return (
    <ContainerOption {...rest}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255,255, 0.6)" />}
      {iconf && (
        <IconF name={iconf} size={20} color="rgba(255, 255,255, 0.6)" />
      )}
      <Text>{name}</Text>
      <Icon
        name="keyboard-arrow-down"
        size={20}
        color="rgba(255, 255,255, 0.6)"
      />
    </ContainerOption>
  );
}

select.propTypes = {
  icon: PropTypes.string,
  iconf: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

select.defaultProps = {
  icon: null,
  iconf: null,
  style: {},
};

export default forwardRef(select);
