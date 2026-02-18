import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">About Me</h1>
        <p className="lead text-muted">Getting to know Gershan Carl G. Bon</p>
      </div>

      {/* Profile Section */}
      <Row className="align-items-center mb-5">
        <Col lg={4} className="text-center mb-4 mb-lg-0">
          <div className="about-image-container">
            <img 
              src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/586602011_1726244754711953_3360164245548093330_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGA535TAJxPZDoZ1cQbFEOBd7kvt6Yu52h3uS-3pi7naA5QppialPVNto6n16t6m5q51eveB8AzSfjqG3W8vqAS&_nc_ohc=aW_Cv86UMloQ7kNvwHLFySS&_nc_oc=AdkWDsLKEo8uLszlqOcjOINI8y0hXs-RRunUpr4Wfae5nZmEnaYAOH5r20e-3EfNhp0&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=YVCm1xpZwIdpu9OstWTlVg&oh=00_Afsgp-LM3QikQBJsGSK-RJ40eOZ0lUjtGTKM6bK-_Ja2JQ&oe=699B12E7"     
              alt="Gershan Carl G. Bon" 
              className="about-image"
            />
          </div>
        </Col>
        <Col lg={8}>
          <h3 className="fw-bold mb-3">Who Am I?</h3>
          <p className="mb-3">
            Hello! I'm <strong>Gershan Carl G. Bon</strong>, a 21-year-old Information Technology student currently in my 3rd year 
            at Pamantasan ng Cabuyao. I'm a passionate web developer with a strong interest in creating innovative digital solutions 
            and learning cutting-edge technologies.
          </p>
          <p className="mb-3">
            My journey in tech started with a curiosity about how websites and applications work. This evolved into a serious passion 
            for web development, where I spend most of my time learning JavaScript, React, and modern web frameworks. I enjoy solving 
            complex problems and turning ideas into functional, user-friendly applications.
          </p>
          <p className="mb-3">
            I'm currently focusing on full-stack development and continuously improving my skills. I believe in continuous learning 
            and staying updated with industry trends and best practices.
          </p>
          <p>
            When I'm not coding or studying, I enjoy exploring new technologies, playing video games, and spending time with friends and family. 
            I'm an outdoor enthusiast who loves hiking and discovering new places. I also enjoy reading tech blogs and learning from communities.
          </p>
        </Col>
      </Row>

      {/* Details Grid */}
      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm card-hover">
            <Card.Body>
              <h5 className="card-title fw-bold mb-3">
                <i className="fas fa-graduation-cap text-primary me-2"></i>Education
              </h5>
              <p className="card-text">
                <strong>Currently:</strong> 3rd Year IT Student at Pamantasan ng Cabuyao<br/>
                <strong>Age:</strong> 21 years old<br/>
                Specialized coursework in web development, databases, and software engineering. 
                Actively pursuing online courses and certifications in React, Node.js, and modern web technologies.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm card-hover">
            <Card.Body>
              <h5 className="card-title fw-bold mb-3">
                <i className="fas fa-briefcase text-primary me-2"></i>Experience
              </h5>
              <p className="card-text">
                Student developer with hands-on experience in web development projects through academic coursework. 
                Working on personal projects to build a strong portfolio. Expertise developing in React, JavaScript, 
                and modern web frameworks.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm card-hover">
            <Card.Body>
              <h5 className="card-title fw-bold mb-3">
                <i className="fas fa-heart text-primary me-2"></i>Hobbies & Interests
              </h5>
              <p className="card-text">
                Web development, gaming, outdoor activities, hiking, and exploring new places. 
                I'm passionate about open-source contribution, reading tech blogs, and staying updated with emerging technologies. 
                Always excited about learning something new!
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm card-hover">
            <Card.Body>
              <h5 className="card-title fw-bold mb-3">
                <i className="fas fa-target text-primary me-2"></i>Career Goals
              </h5>
              <p className="card-text">
                To become a skilled full-stack developer and contribute to meaningful projects that make a positive impact. 
                I aim to master modern web development frameworks, best practices, and collaborate with talented teams 
                in the tech industry.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Fun Facts */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm bg-light">
            <Card.Body>
              <h5 className="card-title fw-bold mb-3">
                <i className="fas fa-star text-warning me-2"></i>Quick Facts About Me
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">✓ 3rd Year IT Student at Pamantasan ng Cabuyao</li>
                <li className="mb-2">✓ Passionate about React and modern web development</li>
                <li className="mb-2">✓ Love coffee and midnight coding sessions</li>
                <li className="mb-2">✓ Outdoor enthusiast who enjoys hiking and exploring</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
