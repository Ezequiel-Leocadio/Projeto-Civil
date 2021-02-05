import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row !important;
  padding-right: 20px;
  margin-top: 4px !important;
  justify-content: flex-end;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row !important;
  padding-right: 20px;
  margin-top: 4px !important;
  justify-content: flex-end;
  align-items: center !important;

  select {
    padding: 2px !important;
    font-size: 12px !important;
  }

  @media (max-width: 430px) {
    span {
      display: none !important;
    }
  }
`;

export const Container = styled.div`
  div.responsive-scroll-x {
    overflow-x: scroll;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    margin: auto;
    margin: 5px 0;
  }

  .opcao {
    display: flex;
    flex-direction: revert;
    margin: 0;
    padding: 0;
  }

  table,
  th,
  td {
    padding: 0 5px;
    color: #fff;
  }
  table {
    width: 99%;
    margin: 10px 5px;
    border-collapse: collapse;
  }

  tr:hover {
    background: #40739e59;
  }
  table.pages {
    border-collapse: collapse;
    width: 100%;
  }

  table.next {
    margin-top: 115px;
  }

  thead {
    border-bottom: 2px solid #92929263;
  }

  th {
    color: #dcdde1;

    border-radius: 5px;
    flex-direction: row;
    font-size: 15px;
    height: auto;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background: #40739ec7;
    }
  }

  td {
    height: 15px;
    font-size: 15px;
    text-align: center;
  }

  th,
  td {
    padding: 5px;
    text-align: center;
  }
  tr:nth-child(even) {
    background-color: #1b2144ad;
  }
  tr:nth-child(even):hover {
    background-color: #40739e59;
  }

  div.grupo-btn {
    display: flex;
    margin: 0 !important;
    max-height: 40px;

    button {
      margin: 0 3px 0 0;
      max-width: 150px;
    }
  }
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  right: 130px;
  border-radius: 5px;
  top: 4px;
  width: 250px !important;
  height: auto;
  z-index: 99;
  color: #fff;
  padding: 10px 0;
  background: #586573;

  @media (max-width: 430px) {
    width: 200px !important;
    top: -24px;
    right: 102px;
  }
`;

export const Check = styled.label`
  display: block;
  position: relative;
  color: #fff;
  margin-bottom: 1px;
  cursor: pointer;
  font-size: 15px;
  user-select: none;

  background: #576574;

  &:hover {
    background-color: #34495e;
  }

  span {
    margin-left: 45px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  input {
    border-radius: 4px;
    cursor: pointer;
    height: 27px;
    width: 30px;
  }

  input[type='checkbox'] {
    width: 15%;
    margin: 0 5px;
  }
`;
