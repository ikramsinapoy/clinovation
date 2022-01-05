import React from 'react'
import { Container } from 'react-bootstrap'
import MedicalRecordPatient from './components/MedicalRecordPatient'
import MedRecPatientConsultation from './components/MedRecPatientConsultation'

function MedicalRecord() {
    return (
        <div>
            <Container>
                <h2>Patient Medical Record</h2>
                <MedRecPatientConsultation/>
            </Container>
        </div>
    )
}

export default MedicalRecord
