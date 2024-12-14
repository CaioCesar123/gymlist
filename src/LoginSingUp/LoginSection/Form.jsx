import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Form({ isRegistering, setIsRegistering }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignIn = () => {
    // Recupera o usuário salvo no sessionStorage
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (currentUser) {
      // Verifica se as credenciais são válidas
      if (currentUser.email === email && currentUser.password === password) {
        alert(`Bem-vindo de volta, ${currentUser.username}!`);
        navigate("/mainApp"); // Redireciona para a aplicação principal
      } else {
        setError('E-mail ou senha incorretos.');
      }
    } else {
      setError('Nenhum usuário encontrado. Por favor, registre-se.');
    }
  };

  return (
    <div className="formLogin-container">
      <h1 className='loginStyle'>Welcome Back</h1>
      <p className='loginStyle-subtitle'>Please enter your details to continue.</p>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="button-container">
        <button className='singinButton' onClick={handleSignIn}>Sign In</button>
        <button className='registerButton' onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Voltar para Login' : 'Ir para Registro'}
        </button>
      </div>
    </div>
  );
}

export default Form;
