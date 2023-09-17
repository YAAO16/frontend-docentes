import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { loginUser } from '../api/api'; // Import the loginUser function
import loginImg from '../assets/login.jpg';
import '../css/Login.css';

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const iniciarSesion = async () => {
    try {
      const user = await loginUser(form.username, form.password);

      if (user) {
        cookies.set('id', user.id, { path: '/' });
        cookies.set('username', user.username, { path: '/' });
        cookies.set('rol', user.rol, { path: '/' });
        alert(`Bienvenido ${user.username}`);

        navigate("/menu");
      } else {
        alert("El usuario o la contraseña no son correctos");
      }
    } catch (error) {
      console.error(error);
      // Handle errors gracefully, e.g., show an error message to the user
    }
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl text-white font-bold text-center'>INICIAR SESIÓN</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Usuario</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" name="username" onChange={handleChange} />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Contraseña</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" name='password' onChange={handleChange} />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p><input type="checkbox" />Recordar mi Usuario</p>
            <p>Recordar Contraseña</p>
          </div>

          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teak-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg' onClick={() => iniciarSesion()}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
