import React, {useState}  from "react";
import { FcList } from "react-icons/fc";
import { Button, Dropdown } from 'react-bootstrap';
import './Evaluaron.css';
import { Link } from "react-router-dom";
import { FcDownLeft } from "react-icons/fc";
import logo from './logo.png'


function Evaluaron() {
    const styles = {
        headerCell: {
          backgroundColor: '#f2f2f2',
          padding: '10px',
          fontWeight: 'bold',
          textAlign: 'left',
          borderBottom: '1px solid #ddd',
          fontSize: '12px'
        },
        cell: {
          padding: '10px',
          textAlign: 'left',
          borderBottom: '1px solid #ddd',
        }
      };
      const [mostrarOpcionesEvaluador, setMostrarEvaluador] = useState(false);
      const toggleMostrarEvaluador = () => {
        setMostrarEvaluador(!mostrarOpcionesEvaluador);
      };

      const [mostrarOpcionesEvaluadordos, setMostrarEvaluadordos] = useState(false);
      const toggleMostrarEvaluadordos = () => {
        setMostrarEvaluadordos(!mostrarOpcionesEvaluadordos);
      };

      const [mostrarOpcionesPeriodo, setMostrarPeriodo] = useState(false);
      const toggleMostrarPeriodo = () => {
        setMostrarPeriodo(!mostrarOpcionesPeriodo);
      };

      const handleClick = () => {
        // Lógica a ejecutar cuando se hace clic en el botón
      };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }} className="body">
    <Link to="/menu" class="botoncue"><FcDownLeft className="icon"/></Link>
      <div style={{ width: '80%' }} className="form">
        <center>
        <img src={logo} alt="logo" style={{ width: '80px', height: '80px' }} />
        <div style={{ marginLeft: '80px' }}>
        <h1 className="text-slate-950 hover:text-slate-500 transition-colors py-2" style={{fontSize: '35px'}}>Sistema de Evaluacion de Docentes</h1>
      </div>
      <p className="line-break"></p>
            <h1 className="text-slate-950" style={{fontSize: '35px'}}>Jefe de Area o Decano: <span style={{ fontWeight: 'bold', color:"green"}}>NIXON CAMILO ANACONA</span></h1>
            <p className="line-break"></p>
            <table className="container">
              <tr>
                <td>
                <div>
                        <table style={{ borderCollapse: 'collapse', width: '90%', height:'10%', fontFamily: '10px' }} className="item">
                        <thead>
                        <tr>
                            <th style={styles.headerCell}>Evaluador:</th>
                            <th style={styles.headerCell}>
                            <div className="relative inline-block text-left-green-500">
                                <Button variant="primary" style={{color:'black',fontSize: '12px'}} className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2" onClick={toggleMostrarEvaluador}>Seleccione el evaluador<FcList /> </Button>
                                {mostrarOpcionesEvaluador && (
                                <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    Estudiante
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    Decano
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    Docentes
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
                </td>
                <td>
                <div>
                        <table style={{ borderCollapse: 'collapse', width: '90%', height:'10%', marginright:'1000px' }} className="item">
                        <thead>
                        <tr>
                            <th style={styles.headerCell}>Evaluado:</th>
                            <th style={styles.headerCell}>
                            <div className="relative inline-block text-left-green-500">
                                <Button variant="primary" style={{color:'black',fontSize: '12px'}} className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2" onClick={toggleMostrarEvaluadordos}>Seleccione el evaluador<FcList /> </Button>
                                {mostrarOpcionesEvaluadordos && (
                                <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    Estdiante
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    Decano
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    Docente
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
                </td>
                <td>
                <div>
                        <table style={{ borderCollapse: 'collapse', width: '90%', height:'10%', padding:'1000px' }} className="item">
                        <thead>
                        <tr>
                            <th style={styles.headerCell}>Periodo:</th>
                            <th style={styles.headerCell}>
                            <div className="relative inline-block text-left-green-500">
                                <Button variant="primary" style={{color:'black',fontSize: '12px'}} className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2" onClick={toggleMostrarPeriodo}>Seleccione el periodo: <FcList /> </Button>
                                {mostrarOpcionesPeriodo && (
                                <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    2023-1
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    2023-2
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" style={{fontSize: '12px'}}>
                                    2024-1
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
                </td>
              </tr>
            </table>
            <button variant="primary" style={{color:'black',fontSize: '20px', background:'green'}} className="button bg-green-800 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>Buscar Examen</button>
        </center>
    </div>
    </div>
    
  );
}

export default Evaluaron;