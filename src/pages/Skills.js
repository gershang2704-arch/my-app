import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function Skills() {
  const technicalSkills = [
    { name: 'JavaScript', level: 85, icon: 'fab fa-js-square' },
    { name: 'React', level: 80, icon: 'fab fa-react' },
    { name: 'CSS/HTML5', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
    { name: 'Git/GitHub', level: 80, icon: 'fab fa-github' },
    { name: 'Responsive Design', level: 85, icon: 'fas fa-mobile-alt' }
  ];

  const softSkills = [
    'Communication',
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Critical Thinking',
    'Time Management'
  ];

  const tools = [
    'VS Code',
    'Git',
    'Figma',
    'Postman',
    'Docker',
    'AWS'
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">My Skills</h1>
        <p className="lead text-muted">
          A comprehensive overview of my technical expertise and professional capabilities
        </p>
      </div>

      {/* Technical Skills */}
      <Row className="mb-5">
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body>
              <h5 className="card-title fw-bold mb-4">
                <i className="fas fa-code text-primary me-2"></i>Technical Skills
              </h5>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <i className={`${skill.icon} text-primary me-2`}></i>
                      <strong>{skill.name}</strong>
                    </div>
                    <span className="badge bg-primary">{skill.level}%</span>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    className="skill-progress"
                    animated
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Soft Skills and Tools */}
      <Row className="g-4">
        <Col lg={6}>
          <Card className="h-100 border-0 shadow-sm card-hover">
            <Card.Body>
              <h5 className="card-title fw-bold mb-4">
                <i className="fas fa-lightbulb text-warning me-2"></i>Soft Skills
              </h5>
              <div className="row g-3">
                {softSkills.map((skill, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="skill-badge">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="h-100 border-0 shadow-sm card-hover">
            <Card.Body>
              <h5 className="card-title fw-bold mb-4">
                <i className="fas fa-tools text-info me-2"></i>Tools & Technologies
              </h5>
              <div className="row g-3">
                {tools.map((tool, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="tool-badge">
                      <i className="fas fa-cube text-info me-2"></i>
                      {tool}
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Expertise Areas */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm bg-light">
            <Card.Body>
              <h5 className="card-title fw-bold mb-4">
                <i className="fas fa-star text-warning me-2"></i>Areas of Expertise
              </h5>
              <Row className="g-4">
                <Col md={3}>
                  <div className="expertise-item">
                    <h6 className="fw-bold">Frontend Development</h6>
                    <p className="text-muted small">React, Vue, Responsive Design</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="expertise-item">
                    <h6 className="fw-bold">Backend Development</h6>
                    <p className="text-muted small">Node.js, Express, APIs</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="expertise-item">
                    <h6 className="fw-bold">Database Design</h6>
                    <p className="text-muted small">MongoDB, PostgreSQL, Firebase</p>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="expertise-item">
                    <h6 className="fw-bold">DevOps & Deployment</h6>
                    <p className="text-muted small">Docker, AWS, Vercel, Heroku</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
