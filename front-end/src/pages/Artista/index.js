import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import Card from '../../components/Card';
import Table from '../../components/Table';
import Button from '../../components/Button/button';
import Loading from '../../components/Load';
import { request } from '../../services/api';

function Artista() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [itens, setItens] = useState([]);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobreNome] = useState('');
  const [banda, setBanda] = useState('');
  const [capa, setCapa] = useState('');
  const [order, setOrder] = useState('ASC');
  const [page, setPage] = useState(1);

  function reducer(a) {
    if (a.Albuns.length > 0) {
      return a.Albuns.reduce((album, i) => {
        album += `,${i.descricao}`;
        return album;
      }, '');
    }
    return '';
  }

  async function handleSubmit(e) {
    if (e) e.preventDefault();
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
      9000
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

  function onEvent(e) {
    if (e.event === 'edit') {
      history.push(`/artista-editar/${e.iten.id}`);
    } else if (e.event === 'page') {
      setPage(e.page);
    }
  }

  const buttonsRota = [
    { icon: ' fa-arrow-left', color: 'info', rota: '/' },
    { icon: ' fa-plus', color: 'success', rota: '/artista-inserir' },
  ];
  const options = [{ icon: 'fa-edit', color: 'info', event: 'edit' }];
  const colluns = [
    { value: 'nome', label: 'Nome' },
    { value: 'sobrenome', label: 'Sobrenome' },
    { value: 'albunsf', label: 'Albuns' },
  ];

  return (
    <Container>
      <Loading loading={loading} />
      <Card buttonsL={buttonsRota} nome="Artistas Pesquisa">
        <form onSubmit={handleSubmit}>
          <div className="coluna">
            <span>Nome:</span>
            <input
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="coluna">
            <span>Sobrenome:</span>
            <input
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobreNome(e.target.value)}
            />
          </div>
          <div className="coluna">
            <span>Album:</span>
            <input
              placeholder="Album"
              value={capa}
              onChange={(e) => setCapa(e.target.value)}
            />
          </div>
          <div className="coluna">
            <span>Order:</span>
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option>ASC</option>
              <option>DESC</option>
            </select>
          </div>

          <div className="card-footer">
            <Button icon="fa-search" color="success" size={30}>
              Pesquisar
            </Button>
          </div>
        </form>
      </Card>

      <Card nome="Artistas">
        <Table
          itens={itens}
          options={options}
          colluns={colluns}
          onEvent={onEvent}
          page={page}
        />
      </Card>
    </Container>
  );
}

export default Artista;
