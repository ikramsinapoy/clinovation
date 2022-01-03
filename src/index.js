import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import Menu from './Menu';
import Form from './Form';
import ListMedicalStaff from './ListMedicalStaff';
import Prescription from './Prescription';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Menu/> */}
    <Prescription/>
    {/* <ListMedicalStaff/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


