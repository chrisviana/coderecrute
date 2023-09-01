import { createContext, useContext, useState } from "react"

const CicloContext = createContext({})


export function NovoCicloForm() {

  const { setCicloAtivo } = useContext(CicloContext)
  return <h1>Novo Ciclo Form <button onClick={() => setCicloAtivo(1)}> Alterar Ciclo</button></h1>
}

export function Contador() {
  const { cicloAtivo } = useContext(CicloContext)
  return <h1>Contador {cicloAtivo} </h1>
}

export function Home() {

    const [cicloAtivo, setCicloAtivo] = useState(0)

    return (
      <CicloContext.Provider value={{cicloAtivo, setCicloAtivo}}>
        <h1>Context</h1>
        <NovoCicloForm />
        <Contador />
      </CicloContext.Provider>
    )
}