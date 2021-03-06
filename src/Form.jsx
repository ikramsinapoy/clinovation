import React from 'react'
import FormDoctorRegis from './components/FormDoctorRegis'
import FormMedstaffRegis from './components/FormMedstaffRegis'
import FormPatientRegis from './components/FormPatientRegis'
import FormConsulPatient from './components/FormConsulPatient'
import FormAddPrescription from './components/FormAddPrescription'
import ListPrescription from './components/ListPrescription'
import Logo from './img/Logo.svg'

function Form() {
    return (
        <div>
            <div class="d-flex justify-content-center">
                <img src={Logo} className='logo'/>
            </div>
            
            <FormDoctorRegis/>
        </div>
    )
}

export default Form
