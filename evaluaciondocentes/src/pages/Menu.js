import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { FcBusinessman, FcList } from 'react-icons/fc';
import { Transition } from '@headlessui/react';
import { Button, Dropdown } from 'react-bootstrap';
import { BiAdjust } from 'react-icons/bi';

const cookies = new Cookies();

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      mostrarOpciones: false,
      MostrarOp2: false,
      Optres: false,
    };
  }

  toggleMostrarOpciones = () => {
    this.setState({ mostrarOpciones: !this.state.mostrarOpciones });
  };

  toggleMostrarOp2 = () => {
    this.setState({ MostrarOp2: !this.state.MostrarOp2 });
  };

  Opciontres = () => {
    this.setState({ Optres: !this.state.Optres });
  };

  cerrarSesion = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('username', { path: '/' });
    window.location.href = './';
  };

  componentDidMount() {
    if (!cookies.get('username')) {
      window.location.href = './';
    }
  }

  render() {
    console.log('id: ' + cookies.get('id'));
    console.log('username: ' + cookies.get('username'));

    return (
      <div className="flex h-screen bg-gray-200 relative">
        <button
          className="fixed z-10 inset-0 bg-green-500 relative opacity-50 transition-opacity lg:hidden"
          aria-hidden="true"
        ></button>
        <Transition
          show={this.state.isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="fixed z-80 inset-y-0 left-0 w-64 transition duration-300 transform bg-white shadow-lg"
        >
          {/* Contenido del sidebar */}
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <h1
                className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
                style={{ fontSize: '35px' }}
              >
                <FcBusinessman />
                <Link to="/Home">{cookies.get('rol')}</Link>
              </h1>
              <div className="flex items-center gap-4 text-gray-400 hover:text-gray-200 transition-colors py-2">
                <Link
                  to="/Evaluacion"
                  className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
                  style={{ fontSize: '20px' }}
                >
                  Evaluacion1
                </Link>
              </div>
              
              <div className="relative inline-block text-left-green-500">
                <Button
                  variant="primary"
                  style={{ color: 'black', fontSize: '20px' }}
                  className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
                  onClick={this.toggleMostrarOpciones} // Debe ser this.toggleMostrarOpciones
                >
                  Reporte<span className="espacio"></span> <FcList className="orden" />{' '}
                </Button>
                {this.state.mostrarOpciones && (
                  <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
                    <Dropdown.Item
                      href="/informesdocentes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Informes docentes
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/resultadodocentes"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Resultados docentes
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Resultados todos los docentes
                    </Dropdown.Item>
                  </Dropdown>
                )}
              </div>
              <br />
              <div className="relative inline-block text-left-green-500">
                <Button
                  variant="primary"
                  style={{ color: 'black', fontSize: '20px' }}
                  className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
                  onClick={this.toggleMostrarOp2} // Debe ser this.toggleMostrarOp2
                >
                  Informe directivo <FcList />{' '}
                </Button>
                {this.state.MostrarOp2 && (
                  <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
                    <Dropdown.Item
                      href="/evaluaron"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Evaluaron
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/infomeresultadoscuantitativos"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Informe resultados cuantitativos
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Informe resultados cualitativos
                    </Dropdown.Item>
                  </Dropdown>
                )}
              </div>
              <br />
              <div className="relative inline-block text-left-green-500">
                <Button
                  variant="primary"
                  style={{ color: 'black', fontSize: '20px' }}
                  className="text-xl font-semibold flex items-center gap-4 text-slate-950 hover:text-slate-500 transition-colors py-2"
                  onClick={this.Opciontres} // Debe ser this.Opciontres
                >
                  Gestion <span className="espacio"></span> <FcList />{' '}
                </Button>
                {this.state.Optres && (
                  <Dropdown className="left right-0 mt-2 w-48 rounded-md shadow-lg">
                    <Dropdown.Item
                      href="/cuestionario"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Cuestionario
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/informecuestionario"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Informe Cuestionario
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/categoriapregunta"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Categoria de preguntas
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/basepregunta"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Base de preguntas
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/grupopersona"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Grupo de Personas
                    </Dropdown.Item>
                  </Dropdown>
                )}
              </div>
            </div>
            <button
              onClick={this.cerrarSesion} // Debe ser this.cerrarSesion
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-red-300 self-center mb-4"
            >
              Cerrar Sesión
            </button>
          </div>
        </Transition>
        {/* Resto de tu contenido */}
        <div>
        <button
          id="menup"
          className="px-4 py-2 text-white bg-green-800 rounded relative hover:text-stone-950 transition-colors fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={() => this.setState({ isOpen: !this.state.isOpen })} // Corrección aquí
          style={{
            position: 'fixed',
            bottom: '4rem',
            right: '4rem',
          }}
        >
          <BiAdjust />
      </button>
        </div>
      </div>
    );
  }
}
