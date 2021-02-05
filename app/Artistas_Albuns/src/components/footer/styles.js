import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  /* height: 46px; */
  background: #0a3d62;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    props.hidden === true &&
    css`
      display: none;
    `}
`;

export const Iten = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  text-align: center;

  width: 20%;
  justify-content: center;
  padding: 5px;
`;

export const Text = styled.Text`
  display: flex;
  font-size: 10px;
  text-align: center;
  align-items: center;

  justify-content: center;
  color: #fff;
`;

export const Title = styled.Text`
  display: flex;

  font-size: 18px;
  /* padding: 0 5px; */
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
