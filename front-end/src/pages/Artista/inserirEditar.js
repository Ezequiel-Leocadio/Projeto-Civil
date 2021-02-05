import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, DivAlbuns, DivItensAlbum } from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button/button';
import Loading from '../../components/Load';
import { request } from '../../services/api';

import Modal from '../../components/Modal';
import { Body, BtnClose } from '../../components/Modal/styles';

function Artista() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [modalAlbum, setModalAlbum] = useState(false);
  const [modalCapa, setModalCapa] = useState(false);
  const [item, setItem] = useState({ Albuns: [] });
  const [nome, setNome] = useState('');
  const [idArtista, setIdArtista] = useState('');
  const [idAlbum, setIdAlbum] = useState('');
  const [itemAlbum, setItemAlbum] = useState({ Capas: [] });
  const [sobrenome, setSobreNome] = useState('');
  const [banda, setBanda] = useState('');
  const [descricaoAlbum, setDescricaoAlbum] = useState('');
  const [imageCapa, setImageCapa] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await request(
      `${idArtista > 0 ? `artistas/${idArtista}` : 'artistas'}`,
      `${idArtista > 0 ? 'put' : 'post'}`,
      {
        nome,
        sobrenome,
        banda,
      },
      9000
    );

    if (res.success) {
      const dataF = res.data;
      setIdArtista(dataF.id);
      setItem({ ...dataF, Albuns: [] });
    }
    setLoading(false);
  }

  async function handleSubmitAlbum(e) {
    e.preventDefault();
    setLoading(true);
    const res = await request(
      `${idAlbum > 0 ? `albuns/${idAlbum}` : 'albuns'}`,
      `${idAlbum > 0 ? 'put' : 'post'}`,
      {
        descricao: descricaoAlbum,
        ArtistaId: idArtista,
      },
      9000
    );

    if (res.success) {
      const dataF = res.data;
      if (idAlbum > 0) {
        const itemF = item.Albuns.map((a) => (a.id === idAlbum ? res.data : a));
        setItem({ ...item, Albuns: itemF });
      } else {
        item.Albuns.push(res.data);
      }

      setIdAlbum(dataF.id);
      setItemAlbum(dataF);
    }
    setLoading(false);
  }

  async function handleSubmitCapa(e) {
    e.preventDefault();
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

  const buttonsRota = [
    { icon: ' fa-arrow-left', color: 'info', rota: '/artista' },
    { icon: ' fa-plus', color: 'success', rota: '/artista-inserir' },
  ];
  const buttonsRotaAlbuns = [
    { icon: ' fa-plus', color: 'success', rota: 'event', event: 'album-add' },
  ];

  return (
    <Container>
      <Loading loading={loading} />
      <Card buttonsL={buttonsRota} nome="Artista Inserir/Editar">
        <form onSubmit={handleSubmit}>
          <div className="coluna">
            <span>Nome:*</span>
            <input
              placeholder="Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="coluna">
            <span>Sobrenome:*</span>
            <input
              placeholder="Sobrenome"
              required
              value={sobrenome}
              onChange={(e) => setSobreNome(e.target.value)}
            />
          </div>
          <div className="coluna">
            <span>Nome Banda:*</span>
            <input
              placeholder="Nome da Banda"
              required
              value={banda}
              onChange={(e) => setBanda(e.target.value)}
            />
          </div>

          <div className="card-footer">
            <Button icon="fa-save" color="success" size={30}>
              Salvar
            </Button>
          </div>
        </form>
      </Card>

      <Card
        buttonsL={buttonsRotaAlbuns}
        nome="Albuns"
        onEvent={() => {
          setIdAlbum(0);
          setItemAlbum({ Capas: [] });
          setDescricaoAlbum('');
          if (idArtista > 0) {
            setModalAlbum(true);
          } else {
            toast.error('Erro Necessário Inserir Artista');
          }
        }}
      >
        <DivAlbuns>
          {idArtista > 0 && (
            <>
              {item.Albuns.map((a, index) => (
                <DivItensAlbum
                  key={index}
                  onClick={() => {
                    setItemAlbum(a);
                    setIdAlbum(a.id);
                    setDescricaoAlbum(a.descricao);
                    setModalAlbum(true);
                  }}
                >
                  {/* {JSON.stringify(a.Capas)} */}
                  <img src={a.capa} alt="Album" />
                  <h1>{a.descricao}</h1>
                </DivItensAlbum>
              ))}
            </>
          )}
        </DivAlbuns>
      </Card>

      <Modal visible={modalAlbum}>
        <BtnClose onClick={() => setModalAlbum(false)}>X</BtnClose>
        <h1>{idAlbum > 0 ? 'Editar' : 'Inserir'} Album</h1>
        <Body onSubmit={handleSubmitAlbum}>
          <div>
            <span>Descrição</span>
            <input
              value={descricaoAlbum}
              onChange={(e) => setDescricaoAlbum(e.target.value)}
              placeholder="Descrição Album"
            />
          </div>
          <Button color="success" icon="fa-save" size={48}>
            Salvar
          </Button>

          <Button
            type="button"
            color="info"
            icon="fa-file-upload"
            size={48}
            onClick={() => setModalCapa(true)}
          >
            Capas
          </Button>
        </Body>
      </Modal>

      <Modal visible={modalCapa}>
        <BtnClose onClick={() => setModalCapa(false)}>X</BtnClose>
        <h1>Inserir Capa de Album</h1>
        <Body onSubmit={handleSubmitCapa}>
          <div>
            <span>Imagem:*</span>
            <input
              required
              type="file"
              onChange={(e) => setImageCapa(e.target.files[0])}
            />
          </div>
          <Button color="success" icon="fa-save" size={100}>
            Inserir Capa
          </Button>
          <DivAlbuns>
            {idArtista > 0 && (
              <>
                {itemAlbum.Capas.map((a, index) => (
                  <DivItensAlbum
                    key={index}
                    onClick={() => {
                      window.open(a.imagem || '', '_brank');
                    }}
                  >
                    {/* {JSON.stringify(a)} */}
                    <img src={a.imagem || ''} alt="Album" />
                  </DivItensAlbum>
                ))}
              </>
            )}
          </DivAlbuns>
        </Body>
      </Modal>
    </Container>
  );
}

export default Artista;
