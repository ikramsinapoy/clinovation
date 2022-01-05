import React from 'react'
import { Button,InputGroup,FormControl, Container, Row } from 'react-bootstrap'
import CardMedstaffList from './components/CardMedstaffList'
import CardPatientList from './components/CardPatientList'
import Navbar from './components/Navbar'

function ListMedicalStaff() {
    return (
        <div>    
            <Row>
                <Navbar/> 
            </Row>

            <Row>
                <Container>
                    
                    <Row>
                        <div class="d-flex bd-highlight">
                            <div class="p-2 bd-highlight"><h3>Medical Staff Lists</h3></div>
                        
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
                        <div class="d-flex justify-content-center">
                            <CardPatientList/>
                        </div>   
                    </Row>
                </Container>      
            </Row>
        </div>
    )
}

export default ListMedicalStaff
