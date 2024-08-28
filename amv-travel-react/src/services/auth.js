export async function login(credentials) {
    const API_URL = "http://localhost:5240/api"; 
    const response = await fetch(`http://localhost:5240/api/Auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    //return response.json();
    return  fetch(`${API_URL}/reserva`);
}