import { ButtonLogin, ContainerHeader } from "./styles";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

export function Header(){
  const { userName, userPhoto } = useContext(AuthContext)
  return (
    <ContainerHeader>
      <Link to="/">
        <img src={imgLogo} alt="Logo coderecrute" width={180} />
      </Link>
      {
        <div>
          {userName}
          <img src={userPhoto} />
        </div>
      
      }
      
      <Link to="/login">
        <ButtonLogin>
          Login
        </ButtonLogin>
      </Link>
    </ContainerHeader>
  )
}