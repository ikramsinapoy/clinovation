import React from 'react'
import { Button,Card, Col, Container, Row } from 'react-bootstrap'
import Avatar from '../img/navbar/doctor.svg'
import patientvisit from '../img/patientvisit.svg'
import aidkit from '../img/firstaidkit.svg'

function CardDashboardDoctor() {
    return (
        <div>
            <Container>
                <div className='d-flex justify-content-center'>
                    <Row className="g-4">
                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Patient Treated <img src={aidkit} style={{ width: '24px' }}/></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Today</Card.Subtitle>
                                    <Card.Text>
                                    20 Patients
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col>
                            <Card style={{ width: '16rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Patient Visits <img src={patientvisit} style={{ width: '24px' }}/></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Today</Card.Subtitle>
                                    <Card.Text>
                                    20 Patients
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                
                <div className='d-flex justify-content-center mt-5'>
                <Card style={{ padding: '30px' }}>
                    <Card.Title>Patient</Card.Title>
                    <Card style={{ marginBottom: '10px' }}>
                        <Card.Body>
                            <div class="d-flex bd-highlight">
                                <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "24px"}}/></div>
                                <div class="p-2 bd-highlight" style={{ width: '58px' }}><div>Ralph</div></div>
                                <div class="p-2 bd-highlight" style={{ width: '102px' }}><div>32 Years old</div></div>
                                <div class="p-2 bd-highlight" style={{ width: '130px' }}><div>710481048018</div></div>
                                <div class="ms-auto p-2 bd-highlight"><Button variant="info" size="sm">Patient Record</Button></div>
                                <div class="ms-auto p-2 bd-highlight"><Button variant="warning" size="sm">Done</Button></div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <div class="d-flex bd-highlight">
                                <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "24px"}}/></div>
                                <div class="p-2 bd-highlight" style={{ width: '58px' }}><div>Ralph</div></div>
                                <div class="p-2 bd-highlight" style={{ width: '102px' }}><div>32 Years old</div></div>
                                <div class="p-2 bd-highlight" style={{ width: '130px' }}><div>710481048018</div></div>
                                <div class="ms-auto p-2 bd-highlight"><Button variant="info" size="sm">Patient Record</Button></div>
                                <div class="ms-auto p-2 bd-highlight"><Button variant="warning" size="sm">Done</Button></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Card>
                
                </div>
                
            </Container>
        </div>
    )
}

export default CardDashboardDoctor
