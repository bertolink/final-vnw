import styled from "styled-components";

export const DivHeader = styled.div`
  font-size: 17px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(9px);
  z-index: 1000;
`;
export const DivLogo = styled.div`
  width: 20%;
  text-align: center;

  img {
    width: 120px;
  }
`;
export const DivCategorias = styled.div`
  width: 18%;
  display: flex;
  justify-content: space-evenly;
  a {
    text-align: center;
    color: white;
    text-decoration: none;
    background-color: #747474;
    width: 120px;
    height: 40px;
    border-radius: 20px;
    box-shadow: 0px 3px 6px #0000005c;
    padding-top: 6px;
    font-weight: light;
  }
`;
export const DivMulti = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-evenly;
  align-items: center;

  p {
    margin: 0px 0px 3px 0px;
  }
`;

