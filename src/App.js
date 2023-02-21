import logo from './logo.svg';
import './App.css';
import Studentdetails from './Studentdetails';
import StudentdetailsYup from './StudentdetailsYup';
import StudentdetailsGetFieldProps from './StudentdetailsGetFieldProps';
import StudentdetailsFormik from './StudentdetailsFormikComp';
import StudentdetailsField from './StudentdetailsFieldComp';

function App() {
  return (
    <div className='border border-2 border-danger p-2 m-2'>
      <h1>Welcome to Edupoly ReactJS</h1>
      <StudentdetailsField></StudentdetailsField>
      <hr></hr>
      <StudentdetailsFormik></StudentdetailsFormik>
      <hr></hr>
      <StudentdetailsGetFieldProps></StudentdetailsGetFieldProps>
      <hr></hr>
      <StudentdetailsYup></StudentdetailsYup>
      <hr></hr>
      <Studentdetails></Studentdetails>
    </div>
  );
}

export default App;
