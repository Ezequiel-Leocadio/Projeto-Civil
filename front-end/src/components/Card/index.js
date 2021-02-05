import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ButtonXl from '../Button/buttonXl';
import { Container, Card, Body, Left, Center, Rigth } from './styles';

function CardBox({ children, nome, buttonsL, buttonsR, onEvent }) {
  const history = useHistory();
  return (
    <Container>
      <Card>
        <Left>
          {buttonsL.map((b, index) => (
            <ButtonXl
              key={index}
              icon={b.icon}
              color={b.color}
              onClick={() => {
                if (b.rota !== 'event') {
                  history.push(b.rota);
                } else {
                  onEvent(b);
                }
              }}
            />
          ))}
        </Left>
        <Center>
          <h1>{nome}</h1>
        </Center>
        <Rigth>{buttonsR}</Rigth>
      </Card>
      <Body>{children}</Body>
    </Container>
  );
}

CardBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  nome: PropTypes.string.isRequired,
  buttonsL: PropTypes.array,
  buttonsR: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onEvent: PropTypes.func,
};

CardBox.defaultProps = {
  buttonsL: [],
  buttonsR: [],
  onEvent: () => {},
};

export default CardBox;
