import React, {useState}  from "react";
import { FcList } from "react-icons/fc";
import { Button, Dropdown } from 'react-bootstrap';
import './Informeresultadoscuantitativos.css';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";
import logo from './logo.png'


function Informeresultadoscuantitativos() {
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

      const [mostrarOpcionesPeriodo, setMostrarPeriodo] = useState(false);
      const toggleMostrarPeriodo = () => {
        setMostrarPeriodo(!mostrarOpcionesPeriodo);
      };

      const handleClick = () => {
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
            <p className="line-break"></p>
                <p className="line-break"></p>
                <div>
                        <table style={{ borderCollapse: 'collapse', width: '80%' }}>
                        <thead>
                        <tr>
                            <th style={styles.headerCell}>Informes Activos:</th>
                            <th style={styles.headerCell}>
                            <div className="relative inline-block text-left-green-500">
                                <Button variant="primary" style={{color:'black',fontSize: '16px'}} className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2" onClick={toggleMostrarPeriodo}>Seleccione el informe: <FcList /> </Button>
                                {mostrarOpcionesPeriodo && (
                                <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg" style={{width: '100%'}}>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                    INFORMACION EVALUACION DOCENTES 2020-2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                    INFORME CUANTITATIVO PERIODO 2023-1
                                    </Dropdown.Item>
                                </Dropdown>
                                )}
                            </div>
                            </th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <p className="line-break"></p>
                <button variant="primary" style={{color:'black',fontSize: '20px', background:'green'}} className="button bg-green-800 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>Buscar</button>
            </center>
            </div>         
          </div>
        </div>
      </div>
    );
    };

export default Informeresultadoscuantitativos;