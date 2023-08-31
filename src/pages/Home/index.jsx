import { ButtonAplicar, Card, ContainerHome, ContentVagas, InputSearchVagas, Title } from "./styles";

export function Home() {

  return (
    <ContainerHome>
      <InputSearchVagas type="text" placeholder="Busque por uma vaga"/>
      <ContentVagas>
        <Card>
          <Title>Secretaria</Title>
          <span>Vagas: 1</span>
          <p>Requisitos: Ensino médio completo; Experiência na área administrativa.</p>
          <span> R$ 2.500,00</span>
          <div>
            <ButtonAplicar>
              Aplicar agora
            </ButtonAplicar>
            <button>
              Mais info
            </button>
          </div>
        </Card>
      </ContentVagas>
    </ContainerHome>
  )
}