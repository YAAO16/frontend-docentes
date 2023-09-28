import React, { useState }  from "react";
import { FcList } from "react-icons/fc";
import { Button, Dropdown } from 'react-bootstrap';
import logo from './logo.png';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";

function Informedocentes() {
    const styles = {
        headerCell: {
          backgroundColor: '#f2f2f2',
          padding: '10px',
          fontWeight: 'bold',
          textAlign: 'left',
          borderBottom: '1px solid #ddd',
        },
        cell: {
          padding: '10px',
          textAlign: 'left',
          borderBottom: '1px solid #ddd',
        }
      };
      const [mostrarOpciones, setMostrarOpciones] = useState(false);
      const toggleMostrarOpciones = () => {
        setMostrarOpciones(!mostrarOpciones);
      };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Link to="/menu" className="botoncue"><FcDownLeft className="icon"/></Link>
    <div className="w-11/12 md:w-9/12 lg:w-6/12 xl:w-15/15 p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-16 h-16" />
      </div>
      <div className="mt-4">
        <h1 className="text-xl md:text-2xl font-semibold text-center">Evaluacion de docentes</h1>
        <p className="line-break"></p>
        <div className="mx-auto">
        <center>
        <h1 className="text-slate-950" style={{fontSize: '19px'}}>Usuario: <span style={{ fontWeight: 'bold', color:"green"}}>NIXON CAMILO ANACONA</span></h1>
          <table style={{ borderCollapse: 'collapse', width: '70%' }}>
              <thead>
              <tr>
                  <th style={styles.headerCell}>Evaluaciones Activas</th>
                  <th style={styles.headerCell}>
                  <div className="relative inline-block text-left-green-500">
                      <Button variant="primary" style={{color:'black',fontSize: '15px'}} className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2" onClick={toggleMostrarOpciones}>Seleccione una evaluacion <FcList /> </Button>
                      {mostrarOpciones && (
                      <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg" style={{ width: '100%'}}>
                          <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-gray-900">
                          Opcion 1
                          </Dropdown.Item>
                          <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-gray-900">
                          Opcion 2
                          </Dropdown.Item>
                          <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-gray-900">
                          Opcion 3
                          </Dropdown.Item>
                      </Dropdown>
                      )}
                  </div>
                  </th>
              </tr>
              </thead>
          </table>
          </center>
        </div>         
      </div>
    </div>
  </div>
    
  );
}

export default Informedocentes;