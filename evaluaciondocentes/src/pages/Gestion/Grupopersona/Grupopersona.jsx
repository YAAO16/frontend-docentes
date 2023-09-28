import React, {useState} from "react";
import './Grupopersona.css';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";
import Axios from "axios"

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

function Grupopersona() {
    const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10; // Número total de páginas

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //const [name, setname] = useState("");
  //const [rol, setrol] = useState("");
  //const [estado, setestado] = useState("");

  const [id, setid]= useState("");
  const [nombre, setnombre]= useState("");
  
  
  const agregar =() =>{
    Axios.post("http://localhost:3000/Grupopersonas",{
      id: id,
      nombre: nombre
    }).then(()=>{
      alert("Registro exitoso");
    })
  }
  const [open, setOpen] = useState(false)
    return (
        <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
          <Link to="/menu" className="botongru"><FcDownLeft className="icon"/></Link>
        <div style={{ width: '80%' }}>
          <center>
            <div className='w-full max-w-5xl'>
            <div className="w-full max-w-5xl py-2 mt-20 rounded bg-green-800 text-white">
            <div className='text-center text-xl'>
                <p>GRUPOS PERSONAS</p>
            </div>
            </div>
            <p className="line-break"></p>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label className="block text-gray-500 mb-1 md:mb-0 pr-4" htmlFor="id-cuestionario">
                    Id_Grupo:
                </label>
                <input onChange={(event)=>{setid(event.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="id-cuestionario" type="text" placeholder="" />
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label onChange={(event)=>{setnombre(event.target.value)}} className="block text-gray-500 mb-1 md:mb-0 pr-4" htmlFor="cuestionario">
                    Nombre Grupo:
                </label>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="cuestionario" type="text" placeholder="" />
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label className="block text-gray-500 mb-1 md:mb-0 pr-4" htmlFor="cuestionario">
                    Rol sigedin:
                </label>
                <div className="static">
                  <select className="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="estado" type="text" placeholder="">
                    <option>Estudiante</option>
                    <option>Docente</option>
                    <option>Bibliotecario</option>
                    <option>Admin sigedin</option>
                    <option>Docente de apoyo (jefe de programa)</option>
                    <option>Decano de la facultad</option>
                    <option>Vicerector academico</option>
                    <option>Director CIECYT</option>
                    <option>Admin evaluacion docentes</option>
                    <option>Admin audiovisuales</option>
                    <option>Admin egresados</option>
                    <option>Egresado</option>
                    <option>Admin biblioteca</option>
                    <option>Admin decerción</option>
                    <option>Admin matricula</option>
                    <option>Bienestar universitario</option>
                    <option>Consulta</option>
                    <option>Admin financiera</option>
                    <option>Usuariro sigedin</option>
                    <option>Casos especiales</option>
                  </select>
                </div>
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label className="block text-gray-500 mb-1 md:mb-0 pr-4" htmlFor="cuestionario">
                    Estado Evalua:
                </label>
                <div className="static">
                  <select className="bg-gray-200 uppercase border-2 border-gray-200 w-full rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="estado" type="text" placeholder="">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
                </div>
            </div>
           
            <div className="flex justify-center button-container">
            <button className="button bg-green-800 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full" onClick={agregar}>
                Agregar
            </button>
            <button className="button bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
                Imprimir
            </button>
            </div>
            
            <div className={`${!open && "hidden"} fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>
            <div className="transition-all duration-300" style={{ width: open ? '20rem' : '0' }}>
                <div className={`${!open && "hidden"} pt-3`}>
                <button className="ml-4 mb-14" onClick={() => setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
            </div>
            </form>
        
        <form className="flex items-center">   
            <label htmlFor="simple-search " className="sr-only">Search</label>
            <div className="static w-full">
                <div className="static inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input  type="text" id="simple-search" className="bg-white-800 border border-white-300 text-white text-base rounded-lg focus:ring-white-500 focus:border-white-500 block w-full pl-10 p-2.5 bg-green-800 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-greeen-500 placeholder-white" placeholder="Search" required></input>
            </div>
            <button type="submit" className="p-2.5 ml-2 text-white font-medium text-white bg-green-800 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-500 dark:focus:ring-green-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
            </button>
              </form>
              <p className="line-break"></p>
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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

export default Grupopersona;