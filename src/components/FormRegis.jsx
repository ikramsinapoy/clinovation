import {React,useState} from "react";
import {Form,Button, Row, Col} from "react-bootstrap"

function FormExample() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="cardForm">
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>NIK</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid date.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Sex</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid sex.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="phone" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Role</Form.Label>
            <Form.Control type="number" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid role.
            </Form.Control.Feedback>
          </Form.Group>
        </Row> 
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Work Experience</Form.Label>
            <Form.Control type="string" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Work Experience.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>  
        <Button type="submit">Register</Button>
      </Form>
    );
  }
export default FormExample
