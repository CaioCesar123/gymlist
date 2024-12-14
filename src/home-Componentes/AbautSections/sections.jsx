import React from "react";
import "./sections.css";

function Sections() {
    return (
        <div id="sections">
            <div className="section">
                <div id="topsectio" className="text-container">
                    <h2>Planeje e organize sua rotina na academia com o GymList</h2>
                    <h2>acompanhando exercícios, nutrição e hidratação de forma prática.</h2>
                </div>
            </div>
            <div className="section">
                <div id="midsectio" className="text-container">
                    <h2>Explore ferramentas práticas para gerenciar seu treino,</h2>
                    <h2>sua hidratação e sua alimentação, tudo em um só lugar.</h2>
                </div>
            </div>
            <div className="section">
                <div className="text-container">
                    <h2>Junte-se ao nosso grupo e deixe-nos ajudar você a organizar suas atividades.</h2>
                    <h2>É totalmente gratuito!</h2>
                </div>
            </div>
        </div>
    );
}

export default Sections;
