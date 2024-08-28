import React, { useState, useEffect } from 'react';
import { fetchTours } from '../services/api';
import { useNavigate } from 'react-router-dom';

function TourList() {
    const navigate = useNavigate();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchTours();
            setTours(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista de Tours</h2>
            <ul>
                {tours.map(tour => (
                    <li key={tour.id}>{tour.nombre} - {tour.destino}</li>
                ))}
            </ul>

            <button onClick={() =>  navigate('/reservas')}>Nueva reservar</button>
        </div>
    );
}

export default TourList;