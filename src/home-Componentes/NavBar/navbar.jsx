import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">GymList</div>
            <ul className="navbar-links">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#sections">Sobre</a>
                </li>
                <li>
                    <a href="#register">Comece Agora</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
