import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Container, FormLogin } from "./styles";
import imgLogo from "../../assets/logo.png"

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigete = useNavigate()

  function efetuarLogin(event) {
    event.preventDefault();
    if (!email || !password) {
      return toast.warning("Os campos de email e senha são obrigatorios");
    }

    sessionStorage.setItem("@token", "@$@F#^F2f312676Ff") 
    toast.success("Logado com sucesso")

    navigete("/admin")
  }

  return (
    <Container>
      <FormLogin>
        <img src={imgLogo} alt="Logo Coderecrute" />
        <p>Insira seu e-mail e senha para acessar sua conta.</p>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <Button onClick={efetuarLogin}>Login</Button>
      </FormLogin>
      
     
    </Container>
  );
}
