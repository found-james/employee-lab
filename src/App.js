import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Employeepage from './components/Employeepage.js'
import { employeeData } from './data.js';
import './App.css';

function App() {
  return (
    <>
    <section>
      <Homepage employeeData={ employeeData }/>
    </section>
    <section>
      <Routes>
          <Route path="/employeepage" element={ <Employeepage /> } />
      </Routes>
      
      </section>
    </>
  );
}

export default App;
