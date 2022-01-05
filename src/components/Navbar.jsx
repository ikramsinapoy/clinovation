import React from 'react'
import Logo from "../img/Logo.svg"
import Calendar from "../img/navbar/calendar.svg"
import Home from "../img/navbar/home-page.svg"
import MedicalRecord from "../img/navbar/medical-record.svg"
import User from "../img/navbar/user.svg"
import Avatar from "../img/navbar/doctor.svg"
import "../style/style.css"
import {Nav,Button,FormControl,Form,NavDropdown,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
                <img src={Logo} className='logo'/>
            </div>
            
            <div>
                <div className='navIcon-container'>
                    <div className='navIcon-Item'>
                        <img src={Avatar} className='navIcon'/>
                        <p style={{fontSize: "10px"}}>Ralph Murphy</p>
                    </div>
                    <Link to="/">
                        <img src={Home} className='navIcon'/>
                    </Link>
                    
                    <img src={Calendar} className='navIcon'/>
                    <img src={MedicalRecord} className='navIcon'/>
                    <img src={User} className='navIcon'/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
