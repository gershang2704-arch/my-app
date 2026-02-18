import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { DarkModeContext } from '../App';

function Navigation() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="navbar-dark nav-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold brand-text">
          <span className="brand-icon">👨‍💻</span> Gershan's Portfolio
        </Navbar.Brand>
        <div className="d-flex align-items-center ms-auto gap-3">
          <button 
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle dark mode"
            aria-pressed={darkMode}
          >
            {darkMode ? (
              <span className="visually-hidden">Light mode</span>
            ) : (
              <span className="visually-hidden">Dark mode</span>
            )}
            {darkMode ? (
              <i className="fas fa-sun" style={{color: 'var(--text-primary)'}}></i>
            ) : (
              <i className="fas fa-moon" style={{color: 'var(--text-primary)'}}></i>
            )}
          </button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom contact-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
