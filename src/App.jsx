import { useState } from "react";
import Footer from "./components/Footer.jsx";
import { FaPencil } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

import "./index.css";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-3/4">
          <div className="p-5">
            <h1 className="text-3xl font-bold p-5 text-slate-300">
              Hola, Fernando, bienvenido(a) a su Campus TI.
            </h1>
            <div className="bg-yellow-300 p-3 w-96 h-56 mt-3 rounded-md text-slate-950 hover:bg-yellow-200 hover:text-slate-800 shadow-lg shadow-gray-950">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-64 mb-1 shadow-lg shadow-cyan-500/50"
              >
                Editar <FaPencil className="ml-3" />
              </button>
              <p className="text-2xl font-bold mt-1 ml-4 text-slate-800">
                Aún no tienes contenidos visibles en ésta sección
              </p>
            </div>
          </div>
        </div>
        <div className="m-40 mb-20 w-auto max-w-96 rounded shadow-lg bg-white text-black shadow-lg shadow-gray-950">
          <div className="bg-gray-900 border-l-4 border-r-4 p-20 overflow-hidden">
            <h1 className="text-3xl text-slate-300 font-bold mr-56">Gestión</h1>
            <PiStudentFill className="mt-10 text-4xl" />
            <p className="mt-10 text-slate-100 ">Acádemico estudiante</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
