import React from 'react'
import Logo from "../img/Logo.svg"
import Home from "../img/navbar/home-page.svg"
import MedicalRecord from "../img/navbar/medical-record.svg"
import Medical from "../img/navbar/medical.svg"
import Avatar from "../img/navbar/doctor.svg"
import { Link } from 'react-router-dom'

function NavbarDoctor() {
    return (
        <div>
            <div>
            <Link to="/dashboard">
                <img src={Logo} className='logo'/>
            </Link>

                
            </div>
            
            <div>
                <div className='navIcon-container'>
                    <div className='navIcon-Item'>
                        <img src={Avatar} className='navIcon'/>
                        <p style={{fontSize: "10px"}}>Ralph Murphy</p>
                    </div>
                    
                    <Link to="/dashboard" className='m-auto'>
                        <img src={Home} className='navIcon'/>
                    </Link>
                    <Link to="/prescription" className='m-auto'>
                        <img src={MedicalRecord} className='navIcon'/>
                    </Link>
                    <Link to="/medical-record" className='m-auto'>
                        <img src={Medical} className='navIcon'/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default NavbarDoctor
