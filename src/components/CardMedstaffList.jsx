import React from 'react'
import { Button } from 'react-bootstrap'
import Avatar from '../img/navbar/doctor.svg'

function CardMedstaffList() {
    return (
        <div>        
            <div className='cardList-container .responsive-card'>
                <div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight"><img src={Avatar} style={{height: "24px"}}/></div>
                    <div class="p-2 bd-highlight"><div>Ralph</div></div>
                    <div class="p-2 bd-highlight"><div>32 Years old</div></div>
                    <div class="p-2 bd-highlight"><div>710481048018</div></div>
                    <div class="ms-auto p-2 bd-highlight"><Button variant="info" size="sm">View Staff</Button></div>
                </div>
            </div>
        </div>
    )
}

export default CardMedstaffList
