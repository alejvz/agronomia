'use client'
import React, { useState } from 'react';


interface InputValues {
    [key: string]: number;
}

const InputFormPh: React.FC = () => {
    const [responseData, setResponseData] = useState<any>(null);
    const [inputValues, setInputValues] = useState<InputValues>({
        CIC: 8.079447,
        MO: 16.041250728069,
        P: 64.1991999999999,
        S: 5.52356020942408,
        Ca: 2.23477545,
        Mg: 0.34667245,
        Acidez: 5.02845393817867,
        Al: 4.6431499301287,
        K: 0.313187687999999,
        Na: 0.156357459999999,
        CE: 0.3741072,
        Fe: 1685.377,
        Cu: 4.124,
        Mn: 17.619,
        Zn: 8.567,
        B: 0.302575107296137
    });

    const handleSliderChange = (name: string, value: number) => {
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://agronomia.onrender.com/api/ph', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputValues),
            });
            console.log('datos enviados', inputValues)

            if (response.ok) {
                console.log('Datos enviados con éxito');
                const responseData = await response.json();
                setResponseData(responseData);
            } else {
                console.error('Error al enviar los datos a la API');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Formulario para enviar datos a la API</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(inputValues).map((name, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={`input-${name}`}>{name}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="0.01"
                            value={inputValues[name]}
                            onChange={(e) => handleSliderChange(name, parseFloat(e.target.value))}
                            className="w-full"
                            id={`input-${name}`}
                        />
                        <span>{inputValues[name]}</span>
                    </div>
                ))}

                <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded">
                    Enviar datos
                </button>
                <div className="mt-4">
                    {responseData && (
                        <div>
                            <h2>Respuesta de la API:</h2>
                            <pre>{JSON.stringify(responseData, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default InputFormPh;

