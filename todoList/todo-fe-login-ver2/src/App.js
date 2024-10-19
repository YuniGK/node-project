import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      {/* 로그인 되어, 토큰이 있는 유저만 접속이 가능한 페이지 
      Protected Route / Private Route 필요

      https://medium.com/@duchanjo/react-router-protected-route-a7d40491045f
      https://medium.com/@bhairabpatra.iitd/private-routes-in-react-559a7d8d161f
      */}
      <Route path="/" element={<PrivateRoute><TodoPage /></PrivateRoute>} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
