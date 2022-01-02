import React from "react";
import {Modal,Button} from "react-bootstrap"
import Logo from "../img/Logo.svg"
import FormLogin from "./FormLogin"
import FormRegis from "./FormRegis";
import FormForgetPass from "./FormForgetPass";
import FormDoctorRegis from "./FormDoctorRegis";
import Medstaff from "../img/health-care.svg"

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
                <img src={Logo} style={{height: "136px"}}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4><img src={Medstaff} style={{height: "42px", marginRight:"10px"}}/>Medical Staff Register</h4>
          <FormDoctorRegis/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Login
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default App
