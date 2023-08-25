import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;

  h1 {
    color: var(--white);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }

  form {
    margin-top: 2rem;
  }

  input {
    color: var(--white);
    height: 54px;
    width: 509px;
    border-radius: 6px;
    background-color: var(--input-color);
    border: none;
    padding: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 800px;

    button {
      width: 30.875rem;
      padding: 1rem 2rem;
      border-radius: 0.375rem;
      background: #00875f;
      border: none;
      color: var(--white);
      cursor: pointer;
      margin-top: 5rem;
      margin-left: 20rem;

      &:hover {
        background-color: #00b37e;
        transition: background-color 0.5s;
      }
    }
  }
`;
