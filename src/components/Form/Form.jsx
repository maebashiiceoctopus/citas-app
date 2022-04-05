import React, { useState, useEffect } from "react";
import Error from "../Error/Error";

function Form({ pacientes, setPacientes, paciente }) {
  const [name, setName] = useState("");
  const [nameOwner, setNameOwner] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  

  useEffect(() => {
    if(Object.keys(paciente).length > 0 );
    setName(paciente.name);
    setNameOwner(paciente.nameOwner);
    setSymptoms(paciente.symptoms);
    setDate(paciente.date);
    setEmail(paciente.email);
  }, [paciente])
  


  const generarId=()=>{
    const random= Math.random.toString(36).substr(2);
    const date= Date.now().toString(36);
    return random+date
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    //validating

    if ([name, nameOwner, symptoms, date, email].includes("")) {
      console.log("hay un campo vacio");
      setError(true);
      return;
    }
    setError(false);
    //objeto paciente

    const PACIENTE = {
      name,
      nameOwner,
      symptoms,
      date,
      email,
      id: generarId()
    };

    setPacientes([...pacientes, PACIENTE]);

    //limpiar formulario
    setName('');
    setNameOwner('');
    setSymptoms('');
    setDate('');
    setEmail('');
    
  };

 

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento de pacientes{" "}
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade tus pacientes y {""}
        <span className="text-indigo-500 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error &&  <Error>Todos los campos son obligatorios</Error> }
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            type="text"
            value={name}
            /* Callback */
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            type="text"
            value={nameOwner}
            onChange={(e) => {
              setNameOwner(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email de contacto"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta Paciente
          </label>

          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas Mascota
          </label>

          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={symptoms}
            onChange={(e) => {
              setSymptoms(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Añadir Paciente"}
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
}

export default Form;
