import styled from "styled-components";

export const Container = styled.div`
  font-family: "Open Sans";

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;
export const Hero = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

export const Info = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 auto;
  color: #fff;

  h1 {
    font-weight: bold;
    color: #fff;
    font-size: 54px;
  }

  small {
    font-size: 17px;
    font-weight: 200;
  }

  span {
    font-size: 18px;
  }

  p {
    width: 65%;
    font-size: 24px;
    font-weight: 100;
  }
`;

export const DivCarrousel = styled.div`
  width: 95%;
  margin: 0 auto;

  button {
    background: rgba(0, 0, 0, 0.1);
    border: none;
    font-size: 50px;
    color: #707070;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.1);
    border: none;
    font-size: 60px;
    color: #707070;
  }
`;

export const Titulos = styled.h2`
  width: 85%;
  margin: 0 auto;
  padding: 25px 0px;
  font-weight: bold;
`;

export const EmAlta = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DivEmAlta = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const Filtragem = styled.div`
  height: 10vh;
  width: 85%;
  margin: 0 auto;
  ul {
    padding-top: 20px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style: none;
    font-weight: lighter;
    font-size: 16px;
  }

  li:hover {
    font-size: 17px;
  }
`;

export const DivStar = styled.img`
  width: 30px;
  margin-right: 5px;
`;
export const DivImdb = styled.img`
  width: 80px;
  padding-left: 20px;
`;

export const DivAv = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  font-weight: 100;

  span {
    font-size: 30px;
  }
`;
export const Botao = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
`;

export const Assistir = styled.div`
  background-color: #d53a00;
  width: 50%;
  border-radius: 35px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 21px;
    text-align: center;
  }

  img {
    width: 25px;
  }
`;
export const Trailler = styled.div`
  background-color: #717171;
  width: 40%;
  border-radius: 35px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 21px;
    text-align: center;
  }

  img {
    width: 25px;
  }
`;


export const Buttons = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0px;

  div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 29%;
  }

  .Ativo {
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .Iguais {
    background-color: #000;
    color: #fff;
    border: solid 1px #ffffff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .Last {
    background-color: #000;
    color: #fff;
    border: solid 1px #ffffff;
    border-radius: 10px;
    width: 75px;
    height: 50px;
  }
`;
