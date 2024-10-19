import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async() => {
    try {
      //토큰값 읽어오기
      const storedToken = sessionStorage.getItem('token');

      //토큰이 있는지 확인하여 이미 토큰이 있을 경우 토큰을 넣어준다.
      if(storedToken){
        
      }

      //토큰을 통해 유저정보를 가져온다.
      const response = api.get("/user/me");
    } catch (error) {
      
    }
  }

  //페이지가 불러왔을때 토큰을 확인하여 보여줄 페이지를 정한다.
  useEffect(()=>{
    getUser();
  }, []);

  return (
    <Routes>
      {/* 로그인 되어, 토큰이 있는 유저만 접속이 가능한 페이지 
      Protected Route / Private Route 필요

      https://medium.com/@duchanjo/react-router-protected-route-a7d40491045f
      https://medium.com/@bhairabpatra.iitd/private-routes-in-react-559a7d8d161f
      */}
      <Route path="/" element={
        <PrivateRoute>
          {/* todopage는 PrivateRoute의 children이다.*/}
          <TodoPage user={user} />
        </PrivateRoute>} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;