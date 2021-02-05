import React, {useState, useEffect} from 'react';
import {Alert, Modal, ActivityIndicator} from 'react-native';
// import {NavigationAction} from 'react-navigation';
import {useSelector, useDispatch} from 'react-redux';
import jwtDecode from 'jwt-decode';
import {Loading, ModalBody, Text} from './styles';
import Button from '~/components/button';
import {verificaLoginSuccess} from '~/store/models/auth/actions';

export default function Load({loading, navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    async function check() {
      try {
        if (!loading) {
          if (token) {
            const decodedToken = await jwtDecode(token);
            const dateNow = new Date();
            // dateNow.setTime(decodedToken.exp * 1000);
            const timeExpiration = decodedToken.exp * 1000;
            if (timeExpiration < dateNow.getTime()) {
              setIsExpired(true);
            }
            // alert(JSON.stringify(`${dateNow}----${dateNow.getTime() / 1000}`));
            await dispatch(verificaLoginSuccess(!isExpired));
          }
        }
      } catch (error) {
        Alert.alert('Erro', JSON.stringify(error));
      }
    }
    check();
  }, []);

  return (
    <>
      <Modal transparent visible={isExpired}>
        <ModalBody>
          <Text>Sua Sessão Expirou, É Necessário Fazer Login Novamente!!</Text>
          <Button
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            icon="send"
            color="success">
            Clique Para Fazer Login!!
          </Button>
        </ModalBody>
      </Modal>
      <Modal transparent animationType="slide" visible={loading}>
        <Loading>
          <ActivityIndicator animating size={70} color="#0000ff" />
        </Loading>
      </Modal>
    </>
  );
}
