export default async (req, res) => {
    if (req.method === 'POST') {
      const { service, barber, date, clientName, clientEmail } = req.body;
      // Aquí guardarías la cita en una base de datos, por ejemplo
      res.status(200).json({ message: 'Cita agendada exitosamente' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  };
  