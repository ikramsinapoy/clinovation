import iconpatient from "../img/patient.svg"
import iconnurse from "../img/nurse.svg"
import iconmedstaff from "../img/health-care.svg"
import icondoctor from "../img/doctoricon.svg"
import { Card } from "react-bootstrap";
import React from "react";
import {Modal,Button} from "react-bootstrap"
import Logo from "../img/Logo.svg"
import FormLogin from "./FormLogin"
import Medstaff from "../img/health-care.svg"
import "../style/style.css"

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div class="d-flex justify-content-end">
                <img src={Logo} style={{height: "100px"}} class="d-flex justify-content-end"/>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#F7F7F7'}}>
          <div style={{ textAlign: 'center' }}>
            <h4><img src={Medstaff} style={{height: "42px", marginRight:"10px"}}/>Medical Staff Login</h4>
          </div>
          <FormLogin/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function CardDashboard() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <div className="container">

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="grid-container">
            <Card style={{ width: '160px', textAlign: 'center'}} onClick={() => setModalShow(true)}>
                <div style={{ textAlign: 'center'}}>
                    <Card.Img variant="top" src={icondoctor} style={{ width: '100px'}}/>
                </div>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'Bold' }}>Doctor</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '160px', textAlign: 'center' }}>
                <div style={{ textAlign: 'center'}}>
                    <Card.Img variant="top" src={iconmedstaff} style={{ width: '100px' }}/>
                </div>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'Bold' }}>Medical staff</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '160px' , textAlign: 'center'}}>
                <div style={{ textAlign: 'center'}}>
                    <Card.Img variant="top" src={iconnurse} style={{ width: '100px' }}/>
                </div>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'Bold' }}>Nurse</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '160px' , textAlign: 'center'}}>
                <div style={{ textAlign: 'center'}}>
                    <Card.Img variant="top" src={iconpatient} style={{ width: '100px' }}/>
                </div>
                <Card.Body>
                    <Card.Title style={{ fontWeight: 'Bold' }}>Patient</Card.Title>
                </Card.Body>
            </Card>
        </div>
      </div>
    );
  }
  