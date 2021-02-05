import styled, {css} from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

import Iconn from 'react-native-vector-icons/MaterialIcons';
import IconFf from 'react-native-vector-icons/FontAwesome';

export const Container = styled(TouchableOpacity)`
  height: 46px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  margin-top: ${(props) => props.mTop}px;
  border-radius: 4px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.hidden === true &&
    css`
      display: none;
    `}
`;

export const ContainerIOS = styled(TouchableOpacity)`
  height: 46px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  margin-top: ${(props) => props.mTop}px;
  border-radius: 4px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.hidden === true &&
    css`
      display: none;
    `}
`;

export const BtnGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Btn = styled(TouchableOpacity)`
  height: 40px;
  width: 40px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  margin-top: ${(props) => props.mTop}px;
  border-radius: 5px;
  /* padding-left: 10px; */
  display: flex;
  margin-left: 5px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;

  ${(props) =>
    props.hidden === true &&
    css`
      display: none;
    `}
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 20px;
  text-align: center;
  /* padding-left: px; */
  max-height: 50px;
  /* border: 2px solid #000; */
  padding-right: 10%;
  color: #fff;
`;

export const Icon = styled(Iconn)`
  padding: 2px;
  border-radius: 4px;
  background: ${(props) => props.colorIcon};
`;
export const IconF = styled(IconFf)`
  padding: 2px;
  border-radius: 4px;
  background: ${(props) => props.colorIcon};
`;
