import React from 'react'
import {Table, Button, Container} from "react-bootstrap"

function ListPrescription() {
    return (
        <div>
            <Container>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Medication</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="warning" style={{marginRight: "10px"}} size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="warning" style={{marginRight: "10px"}} size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button variant="warning" style={{marginRight: "10px"}} size="sm">Edit</Button>
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default ListPrescription
