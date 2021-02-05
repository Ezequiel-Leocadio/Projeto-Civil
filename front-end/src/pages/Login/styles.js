import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #2c3e50, #5c6a79);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 407px;
  height: 50%;
  background: #344557;
  border-top: 0;
  color: #666;
  border-radius: 5px;
  padding: 20px;
  text-align: center;

  h1 {
    color: #fff;
  }

  img {
    width: 40%;
  }

  form {
    display: flex;
    flex-direction: column;
    /* margin-top: 35px; */

    input {
      background: rgba(255, 255, 255, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      border: 1px solid #344557;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:active,
      &:focus,
      &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #f39c12 !important ;
        outline: none;
        text-decoration: none;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;

      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media (max-width: 400px) {
    max-width: 100%;
  }
`;
