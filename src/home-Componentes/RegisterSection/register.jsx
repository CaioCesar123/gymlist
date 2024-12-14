import React from 'react';
import './register.css';

function register() {
  return (
    <footer id='register' className="register">
      <div className="register-content">
        <h3>Curtiu? Crie sua lista agora e dê o primeiro passo para entrar em forma!</h3>
        <a href="/login" className="register-button">Vamos Começar ?</a>
      </div>
    </footer>
  );
}

export default register