import {
  ButtonQueroVaga,
  ContainerSobreVaga,
  ContentSobreVaga,
  ImagemCabecalho,
  InfoVaga,
  ModeloTrabalho,
  NomeDaVaga,
  Title,
} from "./styles";

export function SobreVaga() {
  return (
    <ContainerSobreVaga>
      <ImagemCabecalho />
      <ContentSobreVaga>
        <NomeDaVaga>Secretaria</NomeDaVaga>
        <InfoVaga>
          <div>
            <Title>Sobre a vaga:</Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet lacus quam. Mauris consequat dictum lectus, eu eleifend
              quam. Vivamus tristique erat id turpis tincidunt facilisis.
              Maecenas semper ex vitae dictum blandit. Interdum et
            </p>
          </div>
          <div>
            <Title>Requisitos e Qualificações:</Title>
            <p>
              Ensino médio completo; Experiência na área administrativa. Será um
              diferencial profissionais que trabalharam na área contábil.
            </p>
          </div>
          <div>
            <Title>Remuneração e Benefícios:</Title>
            <ul>
              <li>Remuneração R$ 2500,00</li>
              <li>Plano de Saúde Unimed;</li>
              <li>VT</li>
            </ul>
          </div>
          <div>
            <Title>Horário de trabalho:</Title>
            <p>Segunda à sexta-feira das 7:30 as 12:00 e das 13:12 as 17:30 - Não trabalha aos Sábados</p>
          </div>
          <div>
            <ModeloTrabalho>Modelo CLT - presencial</ModeloTrabalho>
          </div>
          <ButtonQueroVaga>
            Quero essa vaga
          </ButtonQueroVaga>
        </InfoVaga>
      </ContentSobreVaga>
    </ContainerSobreVaga>
  );
}
