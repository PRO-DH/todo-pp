import React from "react";
// 라우팅에 사용할 라이브러리
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";


const AppRouter = () => {
  
    return (
        <Routes>
            {/* '/' 경로로 요청하면 App 컴포넌트를 랜더링하세요*/}
            <Route path="/" element={<App />} />
            {/* path 뒤에 경로 url을 적고 element뒤에 컴포넌트를 적으면 된다.
                예를 들어 path="/login"으로 login page를 요청하고 element={<Login />}으로 
                login 컴포넌트를 만들어서 불러온다.  */}
            <Route path="/login" element={<Login />} />
        </Routes>
    );

};

export default AppRouter;