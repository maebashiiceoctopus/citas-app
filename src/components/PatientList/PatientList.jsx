import React from "react";

export default function PatientList() {
  return (
    <div className="w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center ">
        Listado de pacientes{" "}
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-500 font-bold">pacientes y citas</span>
      </p>

      <div className="m-3 px-5 py-10 bg-white shadow-md rounded-xl">
          <p>Nombre:{""}</p>
          <span>hook</span>
      </div>
    </div>
  );
}
