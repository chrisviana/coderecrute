import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { ConsultaVagas } from "./pages/ConsultaVagas";
import { DefaultLayout } from "./layout/default";
import { ConsultaEmpresas } from "./pages/ConsultaEmpresas";
import { CadastroEmpresa } from "./pages/CadastroEmpresas";

export function Router() {
  function PriveteRoute({ children }) {
    const token = sessionStorage.getItem("@token");
    return token ? <>{children}</> : <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PriveteRoute>
            <DefaultLayout />
          </PriveteRoute>
        }
      >
        <Route path="/admin/consulta-vagas" element={<ConsultaVagas />} />
        <Route path="/admin/consulta-empresas" element={<ConsultaEmpresas />} />
        <Route path="/admin/cadastro-empresas" element={<CadastroEmpresa />} />
        <Route path="/admin/cadastro-empresas/:id" element={<CadastroEmpresa />} />
        
      </Route>
    </Routes>
  );
}
