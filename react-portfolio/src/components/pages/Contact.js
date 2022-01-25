import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default function Contact() {
  return (
  <Form className='m-5'>
    <Form.Group className="mb-3" controlId="Name">
      <Form.Label>Name:</Form.Label>
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="Email">
      <Form.Label>Email address:</Form.Label>
       <Form.Control type="email" placeholder="name@example.com" />
     </Form.Group>
    <Form.Group className="mb-3" controlId="Message">
      <Form.Label>Message</Form.Label>
       <Form.Control as="textarea" rows={3} />
    </Form.Group>
    <Button>Submit</Button>
  </Form>
  );
}
