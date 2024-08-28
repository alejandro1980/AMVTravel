const API_URL = "http://localhost:5240/api";  // Cambia la URL según sea necesario

export async function fetchTours() {
    const response = await fetch(`${API_URL}/tour`);
    return await response.json();
}

export async function addTour(tour) {
    const response = await fetch(`${API_URL}/tour`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tour)
    });
    return response.json();
}

export async function fetchReservas() {
    const response = await fetch(`${API_URL}/reserva`);
    return await response.json();
}

export async function addReserva(reserva) {
    const response = await fetch(`${API_URL}/reserva`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reserva)
    });
    return response.json();
}

export async function deleteReserva(id) {
    const response = await fetch(`${API_URL}/reserva/${id}`, {
        method: 'DELETE'
    });
    return  fetch(`${API_URL}/reserva`);
}

