import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './Menu'
import Doctor from "./Doctor";
import ListPrescription from "./components/ListPrescription";
import FormAddPrescription from "./components/FormAddPrescription";
import MedRecPatientConsultation from "./components/MedRecPatientConsultation";
import FormUpdateProfileDoctor from "./components/FormUpdateProfileDoctor";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/dashboard" element={<Doctor/>} />
          <Route path="/prescription" element={<ListPrescription/>} />
          <Route path="/add-prescription" element={<FormAddPrescription/>} />
          <Route path="/medical-record" element={<MedRecPatientConsultation/>} />
          <Route path="/update-profile" element={<FormUpdateProfileDoctor/>} />
          <Route component={Error} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
