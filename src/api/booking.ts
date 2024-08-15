export default async (req: { method: string; body: { service: any; barber: any; date: any; clientName: any; clientEmail: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
    if (req.method === 'POST') {
      const { service, barber, date, clientName, clientEmail } = req.body;
      // Aquí guardarías la cita en una base de datos, por ejemplo
      res.status(200).json({ message: 'Cita agendada exitosamente' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  };
  