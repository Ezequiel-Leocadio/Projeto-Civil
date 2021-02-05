import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Buttonxl from '../Button/buttonXl';
import { Container, Header, Footer, Modal, Check } from './styles';

function Table({ itens, colluns, options, onEvent, header, footer, page }) {
  const [modal, setModal] = useState(false);
  const [collunsF, setCollunsF] = useState(colluns);
  const [itensF, setItensF] = useState(itens);

  const [pageAtual, setPageAtual] = useState(page);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const col = colluns.map((c) => ({
      ...c,
      direction: 'asc',
    }));

    setCollunsF(col);

    const totalItens = itens.length;
    if (totalItens > 9) {
      setNext(true);
    } else {
      setNext(false);
    }
    setItensF(itens);
  }, [colluns, itens]);

  function handleClick(iten, event) {
    onEvent({ iten, event });
  }

  function handleCheck(v) {
    const hiidenColun = collunsF.map((c) => ({
      ...c,
      hidden: c.value === v ? !c.hidden : c.hidden,
    }));

    setCollunsF(hiidenColun);
  }

  function orderBy(c) {
    const v = c.value;
    itensF.sort((a, b) => {
      if (a[v] < b[v]) {
        return c.direction === 'asc' ? -1 : 1;
      }
      if (a[v] > b[v]) {
        return c.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    const direction = c.direction === 'asc' ? 'desc' : 'asc';
    const col = collunsF.map((cl) => ({
      ...cl,
      direction: v === cl.value ? direction : cl.direction,
    }));
    setCollunsF(col);
  }

  function handlePage(page) {
    setPageAtual(page);

    if (itensF.length > 9) {
      setNext(true);
    } else {
      setNext(false);
    }
    onEvent({ page, event: 'page' });
  }

  return (
    <>
      {modal && (
        <Modal>
          {collunsF.map((i, index) => (
            <Check key={index} onClick={() => handleCheck(i.value)}>
              <input type="checkbox" checked={!i.hidden} />
              <span> {i.label}</span>
            </Check>
          ))}
        </Modal>
      )}

      <Container
        onClick={() => {
          if (modal) {
            setModal(false);
          }
        }}
      >
        {header && (
          <Header>
            <Buttonxl
              onClick={() => setModal(!modal)}
              icon="fa-columns"
              color="success"
            />
          </Header>
        )}

        <div className="responsive-scroll-x">
          <table>
            <thead>
              <tr>
                {options.length > 0 && <th>Opções</th>}
                {collunsF.map(
                  (c, index) =>
                    !c.hidden && (
                      <th onClick={() => orderBy(c)} key={index}>
                        {c.label}-
                        {c.direction === 'asc' ? (
                          <i className="fa fa-long-arrow-alt-down" />
                        ) : (
                          <i className="fa fa-long-arrow-alt-up" />
                        )}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              {itensF.map((iten, index) => (
                <tr key={index}>
                  <td>
                    <div className="opcao">
                      {options.map((o, index) => (
                        <Buttonxl
                          key={index}
                          icon={o.icon}
                          color={o.color}
                          onClick={() => handleClick(iten, o.event)}
                        />
                      ))}
                    </div>
                  </td>

                  {collunsF.map(
                    (c, index) =>
                      !c.hidden && <td key={index}>{iten[c.value]}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {footer && (
          <Footer>
            <span>Página:{pageAtual}</span>

            <Buttonxl
              onClick={() => pageAtual > 1 && handlePage(pageAtual - 1)}
              icon="fa-chevron-left"
              disabled={!(pageAtual > 1)}
              color="info"
            />

            <Buttonxl
              onClick={() => next && handlePage(Number(pageAtual) + 1)}
              icon="fa-chevron-right"
              disabled={!next}
              color="info"
            />
          </Footer>
        )}
      </Container>
    </>
  );
}

Table.propTypes = {
  itens: PropTypes.array,
  colluns: PropTypes.array,
  options: PropTypes.array,
  onEvent: PropTypes.func,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  page: PropTypes.number,
};

Table.defaultProps = {
  itens: [],
  colluns: [],
  options: [],
  page: '1',
  onEvent: () => {},
  header: true,
  footer: true,
};

export default Table;
