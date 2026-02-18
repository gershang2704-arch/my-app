import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light mt-5">
      <Container>
        <Row className="py-5">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Gershan's Portfolio</h5>
            <p className="text-muted">
              A 3rd year IT student from Pamantasan ng Cabuyao, passionate about web development and creating innovative digital solutions.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-muted text-decoration-none">About</a></li>
              <li><a href="/projects" className="text-muted text-decoration-none">Projects</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="fw-bold mb-3">Follow Me</h5>
            <div className="social-icons">
              <a href="https://github.com" className="social-footer-icon me-3" title="GitHub" rel="noreferrer" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" className="social-footer-icon me-3" title="LinkedIn" rel="noreferrer" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" className="social-footer-icon me-3" title="Twitter" rel="noreferrer" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:your.email@example.com" className="social-footer-icon" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="border-top border-secondary pt-4">
          <Col md={6}>
            <p className="text-muted mb-0">
              © {currentYear} Gershan Carl G. Bon. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-muted mb-0">
              Designed & Built with <span className="text-danger">❤</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
