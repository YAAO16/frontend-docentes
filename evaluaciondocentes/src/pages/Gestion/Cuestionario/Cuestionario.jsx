import React, {useState} from "react";
import './Cuestionario.css';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page === currentPage) return; // No hacer nada si se selecciona la página actual
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const MAX_VISIBLE_PAGES = 5; // Número máximo de páginas visibles en la barra de paginación

    if (totalPages <= MAX_VISIBLE_PAGES) {
      // Mostrar todos los números de página si hay menos o igual que el número máximo de páginas visibles
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Mostrar una selección de páginas dependiendo de la página actual
      let startPage, endPage;
      if (currentPage <= Math.floor(MAX_VISIBLE_PAGES / 2)) {
        // Caso especial para las primeras páginas
        startPage = 1;
        endPage = MAX_VISIBLE_PAGES;
      } else if (currentPage > totalPages - Math.floor(MAX_VISIBLE_PAGES / 2)) {
        // Caso especial para las últimas páginas
        startPage = totalPages - MAX_VISIBLE_PAGES + 1;
        endPage = totalPages;
      } else {
        // Caso general
        startPage = currentPage - Math.floor(MAX_VISIBLE_PAGES / 2);
        endPage = currentPage + Math.floor(MAX_VISIBLE_PAGES / 2);
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return (
      <ul className="flex space-x-2">
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={`px-2 py-1 rounded ${
              page === currentPage ? 'bg-green-800 text-white' : 'bg-gray-200 text-green-700'
            } cursor-pointer`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="flex justify-center my-4">
      <button
        className={`px-2 py-1 rounded ${
          isFirstPage ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'bg-green-800 text-white'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Anterior
      </button>
      {renderPageNumbers()}
      <button
        className={`px-2 py-1 rounded ${
          isLastPage ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'bg-green-800 text-white'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Siguiente
      </button>
    </nav>
  );
};

function Cuestionario() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10; // Número total de páginas

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const [open, setOpen] = useState(false)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }} className="body">
          <Link to="/Home" class="botoncue"><FcDownLeft className="icon"/></Link>
        <div style={{ width: '80%' }} className="form">
          <center>
            <div className='w-full max-w-5xl'>
              <div class="w-full max-w-5xl py-2 mt-20 rounded bg-green-800 text-white">
                <div className='text-center text-xl'>
                  <p>FORMULARIO DE CUESTIONARIOS</p>
                </div>
              </div>
              <p className="line-break"></p>
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full pr-1 mb-6 md:mb-0 md:flex md:items-center md:w-1/3">
                <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="inline-full-name">
                  Id_Cuestionario
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" />
              </div>
              <div class="w-full pl-3 mb-6 md:mb-0 md:flex md:items-center md:w-2/3">
                <label class="block text-gray-500 mb-1 md:mb-0 pr-4" for="cuestionario">
                  Cuestionario
                </label>
                <input style={{ width:'82%'}} class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" value="" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-2 mb-6 md:mb-0 md:flex md:items-center md:w-1/5">
                <label class="block text-gray-500 mb-1 md:mb-0" for="fecha-inicio">
                  Fecha Inicio
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="fecha-inicio" type="text" placeholder="" />
              </div>
              <div class="w-full px-3 mb-6 md:mb-0 md:flex md:items-center md:w-1/6">
                <label class="block text-gray-500 mb-1 md:mb-0" for="hora-inicio">
                  Hora Inicio
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="hora-inicio" type="text" placeholder="" />
              </div>
              <div class="w-full px-2 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                <label class="block text-gray-500 mb-1 md:mb-0" for="fecha-final">
                  Fecha Final
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="fecha-final" type="text" placeholder="" />
              </div>
              <div class="w-full px-3 mb-6 md:mb-0 md:flex md:items-center md:w-1/6">
                <label class="block text-gray-500 mb-1 md:mb-0" for="hora-final">
                  Hora Final
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="hora-final" type="text" placeholder="" />
              </div>
              <div class="w-full px-2 mb-6 md:mb-0 md:flex md:items-center md:w-1/5">
                <label style={{ width:'33%'}} class="block text-gray-500 mb-1 md:mb-0" for="periodo">
                  Periodo
                </label>
                <div class="static">
                  <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                    <option>2003-1</option>
                    <option>2003-2</option>
                    <option>2022-1</option>
                    <option>2022-2</option>
                    <option>2023-1</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                <label style={{ width:'32%'}} class="block text-gray-500 mb-1 md:mb-0" for="evaluador">
                  Evaluador
                </label>
                <div class="static">
                  <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluador" type="text" placeholder="">
                    <option>ADMON</option>
                    <option>Consulta</option>
                    <option>Consulta_Formacion</option>
                    <option>Decano</option>
                    <option>Docentes</option>
                    <option>Docente_Formacion</option>
                    <option>Estudiantes</option>
                    <option>Rector</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                <label style={{ width:'33%'}} class="block text-gray-500 mb-1 md:mb-0" for="evaluaron">
                  Evaluaron
                </label>
                <div class="static">
                  <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="evaluaron" type="text" placeholder="">
                    <option>ADMON</option>
                    <option>Consulta</option>
                    <option>Consulta_Formacion</option>
                    <option>Decano</option>
                    <option>Docentes</option>
                    <option>Docente_Formacion</option>
                    <option>Estudiantes</option>
                    <option>Rector</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                <label class="block text-gray-500 mb-1 md:mb-0" for="porcentaje">
                  Porcentaje
                </label>
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="porcentaje" type="text" placeholder="" />
              </div>
              <div class="w-full px-4 mb-6 md:mb-0 md:flex md:items-center md:w-1/4">
                <label style={{ width:'32%'}} class="block text-gray-500 mb-1 md:mb-0" for="estado">
                  Estado
                </label>
                <div class="static">
                  <select class="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="estado" type="text" placeholder="">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <div class="">
                <button class="bg-green-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setOpen(true)}>
                  Agregar
                </button>
              </div>
              <div class={`${!open && "hidden"}  w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

              <div class={`${open ? "w-80" : "w-0"} fixed transition-all duration-300`}>
                <div class={`${!open && "hidden"} pt-3`}>
                  <button class="ml-4 mb-14" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        
        <form class="flex items-center">   
            <label for="simple-search " class="sr-only">Search</label>
            <div class="static w-full">
                <div class="static inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input  type="text" id="simple-search" class="bg-white-800 border border-white-300 text-white text-base rounded-lg focus:ring-white-500 focus:border-white-500 block w-full pl-10 p-2.5 bg-green-800 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-greeen-500 placeholder-white" placeholder="Search" required></input>
            </div>
            <button type="submit" class="p-2.5 ml-2 text-white font-medium text-white bg-green-800 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-500 dark:focus:ring-green-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
              </form>
              <p className="line-break"></p>
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div>
              {<table>
            <thead>
              <tr>
                <th></th>
                <th>Listado de Categorias</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>ASISTENCA, FORMACION Y CAPACITACION DOCENTE 2022-2</td>
                <td>Activo</td>
              </tr>
              <tr>
                <td></td>
                <td>ASISTENCA, FORMACION Y CAPACITACION DOCENTE 2022-2</td>
                <td>Activo</td>
              </tr>
              <tr>
                <td></td>
                <td>ASISTENCA, FORMACION Y CAPACITACION DOCENTE 2022-2</td>
                <td>Activo</td>
              </tr>
            </tbody>
          </table>
            }
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
              </form>
            </div>
          </center>
        </div>
      </div>
    
  );
}

export default Cuestionario;