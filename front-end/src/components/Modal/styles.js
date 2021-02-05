import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  h1 {
    margin-top: 10px;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  div.coluna {
    input {
      width: auto !important;
      margin: 5px !important;
    }
  }

  div.scroll {
    overflow-y: scroll;
    height: 30vw;
    width: 100%;
  }
  div.scroll-pdf {
    overflow: hidden;
    height: 88vh;
    width: 100%;
  }
`;

export const Content = styled.div`
  height: 80vh;
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 28px 15px 20px;
  height: auto;
  width: auto !important;
  animation: flipTop 1 1s ease-out;
  max-height: 100vh;
  overflow-x: scroll;
  display: block !important;

  h1 {
    display: flex;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    width: auto;
    margin: 0;
    position: relative;
    margin-top: 10px;
  }

  form {
    > span {
      color: #b9bbbe;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
    }

    div {
      margin-top: 0;
    }

    > button {
      margin: 10px 3px;
      max-width: 400px;
    }
  }

  @media (max-width: 400px) {
    padding: 10px;
    width: 95%;
  }
`;

export const Body = styled.form`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  div.modal-footerr {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    span {
      display: flex;
      font-weight: bold;
      margin: 0 5px;
      color: #fff;
    }
  }
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
  top: 6px;
  right: -23px;

  @media (max-width: 400px) {
    top: -2px;
    right: -6px;
  }
`;
