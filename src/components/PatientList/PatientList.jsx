import React from "react";
import CardPatient from "../CardPatient/CardPatient";

export default function PatientList({ pacientes }) {
  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de pacientes </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-500 font-bold">pacientes y citas</span>
      </p>

      {pacientes.map((paciente) => (
         <CardPatient paciente={paciente}></CardPatient>
      ))}

     
    </div>
  );
}
