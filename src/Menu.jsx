import tes from "./img/doctor.svg"
import CardDashboard from "./components/CardDashboard"
import "./style/style.css"
import { Container, Row, Col} from "react-bootstrap";
import Login from "./components/Login"


function Menu(){
    return(
        <div>
            <Row>
                <Col>
                    <CardDashboard />
                </Col>
                <Col className="pe-0 me-0">
                    <div style={{textAlign: 'end'}}>
                        <img src={tes} style={{height: "100vh"}} className="pe-0 me-0"/> 
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Menu