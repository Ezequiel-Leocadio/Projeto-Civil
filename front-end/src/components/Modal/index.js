import React from 'react';

import PropTypes from 'prop-types';
import { Container, Content } from './styles';

function Modal({ children, visible }) {
  return visible ? (
    <Container>
      <Content>{children}</Content>
    </Container>
  ) : null;
}
Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  visible: PropTypes.bool,
};

Modal.defaultProps = {
  visible: false,
};

export default Modal;
