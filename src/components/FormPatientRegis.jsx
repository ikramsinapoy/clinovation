import {React,useState} from "react";
import {Form,Button, Row, Col} from "react-bootstrap"
import Medstaff from "../img/health-care.svg"

function FormPatientRegis() {
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
        <div>
            <Row>
                <Col md={6} className="m-auto formRegis-container">
                    <h5><img src={Medstaff} style={{height: "36px", marginRight:"10px"}}/>Patient Register</h5>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <div className="cardForm">
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Name
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="name" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid name.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            NIK
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid NIK.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            DOB
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid Date of Birth.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Sex
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid sex.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Address
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="text" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid address.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Height
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="number" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid height.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Weight
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="number" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid weight.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Martial Status
                        </Form.Label>
                        <Col md="9">
                            <Form.Select aria-label="Default select example">
                            <option disabled>Specialist</option>
                            <option value="1">One</option>
                            <option value="3">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid specialist.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column md="3">
                            Contact
                        </Form.Label>
                        <Col md="9">
                            <Form.Control type="phone" required/>
                            <Form.Control.Feedback type="invalid" >
                                Please provide a valid number.
                            </Form.Control.Feedback>
                        </Col>
                        </Form.Group>

                        <div style={{borderTop : "2px solid black", padding : "10px"}}></div>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Patient Medical Record</Form.Label>
                            <Form.Control as="textarea" rows={8} />
                        </Form.Group>
                    </div>

                    <Button type="submit" >Register</Button>
                    </Form>
                    <a href="#"><div style={{ color: "black" }}>Already have an account?Login</div></a>
                </Col>
            </Row>
        </div>
    )
}

export default FormPatientRegis
