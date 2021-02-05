import React from 'react';
import PropTypes from 'prop-types';
import { Container, Loading } from './styles';
import CheckLogin from '../CheckLogin';

function Load({ loading }) {
  return (
    <>
      <CheckLogin check={!loading} />
      <Container loading={loading ? 1 : 0}>
        <Loading>
          <div />
        </Loading>
      </Container>
    </>
  );
}

Load.propTypes = {
  loading: PropTypes.bool,
};

Load.defaultProps = {
  loading: false,
};

export default Load;
