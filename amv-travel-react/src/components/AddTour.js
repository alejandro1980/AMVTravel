import React, { useState } from 'react';
const API_URL = "http://localhost:5240/api";  

function AddTour() {
    const [nombre, setNombre] = useState('');
    const [destino, setDestino] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newTour = {
            nombre,
            destino,
            fechaInicio,
            fechaFin,
            precio: parseFloat(precio),
        };

        try {
            const response = await fetch(`${API_URL}/tour`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTour),
            });

            if (response.ok) {
                alert('Tour agregado exitosamente!');
            } else {
                alert('Error al agregar el tour.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar agregar el tour.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Destino:</label>
                <input type="text" value={destino} onChange={(e) => setDestino(e.target.value)} required />
            </div>
            <div>
                <label>Fecha de Inicio:</label>
                <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
            </div>
            <div>
                <label>Fecha de Fin:</label>
                <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required />
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
            </div>
            <button type="submit">Agregar Tour</button>
        </form>
    );
}

export default AddTour;