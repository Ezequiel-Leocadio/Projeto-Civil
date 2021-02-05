import styled from 'styled-components/native';
import {Modal} from 'react-native';

export const Container = styled.View``;

export const ModalL = styled(Modal)``;

export const Loading = styled.View`
  justify-content: center;
  align-self: center;
  align-content: center;

  width: 58px;
  height: 58px;
  top: 40%;
  border-radius: 20px;
  padding: 20px;
  background: #fff;
`;

export const Text = styled.Text`
  color: #fff;
  margin: 5px;
  font-size: 16px;
  text-align: center;
`;

export const ModalBody = styled.View`
  display: flex;
  padding: 20px;
  margin: auto 0;
  background: #34495e;
`;
