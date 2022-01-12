import React from 'react'
import { Button,Card, Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '../img/navbar/doctor.svg'

function CardListPatientDoctor() {
    return (
        <div>
            <Container> 
                <Row>
                    <div class="d-flex bd-highlight">
                        <div class="p-2 bd-highlight"><h3>Patient Lists</h3></div>
                    
                        <div class="ms-auto p-2 bd-highlight">
                            <InputGroup className="mb-3" size="sm" style={{width: '300px'}}>
                                <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                Search
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </Row>
                    
                <Row>
                    <div className='d-flex justify-content-center mt-5'>
                        <Card style={{ padding: '30px' }}>
                            <Card.Title>Patient</Card.Title>
                            <Card style={{ marginBottom: '10px', overflowX : "auto" }}>
                                <Card.Body  style={{ overflowX : "auto" }}>
                                    <div class="d-flex bd-highlight">
                                        <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "24px"}}/></div>
                                        <div class="p-2 bd-highlight" style={{ width: '58px' }}><div>Ralph</div></div>
                                        <div class="p-2 bd-highlight" style={{ width: '102px' }}><div>32 Years old</div></div>
                                        <div class="p-2 bd-highlight" style={{ width: '130px' }}><div>710481048018</div></div>
                                        <div class="ms-auto p-2 bd-highlight"><Link to="/medical-record"><Button variant="info" size="sm">Patient Record</Button></Link></div>
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
                                        <div class="ms-auto p-2 bd-highlight"><Link to="/medical-record"><Button variant="info" size="sm">Patient Record</Button></Link></div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Card>
                    </div>
                </Row>
            </Container>

           
        </div>
    )
}

export default CardListPatientDoctor
