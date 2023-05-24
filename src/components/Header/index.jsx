import { DivHeader, DivCategorias, DivLogo, DivMulti } from "./styled";
import Logo from "../../assets/images/Logo.svg";
import Pesquisa from "../../assets/images/Pesquisa.svg";


const Header = () => {
  return (
    <DivHeader>
      <DivLogo>
        <img src={Logo} alt="" />
      </DivLogo>
      <DivCategorias>
        <a href={"/filmes"}>Filmes</a>

        <a href={"/series"}>Series</a>

      </DivCategorias>

      <DivMulti>
        <img src={Pesquisa} alt="" />
        <p>Filtro</p>
        <p>Login</p>
      </DivMulti>
    </DivHeader>
  );
};

export default Header;
