import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
  margin-top: 1.25rem;
  font-weight: 400;
  border: 0;
  box-shadow: 0 5px 11px 0 #273c75, 0 4px 15px 0 #273c75;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background: #2c3e50;
  background-clip: border-box;
  padding-bottom: 20px;
  border-radius: 0.25rem;

  hr {
    width: 100%;
    margin: 0;
    border-top: 2px solid #fff;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding: 12px 0;
  border-radius: 0.25rem;
  margin-top: -1.25rem;
  margin-right: 4%;
  margin-left: 4%;
  box-shadow: 0 5px 11px 0 #273c75, 0 4px 15px 0 #273c75;
  background: linear-gradient(40deg, #45cafc, #303f9f) !important;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 16px;
    }
  }
`;

export const Body = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  form {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  div.coluna-md-05 {
    @media (max-width: 600px) {
      width: 99%;
    }
    @media (max-width: 800px) {
      width: 10%;
    }
    width: 5%;
  }

  div.coluna {
    width: 33%;
    float: left;

    @media (max-width: 700px) {
      width: 49%;
    }

    @media (max-width: 500px) {
      width: 99%;
    }
  }

  div.card-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    padding: 0;

    @media (max-width: 500px) {
      flex-direction: column;
      padding: 0;
    }
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
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Left = styled.div`
  text-align: left;
  margin: auto;
  width: 20%;

  @media (max-width: 600px) {
    width: auto;
    flex-direction: row;
    display: flex;
  }
`;

export const Center = styled.div`
  text-align: center;
  width: 60%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Rigth = styled.div`
  text-align: center;
  text-align: center;
  margin: auto;
  width: 20%;

  @media (max-width: 500px) {
    width: auto;
  }
`;
