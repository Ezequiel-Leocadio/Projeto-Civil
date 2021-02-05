import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 5px;

  flex-direction: row;
  align-items: center;
`;

export const ContainerOption = styled(TouchableOpacity)`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.8)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;

export const OptionBody = styled.ScrollView`
  align-self: stretch;

  margin: 2px 10px;
  border-radius: 5px;
  background: #160f30;
`;
export const OptionIten = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f2f2;

  color: #fff;
  border-radius: 3px;
  padding: 5px;
  border-style: solid;
  border-left-width: 4px;
  border-left-color: #007ba4;

  margin: 3px;
`;

export const OptionText = styled.Text`
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #2f2260;
`;

export const ButtonImage = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 1px;
  margin-bottom: 5px;
  border-color: #fff;
  border-style: dashed;
  background: #34495e;
  height: 42;
  justify-content: center;
  align-items: center;
`;

export const ButtonImageText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
