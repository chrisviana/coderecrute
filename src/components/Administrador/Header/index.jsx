import { SignOut } from "@phosphor-icons/react";
import { ButtonSingOut, ContainerHeader } from "./styles";
import { Link, useNavigate } from "react-router-dom";

export function Header(){

  const navigate = useNavigate();

  function signOut() {
    sessionStorage.removeItem("@token");
    navigate("/admin");
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <ContainerHeader>
      <div>
        <Link to="consulta-vagas" end="true" className={isActive("/admin/consulta-vagas")}>
          <span>Consulta Vagas</span> 
        </Link>

        <Link to="consulta-empresas" end="true" className={isActive("/admin/consulta-empresas")}>
          <span>Consulta Empresas</span>
        </Link>
      </div>



      <ButtonSingOut onClick={signOut}>
        <SignOut size={28} />
      </ButtonSingOut>
      
    </ContainerHeader>
  )
}