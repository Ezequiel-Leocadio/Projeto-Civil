import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import {Container, TInput} from './styles';

function input({style, icon, iconf, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255,255, 0.6)" />}
      {iconf && (
        <IconF name={iconf} size={20} color="rgba(255, 255,255, 0.6)" />
      )}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

input.propTypes = {
  icon: PropTypes.string,
  iconf: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

input.defaultProps = {
  icon: null,
  iconf: null,
  style: {},
};

export default forwardRef(input);
