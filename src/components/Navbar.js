import React from 'react'
import Logo from "../img/Logo.svg"
import Calendar from "../img/navbar/calendar.svg"
import Home from "../img/navbar/home-page.svg"
import MedicalRecord from "../img/navbar/medical-record.svg"
import User from "../img/navbar/user.svg"
import Avatar from "../img/navbar/doctor.svg"
import "../style/style.css"
import {Nav,Button,FormControl,Form,NavDropdown,Container} from 'react-bootstrap'

function Navbar() {
    return (
        <div>
            {/* <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <div>
                <img src={Logo} className='logo'/>
            </div>
            
            <div>
                <div className='navIcon-container'>
                    <div className='navIcon-Item'>
                        <img src={Avatar} className='navIcon'/>
                        <p style={{fontSize: "10px"}}>Ralph Murphy</p>
                    </div>
                    
                    <img src={Home} className='navIcon'/>
                    <img src={Calendar} className='navIcon'/>
                    <img src={MedicalRecord} className='navIcon'/>
                    <img src={User} className='navIcon'/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
