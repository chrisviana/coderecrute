import styled from "styled-components";

export const ContainerHeader = styled.div`
  background: #121214;
  height: 78px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  span {
    color: #fff;
    font-weight: 700;
    font-size: 16px;

    border-bottom: 2px solid transparent;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #0287cf;
    }
  }

  svg {
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;
