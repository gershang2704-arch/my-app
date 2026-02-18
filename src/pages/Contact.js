import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import SubmissionSuccess from '../component/SubmissionSuccess';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return <SubmissionSuccess formData={formData} />;
  }

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
        <p className="lead text-muted">
          I'd love to hear from you! Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <Row>
        <Col lg={8} className="mx-auto">
          <Row className="mb-5">
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="border-0 text-center h-100 shadow-sm card-hover">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                  </div>
                  <h6 className="fw-bold">Email</h6>
                  <p className="text-muted">gershan.bon@example.com</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <Card className="border-0 text-center h-100 shadow-sm card-hover">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="fas fa-phone fa-2x text-primary"></i>
                  </div>
                  <h6 className="fw-bold">Phone</h6>
                  <p className="text-muted">+63 (XXX) XXX-XXXX</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 text-center h-100 shadow-sm card-hover">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                  </div>
                  <h6 className="fw-bold">Location</h6>
                  <p className="text-muted">Cabuyao, Philippines</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4 p-md-5">
              <h5 className="mb-4 fw-bold">Send me a Message</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label htmlFor="name"><strong>Name</strong></Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label htmlFor="email"><strong>Email</strong></Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label htmlFor="subject"><strong>Subject</strong></Form.Label>
                  <Form.Control
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label htmlFor="message"><strong>Message</strong></Form.Label>
                  <Form.Control
                    id="message"
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Enter your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" size="lg" className="w-100 btn-submit">
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
