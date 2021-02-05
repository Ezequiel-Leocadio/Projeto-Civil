import React from 'react';
import PropTypes from 'prop-types';

import { ButtonXl } from './styles';

export default function button({ children, icon, size, color, ...rest }) {
  let colorExa = '';
  switch (color) {
    case 'success':
      colorExa = '#16a085';
      break;
    case 'info':
      colorExa = '#0097e6';
      break;
    case 'primary':
      colorExa = '#4fcfef';
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

  // alert(colorExa);
  return (
    <ButtonXl size={size} color={colorExa} {...rest}>
      <>
        {icon && <i className={`fa ${icon}`} />}
        <div>{children}</div>
      </>
    </ButtonXl>
  );
}

button.prototype = {
  children: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

button.defaultProps = {
  icon: 'fa-mouse-pointer',
  children: '',
  size: null,
  color: '',
};
