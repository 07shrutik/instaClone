// import  from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
// import Sidebar from "./components/login/sideBar/Sidebar";
import UserPage from "./UserPage";
import "./App.css";
// import { useEffect } from "react";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
