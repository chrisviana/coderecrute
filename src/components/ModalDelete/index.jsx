import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, Close, Title, Button, Options } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

export function ModalDelete({ vaga, id, getVagas }) {

  const closeModal = () => {
    document.getElementById("closeModal").click();
  };

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NDQyMzA0NSwiaWF0IjoxNjg0NDIzMDQ1fQ.3GDYc4YE0FhkUqz1vEaMAfASfbJbJll76yDt-h93fNo"


  const handleDeleteItem = id => {
    axios.delete(`https://code-recrute.onrender.com/vacancies/${id}`,  {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
       toast.success('Vaga deletada com sucesso');
        if (getVagas) {
          getVagas()
        }
        closeModal()
      })
      .catch(error => {
        console.error('Erro ao deletar item:', error);
      });
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
      <Close asChild>
          <button id="closeModal" aria-label="Close">
            x
          </button>
        </Close>
        <Title>
          Deseja realmente excluir a vaga de {vaga} ?
        </Title>
        <Options>
          <Button yes onClick={() => handleDeleteItem(id)}>
            Sim
          </Button>
          <Button onClick={closeModal}>Não</Button>
        </Options>
      </Content>
    </Dialog.Portal>
  );
}