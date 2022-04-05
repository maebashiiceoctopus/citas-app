import React from "react";

export default function CardPatient({paciente,setPaciente}) {

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
      <div className="flex justify-between mt-10"> 
        <button type="button" 
        className="py-2 px-10 bg-indigo-400 hover:bg-indigo-900 text-white font-bold rounded-lg"
        onClick={()=> setPaciente(paciente)}
        >Editar</button>
        <button type="" className="py-2 px-10 bg-red-400 hover:bg-red-600 text-white font-bold rounded-lg">Eliminar</button>

      </div>
      </div>

    </div>
  

  );
}
