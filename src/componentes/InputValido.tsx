import React from 'react';

interface InputValidoProps {
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    esValido: boolean;
    mostrarValidacion: boolean;
    mensajeError: string | React.ReactNode;
    mensajeExito: string;
}

const InputValido: React.FC<InputValidoProps> = ({
    label,
    type,
    value,
    onChange,
    placeholder,
    esValido,
    mostrarValidacion,
    mensajeError,
    mensajeExito,
}) => {
    return (
        <div className="mb-5">
            <label className="block font-bold mb-2 text-gray-700">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange (e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 border-2 rounded-lg focus: outline-none focus:border-blue-500 transition duration-150"
            />

            {/*mostrar validacion si se escribio algo*/}
            {mostrarValidacion &&(
                <>
                    {!esValido && (
                        <div className="text-red-500 text-sm mt-1">
                            {mensajeError}
                        </div>
                    )}
                    {esValido && (
                        <p className="text-green-500 text-sm mt-1">
                            {mensajeExito}
                        </p>
                    )}
                </>
            )}   
        </div>
    );
};

export default InputValido;