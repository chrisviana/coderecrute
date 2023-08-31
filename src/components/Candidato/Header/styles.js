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

export const ButtonLogin = styled.button`
  background: transparent;
  border: none;
  width: 7.0625rem;
  height: 2.81475rem;
  border-radius: 0.375rem;
  background: #033266;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
`;
