import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import {
  Container,
  FormInput,
  ContainerItem,
  Nome,
  Row,
  Descrit,
  ButtonLeft,
  ButtonRigth,
} from './styles';
import {ModalBody, ModalTitle} from '~/components/modal/styles';

import Background from '~/components/backgound';
import Footer from '~/components/footer';
import {request} from '~/services/api';

import Loading from '~/components/load';
import Button from '~/components/button/buttonIOS';

const Artistas = ({navigation}) => {
  const [itens, setItens] = useState([]);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobreNome] = useState('');
  const [banda, setBanda] = useState('');
  const [capa, setCapa] = useState('');
  const [order, setOrder] = useState('ASC');
  const [page, setPage] = useState(1);
  const [itemSearch, setItemSearch] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalPesauisa, setModalPesquisa] = useState(false);

  function reducer(a) {
    if (a.Albuns.length > 0) {
      return a.Albuns.reduce((album, i) => {
        album += `,${i.descricao}`;
        return album;
      }, '');
    }
    return '';
  }

  async function handleSubmit() {
    setLoading(true);
    const res = await request(
      'artistas',
      'get',
      {
        nome,
        sobrenome,
        banda,
        capa,
        order,
        page,
      },
      9000,
    );

    if (res.success) {
      const dataF = res.data.map((a) => ({
        ...a,
        albunsf: reducer(a),
      }));
      setItens(dataF);
    } else {
      setItens([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    async function load() {
      await handleSubmit();
    }
    load();
  }, [page]);

  return (
    <Background>
      <Container>
        <Loading loading={loading} />

        <Modal
          transparent
          animationType="slide"
          visible={modalPesauisa}
          onRequestClose={() => setModalPesquisa(false)}>
          <ModalBody>
            <ModalTitle>Pesquisa de Artistas</ModalTitle>
            {/* <FormClient> */}
            <FormInput
              icon="touch-app"
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />
            <FormInput
              icon="touch-app"
              placeholder="SobreNome"
              value={sobrenome}
              onChangeText={setSobreNome}
            />
            <FormInput
              icon="touch-app"
              placeholder="Album"
              value={capa}
              onChangeText={setCapa}
            />

            <Button
              icon="search"
              color="success"
              onPress={() => {
                handleSubmit();
                setModalPesquisa(false);
              }}>
              Pesquisar
            </Button>
            <Button
              icon="close"
              color="dark"
              top={10}
              onPress={() => {
                setModalPesquisa(false);
              }}>
              Fechar
            </Button>
          </ModalBody>
        </Modal>

        {itens.length > 0 &&
          itens.map((iten) => (
            <ContainerItem
              key={iten.id}
              onPress={() =>
                navigation.navigate('InserirEditar', {id: iten.id})
              }>
              <Row>
                <Nome>{iten.nome}</Nome>
              </Row>
              <Row>
                <Descrit>{iten.albunsf}</Descrit>
              </Row>
            </ContainerItem>
          ))}
      </Container>
      <ButtonLeft
        icon="search"
        color="warning"
        onPress={() => {
          setModalPesquisa(true);
        }}
      />
      <ButtonRigth
        icon="add"
        color="success"
        onPress={() => navigation.navigate('InserirEditar', {id: 0})}
      />

      <Footer navigation={navigation} />
    </Background>
  );
};

export default Artistas;
