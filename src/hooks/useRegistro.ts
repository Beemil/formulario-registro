import { useState } from "react";
import { toast } from 'react-hot-toast';
import type { Usuario } from '../types/Usuario';

const useRegistro = () => {
   const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    email: "",
    password: "",
   });

   //validaciones
   // verificamos que tenga mas de 3 letras
   const nombreValido = usuario.nombre.length >= 3; 
   //verificamos el formato email, buscando: xxx@xxx.xxx
   const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email);
   // minimo 6 caracteres, que lleve mayusculas, numero para la password
   const passwordValida = 
   usuario.password.length >= 6 &&
   /[A-Z]/.test(usuario.password)&&
   /[0-9]/.test(usuario.password);

   const todoValido = nombreValido && emailValido && passwordValida;

   const handleCambiarCampo = (campo: keyof Usuario, valor:string) => {
    setUsuario((prev)=> ({
        ...prev,
        [campo]: valor,
    }));
   };

   const handleRegistrar = () => {
    if (!todoValido) {
        toast.error ('Por favor, completar los campos correctamente');
        return;
    }

    toast.success(` Registro exitoso. Bienvenido, ${usuario.nombre}`,{
        duration: 5000,
    });

    //limpiar
    setUsuario({
        nombre: "",
        email:"",
        password:"",
    });
   };

   return{
    usuario,
    nombreValido,
    emailValido,
    passwordValida,
    todoValido,
    handleCambiarCampo,
    handleRegistrar,
   };
};

export default useRegistro;
