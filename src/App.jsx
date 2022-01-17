import  { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import PatientList from "./components/PatientList/PatientList";


function App() {
const [pacientes,setPacientes]=useState([])
 

  return (
    <div className="container mx-auto mt-20">
      <>
        <Header setPacientes={pacientes} />
        <div className="mt-12 md:flex">
          <Form pacientes={pacientes} setPacientes={setPacientes} />
          <PatientList pacientes={pacientes} />
        </div>
      </>
    </div>
  );
}

export default App;
