import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay, Title, Close, Button } from './styles';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

export function ModalVagas( { getVagas, editVaga }) {

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (editVaga) {
      setTitulo(editVaga.title);
      setDescricao(editVaga.description)
    }
  }, [editVaga])

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NDQyMzA0NSwiaWF0IjoxNjg0NDIzMDQ1fQ.3GDYc4YE0FhkUqz1vEaMAfASfbJbJll76yDt-h93fNo"
  const handleSave = (event) => {
    event.preventDefault();
   
    if (titulo === "") {
      return toast.warning("Titulo é um campo obrigatorio")
    }

    const formData = {
      title: titulo,
      description: descricao
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    if (editVaga) {
      axios.patch(`https://code-recrute.onrender.com/vacancies/${editVaga.id}`, formData, config)
      .then(() => {
        toast.success("Vaga atualizada com sucesso")
        if (getVagas) {
          getVagas()
        }

        handleClose()
      })
    } else {
        axios
        .post("https://code-recrute.onrender.com/vacancies", formData, config)
        .then(() => {
          toast.success(`Vaga ${titulo} cadastrada com sucesso`)
          if (getVagas) {
            getVagas()
          }
          setTitulo("")
          setDescricao("")
          handleClose()
        })
        .catch((error) => {
          console.log(error)
        })
    }

   
  }

  function handleClose() {
    document.getElementById("closeModal").click()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content >
        <Close asChild>
          <button id="closeModal" aria-label="Close">
            x
          </button>
        </Close>
        <form>
          <Title>Cadastrar Vaga</Title>
          <input 
            type="text"
            placeholder='Título'
            onChange={(e) => setTitulo(e.target.value)}
            value={titulo} 
          />
          <textarea 
            placeholder='Descrição'
            rows={10} 
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao} 
          />
        <Button onClick={handleSave}>{editVaga ? "Salvar" : "Cadastrar"}</Button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
