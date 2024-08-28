import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const API_URL = "http://localhost:5240/api";  

function AddReserva() {
    const navigate = useNavigate();

    const [cliente, setCliente] = useState('');
    const [fechaReserva, setFechaReserva] = useState('');
    const [tourId, setTourId] = useState('');
    const [tours, setTours] = useState([]);
    const [selectedTour, setSelectedTour] = useState(null);  

    

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch(`${API_URL}/tour`);
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchTours();
    }, []);


    const handleTourChange = (e) => {
        const selectedId = e.target.value;
        setTourId(selectedId);
        
        // Find and store the selected tour object
        const tour = tours.find(t => t.id === parseInt(selectedId));
        setSelectedTour(tour);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const newReserva = {
            cliente,
            fechaReserva,
            tourId: parseInt(tourId),
            tour: selectedTour  
        };

        try {
            const response = await fetch(`${API_URL}/reserva`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReserva),
            });

            if (response.ok) {
                alert('Reserva realizada exitosamente!');
                navigate('/reservas'); 
            } else {
                alert('Error al realizar la reserva.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar realizar la reserva.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Cliente:</label>
                <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} required />
            </div>
            <div>
                <label>Fecha de Reserva:</label>
                <input type="date" value={fechaReserva} onChange={(e) => setFechaReserva(e.target.value)} required />
            </div>
            <div>
                <label>Tour:</label>
                <select value={tourId} onChange={handleTourChange} required>
                    <option value="">Selecciona un tour</option>
                    {tours.map(tour => (
                        <option key={tour.id} value={tour.id}>
                            {tour.nombre} - {tour.destino}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Reservar Tour</button>
        </form>
    );
}

export default AddReserva;