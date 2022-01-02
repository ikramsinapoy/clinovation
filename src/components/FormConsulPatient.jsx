import {React,useState} from "react";
import {Form,Button, Row, Col, Table} from "react-bootstrap"
import Medstaff from "../img/health-care.svg"

function FormConsulPatient() {
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
                            <h5>Patient New Medical History</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={8} />
                            </Form.Group>

                            <h5>Patient Consultation</h5>
                            <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={8} />
                            </Form.Group>
                        </div>
                        <h5>Doctor Schedule</h5>
                        <div style={{borderTop : "2px solid black", padding : "10px"}}></div>
                        <div>
                            <Table responsive="sm">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Specialist</th>
                                    <th>Work Hour</th>
                                    <th>Sum Queue</th>
                                    <th>Choose</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <Button type="submit" variant="success">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default FormConsulPatient
