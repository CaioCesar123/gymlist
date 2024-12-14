import React from 'react';

function RegisterSection({ setIsRegistering }) {
  const handleRegister = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = {
      username,
      email,
      password,
    };

    sessionStorage.setItem('currentUser', JSON.stringify(user));

    alert('Usuário cadastrado com sucesso!');
    console.log('Usuário cadastrado:', user);
  };

  return (
    <div className="formLogin-container">
      <h1 className="loginStyle">Welcome</h1>
      <p className="loginStyle-subtitle">Crie aqui a sua conta.</p>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="button-container">
          <button type="submit" className="singinButton">
            Cadastrar
          </button>
          <button
            type="button"
            className="registerButton"
            onClick={() => setIsRegistering(false)}
          >
            Retornar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterSection;
