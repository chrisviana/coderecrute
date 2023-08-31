import { Outlet } from "react-router-dom";
import { Header } from "../components/Candidato/Header";


export function LayoutCandidato() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}