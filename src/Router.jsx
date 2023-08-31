import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/LoginAdmin";
import { ConsultaVagas } from "./pages/ConsultaVagas";
import { DefaultLayout } from "./layout/default";
import { ConsultaEmpresas } from "./pages/ConsultaEmpresas";
import { CadastroEmpresa } from "./pages/CadastroEmpresas";
import { Home } from "./pages/Home";
import { LayoutCandidato } from "./layout/layoutCandidato";
import { LoginCandidato } from "./pages/LoginCandidato";
import { Dashboard } from "./pages/Dashboard";
import { CadastroCandidato } from "./pages/CadastroCandidato";
import { SobreVaga } from "./pages/SobreVaga";

export function Router() {
  function PriveteRoute({ children }) {
    const token = sessionStorage.getItem("@token");
    return token ? <>{children}</> : <Navigate to="/" />;
  }

  return (
    <Routes>

      <Route path="/login" element={<LoginCandidato />} />
      <Route element={<LayoutCandidato />}>
        <Route path="/"  element={<Home />} />
        <Route path="/vaga/:id" element={<SobreVaga />} />
        <Route path="/cadidato/dashboard" element={<Dashboard />} />
        <Route path="/cadidato/cadastro" element={<CadastroCandidato />} />
      </Route>
      

      <Route path="/admin" element={<Login />} />
      <Route
        path="/admin/app"
        element={
          <PriveteRoute>
            <DefaultLayout />
          </PriveteRoute>
        }
      >
        <Route path="/admin/app/consulta-vagas" element={<ConsultaVagas />} />
        <Route
          path="/admin/app/consulta-empresas"
          element={<ConsultaEmpresas />}
        />
        <Route
          path="/admin/app/cadastro-empresas"
          element={<CadastroEmpresa />}
        />
        <Route
          path="/admin/app/cadastro-empresas/:id"
          element={<CadastroEmpresa />}
        />
      </Route>
    </Routes>
  );
}
