import { useState } from "react";
import Footer from "./components/Footer.jsx";
import { FaPencil } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import backgroundImg from "../public/backgroundUnicor3.jpg";

import "./index.css";

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-3/4">
          <div className="p-5">
            <h1 className="text-3xl font-bold p-5 text-slate-300">
              Hola, Fernando, bienvenido(a) a su Campus TI.
            </h1>
            <div className="bg-yellow-300 p-3 sm:w-96 h-56 mt-3 rounded-md text-slate-950 hover:bg-yellow-200 hover:text-slate-800 shadow-lg shadow-gray-950">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-0 sm:ml-64 mb-1 shadow-lg shadow-cyan-500/50"
              >
                <FaPencil className="mr-2" /> Editar
              </button>
              <p className="text-2xl font-bold mt-1 ml-4 text-slate-800">
                Aún no tienes contenidos visibles en ésta sección
              </p>
            </div>
          </div>
        </div>

        {/* NEW GESTION */}
        <article
          className="p-10 min-h-116 max-w-3xl w-full bg-purple-600 rounded-xl text-gray-100 xl:col-span-2 transform duration-500 hover:-translate-y-5 cursor-pointer m-10 shadow-2xl relative"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="mt-5 text-5xl font-light text-gray-100 leading-snug hover:underline min-h-33">
            Gestión
          </h1>
          <div className="mt-20 border border-slate-300 w-36 p-3 hover:bg-slate-700">
            <span className="text-4xl"> <PiStudentFill /> </span>
            <span className="font-bold text-xl">Acádemico estudiante</span>
          </div>
          <div className="mt-16 flex justify-between items-center">
            <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 absolute top-5 right-5">
              <FaPencil className="text-yellow-300 mr-2" /> Editar
            </button>
            <button className="p-3 border-2 border-gray-200 rounded-md text-2xl hover:bg-gray-200 hover:border-gray-200 cursor-pointer hover:text-black">
              <FaPencil className="text-yellow-300 mr-2" /> Editar
            </button>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
