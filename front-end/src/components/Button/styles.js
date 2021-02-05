import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  height: 46px;
  background: #3b9eff;
  border-radius: 4px;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  i {
    font-size: 35px;
  }
`;

export const Text = styled.div`
  flex: 1;
  font-size: 20px;
  text-align: center;
  max-height: 50px;
  padding-right: 10%;
  color: #fff;
`;

export const BtnClose = styled.button`
  float: right;
  position: relative;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background: #e74c3c;
  border: none;
  color: #fff;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.density === 'solid' ? props.color : 'transparent'};
  border: 1px solid ${(props) => props.color && darken(0.09, props.color)};
  border-radius: 4px;
  margin: 5px;
  padding: 1px 6px !important;
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => (props.density === 'solid' ? '#fff' : props.color)};
  outline: none;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12) !important;

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}%;
    `}

  ${(props) =>
    props.nome === '' &&
    css`
      width: 30%;
      margin: 0;
      margin-left: 5px h3 {
        font-size: 15px;
      }

      i {
        font-size: 20px !important;
      }
    `}
  h3.transparent {
    color: ${(props) => props.color};
  }
  h3 {
    flex: 1;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    margin: 0;
    padding-right: 10%;
    color: #fff;
  }

  i {
    font-size: 25px;
  }
  &:hover {
    color: #fff;
    background-color: ${(props) => props.color && darken(0.09, props.color)};
    h3 {
      color: #fff;
    }
  }

  &:focus {
    h3 {
      color: #fff;
    }
    color: #fff;
    background-color: ${(props) => props.color && darken(0.09, props.color)};
  }
`;

export const ButtonXl = styled.button`
  display: flex;
  padding: 5px;
  margin-left: 5px;
  justify-content: center;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color && darken(0.1, props.color)};
  border-radius: 4px;
  float: left;
  font-weight: bold;
  outline: none;
  color: ${(props) => (props.color === '#f1c40f' ? '#000' : '#fff')} !important;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  div {
    font-size: 12px;
  }

  i {
    color: ${(props) =>
      props.color === '#f1c40f' ? '#000' : '#fff'} !important;
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
  &:hover {
    background-color: ${(props) => props.color && darken(0.09, props.color)};
  }
  &:focus {
    background-color: ${(props) => props.color && darken(0.09, props.color)};
  }
`;
