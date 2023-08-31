import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;

export const InputSearchVagas = styled.input`
  width: 35.6875rem;
  height: 3.4375rem;
  background: #121214;
  border: none;
  padding: 1rem;
  border-radius: 6px;
`;

export const ContentVagas = styled.main`
  max-width: 913px;
  width: 100%;
  display: flex;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 17.3125rem;
  height: 13rem;
  background: #29292e;
  padding: 1rem;
  margin: 0.5rem 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: 6px;

  span,
  p {
    color: #c4c4cc;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Title = styled.span`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const ButtonAplicar = styled.button`
  width: 7.3125rem;
  height: 2.125rem;
  border-radius: 1.0625rem;
  background: #0287cf;
  border: none;
  cursor: pointer;
  color: #fff;

  font-weight: 600;

  &:hover {
    background: #00a8dc;
    transition: background 0.2s;
  }
`;

export const ButtonMaisInfo = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;
