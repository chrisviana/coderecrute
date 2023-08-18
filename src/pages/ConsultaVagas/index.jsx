import { useEffect, useState } from "react";
import { ContainerConsulta, ContentButton, ContentConsulta, Input, List, Paragrafo } from "./styles";


export function ConsultaVagas() {
  const [vagas, setVagas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVagas().then(vagas => {
      setVagas(vagas)
      setLoading(false)
    })
    .catch(error => {
      console.error("Erro ao carregar vagas de emprego: ", error)
    })
  },[])

  console.log("Vagas: ",vagas)
  const fetchVagas = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockVagas = [
          {
            id: 1,
            title: "Desenvolvedor Front-End",
            descricao: "Trabalha com css"
          },
          {
            id: 2,
            title: "UX/UI",
            descricao: "Trabalha fazendo telinha"
          },
          {
            id: 3,
            title: "Desenvolvedor Back-End",
            descricao: "Esquecer ponto e virguala"
          }
        ];

        resolve(mockVagas)
      },5000)
    })
  }
  return (
    <ContainerConsulta>
      <ContentConsulta>
        <ContentButton>
          <button>Cadastrar Vaga</button>
        </ContentButton>
        
        <Input placeholder="Buscar Vaga"/>
        {
          loading ? (
            <Paragrafo> Carregando vagas </Paragrafo>
          ) : (
            <List>
              {
                vagas.map(vaga => (
                  <li key={vaga.id}>{vaga.title}</li>
                ))
              }
              
     
            </List>
          )
        }
      </ContentConsulta>
    </ContainerConsulta>
  )
}