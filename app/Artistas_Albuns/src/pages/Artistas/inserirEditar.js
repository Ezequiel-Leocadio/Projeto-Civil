import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import {
  Container,
  FormInput,
  ButtonRigth,
  Title,
  Img,
  ItensAlbum,
} from './styles';
import {ModalBody, ModalTitle} from '~/components/modal/styles';
import InputFile from '~/components/input/image';

import Background from '~/components/backgound';
import Footer from '~/components/footer/voltar';
import {request} from '~/services/api';

import Loading from '~/components/load';
import Button from '~/components/button/buttonIOS';

import Input from '~/components/input';

const ArtistasInserirEditar = ({navigation}) => {
  const id = navigation.getParam('id');

  const [loading, setLoading] = useState(false);
  const [modalAlbum, setModalAlbum] = useState(false);
  const [modalCapa, setModalCapa] = useState(false);
  const [item, setItem] = useState({Albuns: []});
  const [nome, setNome] = useState('');
  const [idArtista, setIdArtista] = useState('');
  const [idAlbum, setIdAlbum] = useState('');
  const [itemAlbum, setItemAlbum] = useState({Capas: []});
  const [sobrenome, setSobreNome] = useState('');
  const [banda, setBanda] = useState('');
  const [descricaoAlbum, setDescricaoAlbum] = useState('');
  const [imageCapa, setImageCapa] = useState('');

  async function handleSubmit() {
    setLoading(true);
    const res = await request(
      `${idArtista > 0 ? `artistas/${idArtista}` : 'artistas'}`,
      `${idArtista > 0 ? 'put' : 'post'}`,
      {
        nome,
        sobrenome,
        banda,
      },
      9000,
    );

    if (res.success) {
      const dataF = res.data;
      setIdArtista(dataF.id);
      setItem({...dataF, Albuns: []});
    }
    setLoading(false);
  }

  async function handleSubmitAlbum() {
    setLoading(true);
    const res = await request(
      `${idAlbum > 0 ? `albuns/${idAlbum}` : 'albuns'}`,
      `${idAlbum > 0 ? 'put' : 'post'}`,
      {
        descricao: descricaoAlbum,
        ArtistaId: idArtista,
      },
      9000,
    );

    if (res.success) {
      const dataF = res.data;
      if (idAlbum > 0) {
        const itemF = item.Albuns.map((a) => (a.id === idAlbum ? res.data : a));
        setItem({...item, Albuns: itemF});
      } else {
        item.Albuns.push(res.data);
      }

      setIdAlbum(dataF.id);
      setItemAlbum(dataF);
    }
    setLoading(false);
  }

  async function handleSubmitCapa() {
    const data = new FormData();
    data.append('image', imageCapa);
    data.append('AlbunId', idAlbum);
    setLoading(true);
    const res = await request('capas', 'post', data, 9000);

    if (res.success) {
      itemAlbum.Capas.push(res.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    async function load() {
      if (id > 0) {
        setIdArtista(id);
        setLoading(true);
        const res = await request(`artistafind/${id}`, 'post', {}, 9000);

        if (res.success) {
          const dataF = res.data;
          setItem(dataF);
          setNome(dataF.nome);
          setSobreNome(dataF.sobrenome);
          setBanda(dataF.banda);
        }
        setLoading(false);
      }
    }
    load();
  }, []);
  return (
    <Background>
      <Container>
        <Loading loading={loading} />

        <Modal
          transparent
          animationType="slide"
          visible={modalAlbum}
          onRequestClose={() => setModalAlbum(false)}>
          <ModalBody>
            <ModalTitle>{idAlbum > 0 ? 'Editar' : 'Inserir'} Album</ModalTitle>
            <FormInput
              icon="touch-app"
              placeholder="Descricao"
              value={descricaoAlbum}
              onChangeText={setDescricaoAlbum}
            />

            <Button
              icon="save"
              color="success"
              onPress={() => {
                handleSubmitAlbum();
              }}>
              Salvar
            </Button>
            <Button
              icon="book"
              color="info"
              top={10}
              onPress={() => setModalCapa(true)}>
              Capas
            </Button>
          </ModalBody>
        </Modal>

        <Modal
          transparent
          animationType="slide"
          visible={modalCapa}
          onRequestClose={() => setModalCapa(false)}>
          <ModalBody>
            <ModalTitle>Inserir Capa de Album</ModalTitle>
            <InputFile
              name="Selecione Uma Image"
              onSelected={(e) => setImageCapa(e)}
            />

            <Button
              icon="save"
              color="success"
              onPress={() => {
                handleSubmitCapa();
              }}>
              Salvar
            </Button>
            {idArtista > 0 && (
              <>
                {itemAlbum.Capas.map((a, index) => (
                  <ItensAlbum key={index}>
                    <Img
                      source={{
                        uri: a.imagem,
                      }}
                    />
                  </ItensAlbum>
                ))}
              </>
            )}
          </ModalBody>
        </Modal>

        <Input
          icon="touch-app"
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <Input
          icon="touch-app"
          placeholder="SobreNome"
          value={sobrenome}
          onChangeText={setSobreNome}
        />
        <Input
          icon="touch-app"
          placeholder="Nome Banda"
          value={banda}
          onChangeText={setBanda}
        />

        <Button
          icon="save"
          color="success"
          onPress={() => {
            handleSubmit();
          }}>
          Salvar
        </Button>
        <Title>Albuns</Title>
        {idArtista > 0 && (
          <>
            {item.Albuns.map((a, index) => (
              <ItensAlbum
                key={index}
                onPress={() => {
                  setItemAlbum(a);
                  setIdAlbum(a.id);
                  setDescricaoAlbum(a.descricao);
                  setModalAlbum(true);
                }}>
                <Img
                  source={{
                    uri: a.capa,
                  }}
                />
                <Title>{a.descricao}</Title>
              </ItensAlbum>
            ))}
          </>
        )}

        {/* {itens.length > 0 &&
          itens.map((iten) => (
            <ContainerItem key={iten.id} onPress={() => {}}>
              <Row>
                <Nome>{iten.nome}</Nome>
              </Row>
              <Row>
                <Descrit>{iten.albunsf}</Descrit>
              </Row>
            </ContainerItem>
          ))} */}
      </Container>
      <ButtonRigth
        icon="add"
        color="success"
        onPress={() => setModalAlbum(true)}
      />

      <Footer
        voltar="Artistas"
        navigation={navigation}
        rota="Detalhe Artista"
      />
    </Background>
  );
};

export default ArtistasInserirEditar;
