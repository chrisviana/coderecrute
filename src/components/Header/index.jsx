import { SignOut } from "@phosphor-icons/react";
import { ContainerHeader } from "./styles";

export function Header(){
  return (
    <ContainerHeader>
      <span>Consulta Vagas</span>
      <SignOut size={28} />
    </ContainerHeader>
  )
}