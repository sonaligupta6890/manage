import React from 'react';
import Layout from './components/Layout';
import Row from './react-bootstrap/Row';
import Col from './react-bootstrap/Col';
import Form from './react-bootstrap/pages/Form';


function HorizontalExample(){
    return(
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

    )
}