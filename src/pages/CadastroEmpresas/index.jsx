import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Container } from "./style";

export function CadastroEmpresa() {
  const [name, setName] = useState("");
  const [empresas, setEmpresas] = useState(JSON.parse(localStorage.getItem("empresas")));

  const { id } = useParams();
  
  function cadastrarEmpresa(event) {
    event.preventDefault();
    const objetoEmpresa = {
      id: uuidv4(),
      name
    };

    setEmpresas(prevEmpresas => [...prevEmpresas, objetoEmpresa]);
    setName("")
  }

  function buscaEmpresaPorId(id) {
    return empresas.find(empresa => empresa.id === id);
  }

  const empresa = buscaEmpresaPorId(id);
  useEffect(() => {
    if (empresa) {
      setName(empresa.name);
    }
  }, [empresa]);

  useEffect(() => {
    localStorage.setItem('empresas', JSON.stringify(empresas));
  }, [empresas]);

  return (
    <Container>
      <h1>Cadastro de Empresa</h1>
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Nome da empresa"/>
        <button onClick={cadastrarEmpresa}>Cadastrar</button>
      </form>

    </Container>
  );
}