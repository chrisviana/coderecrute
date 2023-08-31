import styled from "styled-components";
import ImgFundo from "../../assets/fundoCabecalho.png";

export const ContainerSobreVaga = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImagemCabecalho = styled.div`
  width: 100%;
  height: 117px;
  background-image: url(${ImgFundo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentSobreVaga = styled.div`
  width: 795px;
`;

export const NomeDaVaga = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.5625rem;
  height: 4.4375rem;
  border-radius: 0.375rem;
  background: #0287cf;
  color: #fcfcfc;
  font-size: 2.1875rem;
  font-weight: 700;
  margin: -35px auto 0px auto;
`;

export const InfoVaga = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 1.6rem;
    width: 100%;
  }
  p,
  li {
    color: #c4c4cc;
    font-size: 0.875rem;
    font-weight: 400;
  }

  li {
    margin-left: 1.7rem;
  }
`;

export const Title = styled.span`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const ModeloTrabalho = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const ButtonQueroVaga = styled.button`
  width: 14.375rem;
  height: 3.4375rem;
  border-radius: 0.375rem;
  background: #005f92;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  cursor: pointer;
  border: 0;
`;
