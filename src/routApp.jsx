import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginSingUp/LoginPage";
import HomePage from './homePage';
import MainPage from "./mainMenu/mainapp";

function App() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mainApp" element={<MainPage />} />
    </Routes>
  );
}

export default App;
