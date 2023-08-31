import styled from "styled-components";
import imgBackground from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${imgBackground});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLogin = styled.form`
  margin-top: 5.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    color: var(--white);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  input {
    color: var(--white);
    height: 82px;
    width: 509px;
    border-radius: 6px;
    background-color: var(--input-color);
    border: none;
    padding: 2rem;
  }
`;

export const Button = styled.button`
  width: 509px;
  height: 82px;
  background-color: #033266;
  color: #ffffff;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #005f92;
  }
`;
