import styled from "styled-components";

export const ContainerHeader = styled.div`
  background: #121214;
  height: 78px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  div {
    display: flex;
    gap: 1rem;

    a {
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      text-decoration: none;

      border-bottom: 2px solid transparent;

      &.active {
        border-bottom: 2px solid #0287cf;
      }

      span {
        &:hover {
          cursor: pointer;
          border-bottom: 2px solid #0287cf;
        }
      }
    }
  }
`;

export const ButtonSingOut = styled.button`
  background: transparent;
  border: none;

  svg {
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;
