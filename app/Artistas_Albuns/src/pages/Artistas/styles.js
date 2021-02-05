import styled from 'styled-components/native';
import {Image} from 'react-native';
import Button from '~/components/button';
import Input from '~/components/input';

export const Container = styled.ScrollView.attrs({
  // contentContainerStyle: {padding: 10},
})`
  flex: 1;
  align-self: stretch;
  padding: 5px 10px;
`;

export const FormInput = styled(Input)`
  background: #34495e;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  border-bottom-width: 2px;
  border-bottom-color: #fff;
  color: #fff;
`;

export const ContainerItem = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Nome = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #e67e22;
`;

export const Descrit = styled.Text`
  padding: 5px;
  font-size: 20px;
  text-align: center;
  color: #7f8c8d;
  font-weight: bold;
`;

export const ItensAlbum = styled.TouchableOpacity`
  border-radius: 5px;
  background: #ffffff4d;
  max-height: 300px;
  margin: 10px;
`;

export const Img = styled(Image)`
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  margin: 0 auto;
  align-items: center;
  resize-mode: center;
`;

export const ButtonLeft = styled(Button)`
  margin-top: 5px;
  position: absolute;
  /* opacity: 0.7; */
  z-index: 5;
  flex-direction: row;
  text-align: center;
  /* right: 10px; */
  left: 10px;
  border-radius: 30px;
  height: 55px;
  width: 55px;
  bottom: 70px;
  shadow-color: #000;
  shadow-offset:  {width: 1, height: 13};
  shadow-opacity: 1;
  shadow-radius: 15;
  elevation: 6;
`;

export const ButtonRigth = styled(Button)`
  margin-top: 5px;
  position: absolute;
  /* opacity: 0.7; */
  z-index: 5;
  flex-direction: row;
  text-align: center;
  right: 10px;
  border-radius: 30px;
  height: 55px;
  width: 55px;
  bottom: 70px;
  shadow-color: #000;
  shadow-offset:  {width: 1, height: 13};
  shadow-opacity: 1;
  shadow-radius: 15;
  elevation: 6;
`;
