import React from "react";

export default function CardPatient({paciente}) {

  const {name, nameOwner, symptoms, date, email}=paciente;
  return (
    <div>
      <div className="m-3 px-5 py-10 bg-white shadow-md rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{""}</p>
        <span className="normal-case font-normal">{name}</span>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{""} 
        </p>
        <span className="normal-case font-normal">{nameOwner}</span>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{""}</p>
        <span className="normal-case font-normal">{email}</span>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{""}
        </p>
        <span className="normal-case font-normal">{date}</span>
        <p className="font-bold mb-3 text-gray-700 uppercase">sintomas:{""}</p>
        <span className="normal-case font-normal">
          {symptoms}
        </span>
      </div>
    </div>
  );
}
