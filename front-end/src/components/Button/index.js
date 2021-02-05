import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function button({ children, icon, size, color, ...rest }) {
  let colorExa = '';
  switch (color) {
    case 'success':
      colorExa = '#1eff97';
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
    default:
      colorExa = '#95a5a6';
  }
  return (
    <Container {...rest}>
      <>
        {icon && <i className={`fa ${icon}`} />}

        <Text>{children}</Text>
      </>
    </Container>
  );
}

button.prototype = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

button.defaultProps = {
  icon: null,
  size: null,
  color: null,
};
