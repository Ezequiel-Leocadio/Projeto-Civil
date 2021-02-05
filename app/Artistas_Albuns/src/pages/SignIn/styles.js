import {Platform, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
// import {RectButton} from 'react-native-gesture-handler';
import Input from '~/components/input';
import Button from '~/components/button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Verao = styled.Text`
  color: #fff;
  left: 5px;
`;

export const ContainerModal = styled.View`
  display: flex;
  margin: auto 0;
  border-radius: 5px;
  height: 50%;
  padding: 10px;
  background: #34495e;
`;
export const Telas = styled(TouchableOpacity)`
  background: #fff;
  border-radius: 4px;
  padding: 5px;

  align-items: center;
  margin: 0 10px 5px;
`;

export const Nome = styled.Text`
  margin-top: 1px;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
  color: #333;
`;

export const IP = styled.Text`
  margin-top: 1px;
  font-weight: bold;
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Separator = styled.View`
  height: 3px;
  background: #0e9aa7;
  margin: 5px 0 5px;
`;
