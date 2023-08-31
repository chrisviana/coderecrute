import { ButtonLogin, ContainerHeader } from "./styles";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/logo.png";

export function Header(){

  return (
    <ContainerHeader>
      <img src={imgLogo} alt="Logo coderecrute" width={180} />
      <Link to="/login">
        <ButtonLogin>
          Login
        </ButtonLogin>
      </Link>
    </ContainerHeader>
  )
}