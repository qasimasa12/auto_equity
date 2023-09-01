import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Leads_avalible from "./page/Leads_avalible";
import Leads_avalible_open from "./page/Leads_avalible_open";
import Leads_success from "./page/Leads_success";
import Dashboard from "./page/Dashboard";
import Leads_reject from "./page/Leads_reject";
import Report from "./page/Report";
import Stock from "./page/Stock";
import Stock_open from "./page/Stock_open";
import Setting_profile from "./page/Setting_profile";
import Setting_link from "./page/Setting_link";
import Setting_stock from "./page/Setting_stock";
import Setting_customer from "./page/Setting_customer";
import Leads from "./page/Leads";
import Login from "./page/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:token" element={<PasswordReset />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Leads_avalible" element={<Leads_avalible />} />
          <Route path="/Leads_success" element={<Leads_success />} />
          <Route path="/Leads_reject" element={<Leads_reject />} />
          <Route path="/Stock" element={<Stock />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Leads_avalible_open" element={<Leads_avalible_open />} />
          <Route path="/Stock_open" element={<Stock_open />} />
          <Route path="/Setting_profile" element={<Setting_profile />} />
          <Route path="/Setting_link" element={<Setting_link />} />
          <Route path="/Setting_stock" element={<Setting_stock />} />
          <Route path="/Setting_customer" element={<Setting_customer />} />
          <Route path="/Leads" element={<Leads />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;