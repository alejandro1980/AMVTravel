import React, { useState, useEffect } from 'react';
import { fetchReservas, deleteReserva } from '../services/api';
import { useNavigate } from 'react-router-dom';

function ReservaList() {
    const [reservas, setReservas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchReservas();
            setReservas(result);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteReserva(id);
        setReservas(reservas.filter(reserva => reserva.id !== id));
    };

    return (
        <div>
            <h2>Lista de Reservas</h2>
            <ul>
                {reservas.map(reserva => (
                    <li key={reserva.id}>
                        {reserva.cliente} - {reserva.tour.nombre}
                        <button onClick={() => handleDelete(reserva.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={() =>  navigate('/add-reserva')}>Crear reserva</button>
            
            <button onClick={() =>  navigate('/tours')}>Tours Disponibles</button>
        </div>
    );
}

export default ReservaList;