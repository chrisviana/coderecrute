import styled from "styled-components";

export const ContainerConsulta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
export const ContentConsulta = styled.main`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  button {
    width: 163px;
    height: 48px;
    color: #fff;
    background: #033266;
    border: none;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  height: 54px;
  background: #121214;
  border-radius: 6px;
  border: none;
  margin-top: 1rem;
  padding: 1rem;
`;

export const List = styled.ul`
  li {
    color: #c4c4cc;
    font-weight: 400;
    font-size: 1rem;
    list-style: none;

    background: #29292e;
    margin-top: 1rem;
    height: 51px;
    border-bottom: 6px;

    display: flex;
    align-items: center;
    padding-left: 1rem;
    justify-content: space-between;
  }
`;

export const Paragrafo = styled.p`
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

  & svg:last-child {
    color: #f75a68;
  }
`;
