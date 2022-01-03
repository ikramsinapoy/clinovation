import React from 'react'
import {Container, Row, Col, Button} from "react-bootstrap"
import ListPrescription from './components/ListPrescription'

function Prescription() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}><h2>Prescription</h2></Col>
                    <Col md={{ span: 4, offset: 4 }}>dr. Alex</Col>
                </Row>
                <Row>
                    <Col ><Button variant="success">Add Prescription</Button></Col>
                </Row>
                <Row>
                    <Col><ListPrescription/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Prescription
