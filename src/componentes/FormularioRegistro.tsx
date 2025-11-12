import React from 'react';
import { Toaster } from 'react-hot-toast';
import useRegistro from '../hooks/useRegistro';
import InputValidado from './InputValido';

const FormularioRegistro: React.FC = () => {
  const {
    usuario,
    nombreValido,
    emailValido,
    passwordValida,
    todoValido,
    handleCambiarCampo,
    handleRegistrar,
  } = useRegistro();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-cyan-100 p-6 flex items-center justify-center">
      <Toaster position="top-center" />
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
            Registro de Usuario
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Crea tu cuenta para empezar
        </p>

        {/* Input Nombre */}
        <InputValidado
          label="Nombre de Usuario"
          type="text"
          value={usuario.nombre}
          onChange={(valor) => handleCambiarCampo('nombre', valor)}
          placeholder="Ej: Juan123"
          esValido={nombreValido}
          mostrarValidacion={usuario.nombre.length > 0}
          mensajeError="Nombre muy corto"
          mensajeExito="Nombre válido"
        />

        {/* Input Email */}
        <InputValidado
          label="Correo Electrónico"
          type="email"
          value={usuario.email}
          onChange={(valor) => handleCambiarCampo('email', valor)}
          placeholder="ejemplo@correo.com"
          esValido={emailValido}
          mostrarValidacion={usuario.email.length > 0}
          mensajeError="Email inválido"
          mensajeExito="Email válido"
        />

        {/* Input Contraseña */}
        <InputValidado
          label="Contraseña"
          type="password"
          value={usuario.password}
          onChange={(valor) => handleCambiarCampo('password', valor)}
          placeholder="Crea una contraseña segura"
          esValido={passwordValida}
          mostrarValidacion={usuario.password.length > 0}
          mensajeError={
            <div>
              <p> La contraseña debe tener:</p>
              <ul className="ml-4 text-xs">
                <li>• Al menos 6 caracteres</li>
                <li>• Una letra mayúscula</li>
                <li>• Un número</li>
              </ul>
            </div>
          }
          mensajeExito="Contraseña segura"
        />

        {/* Botón Registrar */}
        <button
          onClick={handleRegistrar}
          disabled={!todoValido}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
            todoValido
              ? 'bg-cyan-600 hover:bg-lime-600 text-white cursor-pointer transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {todoValido ? 'Registrar' : 'Completa el formulario'}
        </button>

        {/* Info adicional */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            ¿Ya tienes cuenta?{' '}
            <span className="text-lime-600 font-bold cursor-pointer hover:underline">
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormularioRegistro;