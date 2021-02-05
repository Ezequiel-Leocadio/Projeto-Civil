import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  display: ${(props) => (props.loading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const Loading = styled.div`
  display: inline-block !important;
  position: relative;
  width: 80px !important;
  height: 80px !important;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px !important;
    height: 64px !important;
    margin: 8px;
    border: 8px solid #fff;
    background: #2c3e50;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
