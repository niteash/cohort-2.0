import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./features/auth/Pages/LoginForm";
import RegisterForm from "./features/auth/Pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
