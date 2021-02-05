import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  height: auto;
  background: linear-gradient(-90deg, #2c3e50, #5c6a79);
  padding: 20px 40px;

  @media (max-width: 600px) {
    padding: 20px 5px;
  }
`;

export const DivAlbuns = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row !important;
`;

export const DivItensAlbum = styled.div`
  max-width: 22%;
  border-radius: 5px;
  background: #ffffff4d;
  max-height: 300px;
  margin: 10px;
  cursor: pointer;

  img {
    width: auto;
    max-width: 83%;
    margin: 0 auto;
    max-height: 260px;
  }

  h1 {
    text-align: center;
    color: #fff;
    font-size: 22px;
    background: #4c5a69;
    margin-top: auto;
  }

  @media (max-width: 1000px) {
    max-width: 30%;
  }

  @media (max-width: 700px) {
    max-width: 40%;
    margin: 10px auto;
  }

  @media (max-width: 450px) {
    max-width: 70%;
    margin: 10px auto;
  }
`;
