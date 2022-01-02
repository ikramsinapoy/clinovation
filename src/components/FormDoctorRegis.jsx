import {React,useState} from "react";
import {Form,Button, Row, Col} from "react-bootstrap"
import Medstaff from "../img/health-care.svg"

function FormDoctorRegis() {
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
      <div >
        <Row >
          <Col md={6} className="m-auto">
            <h5><img src={Medstaff} style={{height: "36px", marginRight:"10px"}}/>Doctor Register</h5>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <div className="cardForm">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    Name
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="name" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid name.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    NIK
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="text" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid NIK.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    Email
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="email" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    DOB
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="text" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid Date of Birth.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    Sex
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="text" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid sex.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    Contact
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="phone" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid number.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column md="2">
                    Password
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="password" placeholder="Password" required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    Specialist
                  </Form.Label>
                  <Col md="10">
                    <Form.Select aria-label="Default select example">
                      <option disabled>Specialist</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                    {/* <Form.Control type="text" required/> */}
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid specialist.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                  <Form.Label column md="2">
                    Work Experience
                  </Form.Label>
                  <Col md="10">
                    <Form.Control type="text" required/>
                    <Form.Control.Feedback type="invalid" >
                        Please provide a valid work experience.
                      </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </div>
            
              <div className="m-auto">
                <Button type="submit" >Register</Button>
              </div>
              
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
export default FormDoctorRegis