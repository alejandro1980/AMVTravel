import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TourList from './components/TourList';
import ReservaList from './components/ReservaList';
import AddTour from './components/AddTour';
import AddReserva from './components/AddReserva';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/reservas" element={<ReservaList />} />
        <Route path="/add-tour" element={<AddTour />} />
        <Route path="/add-reserva" element={<AddReserva />} />
      </Routes>
    </Router>
  );
}

export default App;