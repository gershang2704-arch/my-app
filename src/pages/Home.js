import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="hero-content">
                <h1 className="hero-title mb-4">
                  Hi, I'm <span className="text-primary">Gershan Carl G. Bon</span>
                </h1>
                <p className="hero-subtitle mb-4">
                  3rd Year IT Student | Web Developer | Tech Enthusiast
                </p>
                <p className="hero-description mb-4">
                  <strong>Age:</strong> 21 years old<br/>
                  <strong>School:</strong> Pamantasan ng Cabuyao<br/>
                  Welcome to my portfolio! I'm passionate about web development and creating innovative digital solutions. 
                  I'm continuously learning and growing my skills with expertise in React, JavaScript, and modern web technologies.
                </p>
                <p className="hero-description mb-4">
                  <strong>Career Goal:</strong> To become a skilled full-stack developer and contribute to meaningful projects. 
                  I aim to master modern web development frameworks and best practices while collaborating with talented teams.
                </p>
                <div className="hero-buttons">
                  <Button 
                    as={Link} 
                    to="/projects" 
                    size="lg" 
                    className="btn-hero me-3"
                  >
                    View My Work
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    size="lg" 
                    variant="outline-primary"
                    className="btn-hero-secondary"
                  >
                    Get In Touch
                  </Button>
                </div>
                <div className="social-links mt-5">
                  <a href="https://github.com" className="social-icon" title="GitHub" rel="noreferrer" target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" className="social-icon" title="LinkedIn" rel="noreferrer" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" className="social-icon" title="Twitter" rel="noreferrer" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="mailto:your.email@example.com" className="social-icon" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="profile-image-container">
                <div className="profile-image-placeholder">
                  <img 
                    src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/586602011_1726244754711953_3360164245548093330_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGA535TAJxPZDoZ1cQbFEOBd7kvt6Yu52h3uS-3pi7naA5QppialPVNto6n16t6m5q51eveB8AzSfjqG3W8vqAS&_nc_ohc=aW_Cv86UMloQ7kNvwHLFySS&_nc_oc=AdkWDsLKEo8uLszlqOcjOINI8y0hXs-RRunUpr4Wfae5nZmEnaYAOH5r20e-3EfNhp0&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=YVCm1xpZwIdpu9OstWTlVg&oh=00_Afsgp-LM3QikQBJsGSK-RJ40eOZ0lUjtGTKM6bK-_Ja2JQ&oe=699B12E7" 
                    alt="Gershan Carl G. Bon" 
                    className="profile-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={4} className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Projects Completed</p>
            </Col>
            <Col md={4} className="stat-item">
              <h3 className="stat-number">30+</h3>
              <p className="stat-label">Happy Clients</p>
            </Col>
            <Col md={4} className="stat-item">
              <h3 className="stat-number">5+</h3>
              <p className="stat-label">Years Experience</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quick Links Section */}
      <section className="quick-section py-5">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="quick-card text-center p-4">
                <div className="quick-icon mb-3">
                  <i className="fas fa-code fa-3x text-primary"></i>
                </div>
                <h5>Clean Code</h5>
                <p className="text-muted">Writing maintainable and efficient code following best practices</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="quick-card text-center p-4">
                <div className="quick-icon mb-3">
                  <i className="fas fa-mobile-alt fa-3x text-primary"></i>
                </div>
                <h5>Responsive Design</h5>
                <p className="text-muted">Creating beautiful interfaces that work seamlessly across all devices</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="quick-card text-center p-4">
                <div className="quick-icon mb-3">
                  <i className="fas fa-rocket fa-3x text-primary"></i>
                </div>
                <h5>High Performance</h5>
                <p className="text-muted">Optimizing applications for speed and delivering exceptional user experience</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
