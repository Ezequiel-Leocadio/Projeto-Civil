import styled from 'styled-components/native';

export const ModalBody = styled.ScrollView`
  display: flex;
  align-self: center;
  width: 100%;
  line-height: 150px;
  top: 10%;
  max-height: 80%;
  border-radius: 5px;
  padding: 20px;
  background: #a3b3c5;
`;

export const Body = styled.View`
  display: flex;
  align-self: center;
  width: 95%;
  line-height: 150px;
  top: 10%;
  border-radius: 5px;
  padding: 10px;
  background: #4c555f;
`;
export const TitleM = styled.Text`
  display: flex;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.Text`
  display: flex;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const Iconn = styled.Text`
  display: flex;
  position: relative;
  color: #000;
  font-weight: bold;

  margin: 10px;
  width: 30px;
  border: 5px solid #030;
  font-size: 16px;
`;
