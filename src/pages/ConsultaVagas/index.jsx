import { useEffect, useState } from "react";
import {
  ContainerConsulta,
  ContainerIcons,
  ContentButton,
  ContentConsulta,
  Input,
  List,
  Paragrafo,
} from "./styles";
import { Pencil, Trash } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog';
import { ModalVagas } from "../../components/Administrador/ModalVagas";
import axios from "axios";
import { ModalDelete } from "../../components/Administrador/ModalDelete";

export function ConsultaVagas() {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editVaga, setEditVaga] = useState(null)

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NDQyMzA0NSwiaWF0IjoxNjg0NDIzMDQ1fQ.3GDYc4YE0FhkUqz1vEaMAfASfbJbJll76yDt-h93fNo"

  useEffect(() => {
    axios.get("https://code-recrute.onrender.com/vacancies", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setVagas(response.data.result)
      setLoading(false)
    })
    .catch((error) => {error})
  }, []);


  const getVagas = () => {
    axios.get("https://code-recrute.onrender.com/vacancies", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setVagas(response.data.result)
    })
    .catch((error) => {error})
  }

  const handleEditVaga = (vaga) => {
    setEditVaga(vaga)
   }

 
  return (
    <ContainerConsulta>
      <ContentConsulta>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ContentButton>
              <button>Cadastrar Vaga</button>
            </ContentButton>
          </Dialog.Trigger>
          <ModalVagas getVagas={getVagas} />
        </Dialog.Root>
        

        <Input placeholder="Buscar Vaga" />
        {loading ? (
          <Paragrafo> Carregando vagas </Paragrafo>
        ) : (
          <List>
            {vagas.map((vaga) => (
              <li key={vaga.id}>
                {vaga.title}
                <ContainerIcons>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Pencil size={22} onClick={() => handleEditVaga(vaga)}/>
                  </Dialog.Trigger>
                  <ModalVagas getVagas={getVagas} editVaga={editVaga}/>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Trash size={22} />
                  </Dialog.Trigger>
                  <ModalDelete vaga={vaga.title} id={vaga.id} getVagas={getVagas}/>
                </Dialog.Root>
                  
                 
                </ContainerIcons>
              </li>
            ))}
          </List>
        )}
      </ContentConsulta>
    </ContainerConsulta>
  );
}
