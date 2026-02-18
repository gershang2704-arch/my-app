import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';

function SubmissionSuccess({ formData }) {
  return (
    <Container className="py-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Alert variant="success" className="p-4 shadow-sm" role="alert">
            <h3 className="alert-heading mb-3">✓ Thank You, {formData.name}!</h3>
            <p className="mb-0">
              Your message has been sent successfully. We have received your message with the following details:
            </p>
            <hr />
            <div className="mt-3">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Message:</strong></p>
              <p className="bg-light p-3 rounded">{formData.message}</p>
            </div>
            <p className="mb-0 mt-3 text-muted">
              We will get back to you as soon as possible. Thank you for reaching out!
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default SubmissionSuccess;
