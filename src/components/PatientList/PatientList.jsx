import React from "react";
import CardPatient from "../CardPatient/CardPatient";


export default function PatientList({ pacientes ,setPaciente}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes{" "}
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {""}
            <span className="text-indigo-500 font-bold">pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <CardPatient key={paciente.id} paciente={paciente} setPaciente={setPaciente}></CardPatient>
          ))}
        </>
      ) : (
        <>
         <h2 className="font-black text-3xl text-center">
            No has registrado pacientes{" "}
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando tus {""}
            <span className="text-indigo-500 font-bold">pacientes y citas</span>
          </p>
        </>
      )}
    </div>
  );
}
