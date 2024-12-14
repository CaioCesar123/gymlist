import React, { useState } from 'react';
import './LoginPage.css';
import LoginSection from './LoginSection/Form';
import RegisterSection from './registerSection/Register';

function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div className="login-container">
      <div className="image-box">
        <div className="row">
          {isRegistering ? (
            <RegisterSection setIsRegistering={setIsRegistering} />
          ) : (
            <LoginSection
              isRegistering={isRegistering}
              setIsRegistering={setIsRegistering}
            />
          )}
          <img
            className="image-container"
            src="./src/assets/rightSide.png"
            alt="Imagem do lado direito"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
