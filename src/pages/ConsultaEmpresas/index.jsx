import {
  ContainerConsulta,
  ContainerIcons,
  ContentButton,
  ContentConsulta,
  Input,
  List,
} from "./styles";
import { Pencil, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function ConsultaEmpresas() {

  const empresas = JSON.parse(localStorage.getItem("empresas"));
  console.log(empresas);


  return (
    <ContainerConsulta>
      <ContentConsulta>
            <ContentButton>
            <Link to="/admin/app/cadastro-empresas">
              <button> Cadastrar Empesas</button>
            </Link>
            </ContentButton>
        <Input placeholder="Buscar Empresas" />
          <List>
            {empresas.map((empresa) => (
              <li key={empresa.id}>
                {empresa.name}
                <ContainerIcons>
                  <Pencil size={22} />
                  <Trash size={22} />
                </ContainerIcons>
              </li>
            ))}
          </List>
      </ContentConsulta>
    </ContainerConsulta>
  );
}
