import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A professional portfolio website showcasing my projects, skills, and experience as a web developer. Built with React and Bootstrap for a modern, responsive design.',
      technologies: ['React', 'Bootstrap', 'React Router'],
      link: 'https://github.com'
    },
    {
      id: 2,
      title: 'Todo List Application',
      description: 'A productivity app for managing daily tasks with add, delete, and mark-as-complete functionality. Features local storage to persist tasks between sessions.',
      technologies: ['React', 'JavaScript', 'CSS3'],
      link: 'https://github.com'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that displays current weather and forecasts using a weather API. Features location-based services and responsive design for mobile devices.',
      technologies: ['React', 'Weather API', 'Responsive Design'],
      link: 'https://github.com'
    },
    {
      id: 4,
      title: 'E-Learning Platform Dashboard',
      description: 'A student dashboard for an e-learning platform showing courses, progress tracking, and assignment management. Built as a class project for IT coursework.',
      technologies: ['React', 'HTML5', 'CSS3'],
      link: 'https://github.com'
    },
    {
      id: 5,
      title: 'Random Quote Generator',
      description: 'An interactive app that displays random quotes and allows users to tweet them. Features smooth animations and a clean, minimal user interface.',
      technologies: ['React', 'API Integration', 'JavaScript'],
      link: 'https://github.com'
    },
    {
      id: 6,
      title: 'Calculator App',
      description: 'A fully functional calculator with arithmetic operations, decimal support, and error handling. Built to practice React state management and event handling.',
      technologies: ['React', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com'
    }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">My Projects</h1>
        <p className="lead text-muted">
          A collection of web development projects showcasing my skills in React, JavaScript, and modern web technologies
        </p>
      </div>

      <Row className="g-4">
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id}>
            <Card className="project-card h-100 shadow-sm border-0">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold mb-2">{project.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1 mb-3">
                  {project.description}
                </Card.Text>
                <div className="mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge bg-primary me-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline-primary" 
                  className="mt-auto"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
