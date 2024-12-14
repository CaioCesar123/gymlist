import React from "react";
import Navbar from "./home-Componentes/NavBar/navbar";
import LandPage from "./home-Componentes/LandPage/landpage";
import Sections from "./home-Componentes/AbautSections/sections";
import Register from "./home-Componentes/RegisterSection/register";

function HomePage() {
  return (
    <div>
      <Navbar />
      <LandPage />
      <Sections />
      <Register />
    </div>
  );
}

export default HomePage;
