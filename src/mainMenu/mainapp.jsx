import React, { useState } from 'react';
import './mainapp.css';
import CreateList from './exercisesList/exercisesCreate';
import Progress from './progress/exercisesProgress';

function MainPage() {
  const [activeSection, setActiveSection] = useState('Registrar');

  const centerSquareStyles = {
    width: '100vw',
    height: '95vh',
    backgroundColor: '#ffffff',
    border: '2px solid #000000',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  const layoutStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    gap: '10px',
    flexDirection: 'column',
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Gym List</div>
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => handleNavigation('Progresso')}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  Progresso
                </a>
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => handleNavigation('Registrar')}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  Registrar
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logado como:</div>
              Usuário Teste
            </div>
          </nav>
        </div>
        <div className="layoutSidenav_content">
          <main className="styleBackGround">
            <div className="box-container">
              <div className="container-fluid">
                <div className="box">
                  {activeSection === 'Registrar' && <CreateList />}
                  {activeSection === 'Progresso' && <Progress />}
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2023
                </div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
