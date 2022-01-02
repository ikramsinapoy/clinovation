import {React,useState} from "react";
import {Form,Button, Row, Col,InputGroup} from "react-bootstrap"

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
      <div className="cardForm">
        <Form noValidate validated={validated} onSubmit={handleSubmit} >
          {/* <Row className="mb-3"> */}
          <Form.Group as={Col} md="6" controlId="validationCustom03" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
          {/* </Row> */}
          {/* <Row className="mb-3"> */}
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <br/>
          {/* </Row>     */}
          <Button type="submit">Login</Button>
        </Form>
      </div>
      
    );
  }
export default FormExample
