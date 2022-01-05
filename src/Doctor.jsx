import React from 'react'
import FormUpdateProfileDoctor from './components/FormUpdateProfileDoctor'
import CardDashboardDoctor from './components/CardDashboardDoctor'
import { Container,Col, Row } from 'react-bootstrap'
import doctorIcon from './img/navbar/doctor.svg'
import Navbar from './components/NavbarDoctor'
import { Link } from 'react-router-dom'


function Doctor() {
    return (
        <div>
            <Row>
                <Col md="1">
                    <Navbar/>
                </Col>
                
                <Col md="11">
                    <Container className='mt-2'>
                        <div className="d-flex justify-content-end">
                            <div className='d-flex flex-row'>
                                <Link to="/update-profile">
                                    <img src={doctorIcon} style={{height : "36px"}}/>
                                </Link>
                                
                                <h6 className="p-2">dr.Morris</h6>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <CardDashboardDoctor/>
                        </div>
                        
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Doctor
