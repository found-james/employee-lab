
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
      <Employeepage />
      </section>
    </>
  );
}

export default App;
