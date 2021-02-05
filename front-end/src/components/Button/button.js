import React from 'react';
import PropTypes from 'prop-types';

import { Btn } from './styles';

export default function button({
  children,
  density,
  icon,
  size,
  color,
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
    <Btn
      density={density}
      size={size}
      nome={children}
      color={colorExa}
      {...rest}
    >
      <>
        {icon && <i className={`fa ${icon}`} />}

        <h3 className={density}>{children}</h3>
      </>
    </Btn>
  );
}

button.prototype = {
  children: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  density: PropTypes.string,
};

button.defaultProps = {
  icon: 'fa-mouse-pointer',
  children: '',
  size: null,
  color: '',
  density: 'solid',
};
