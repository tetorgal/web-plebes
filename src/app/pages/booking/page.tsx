'use client'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Booking() {
  const [service, setService] = useState('');
  const [barber, setBarber] = useState('');
  const [date, setDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service, barber, date, clientName, clientEmail }),
    });
    if (response.ok) {
      alert('Cita agendada exitosamente!');
    } else {
      alert('Hubo un error al agendar la cita.');
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <h1>Agendar Cita</h1>
        <form onSubmit={handleSubmit}>
          <label>Servicio</label>
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="Corte de Cabello">Corte de Cabello</option>
            <option value="Afeitado">Afeitado</option>
            {/* Añadir más opciones según sea necesario */}
          </select>

          <label>Barbero</label>
          <select value={barber} onChange={(e) => setBarber(e.target.value)}>
            <option value="Juan Pérez">Juan Pérez</option>
            {/* Añadir más barberos según sea necesario */}
          </select>

          <label>Fecha y Hora</label>
          <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />

          <label>Nombre</label>
          <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required />

          <label>Email</label>
          <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required />

          <button type="submit">Agendar Cita</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
