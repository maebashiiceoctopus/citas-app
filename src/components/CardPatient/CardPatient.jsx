import React from "react";

export default function CardPatient() {
  return (
    <div>
      <div className="m-3 px-5 py-10 bg-white shadow-md rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{""}</p>
        <span className="normal-case font-normal">Lola</span>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario:{""}
        </p>
        <span className="normal-case font-normal">Alejandra</span>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email:{""}</p>
        <span className="normal-case font-normal">email@email.vom</span>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{""}
        </p>
        <span className="normal-case font-normal">7 Enero de 2022</span>
        <p className="font-bold mb-3 text-gray-700 uppercase">sintomas:{""}</p>
        <span className="normal-case font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem iusto
          quaerat reiciendis, eos quod porro at sapiente temporibus ab libero
          voluptates voluptatem dolorem velit optio omnis, laboriosam
          repellendus! Rem, dolore.
        </span>
      </div>
    </div>
  );
}
