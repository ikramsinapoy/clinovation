import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Menu from './Menu';
import Form from './Form';
import ListMedicalStaff from './ListMedicalStaff';
import Prescription from './Prescription';
import MedicalRecord from './MedicalRecord';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor from './Doctor';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


