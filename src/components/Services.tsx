import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const services = [
  {
    title: "Corte de Cabello",
    description: "Estilo moderno y clásico.",
    image: "/service-1.jpg",
  },
  {
    title: "Afeitado",
    description: "Afeitado al ras o con diseño.",
    image: "/service-2.jpg",
  },
  {
    title: "Cortes para Mujer",
    description: "Estilo moderno y clásico.",
    image: "/service-3.jpg"
  }
];

export default function Services() {
  return (
    <section className="container mx-auto" id="services">
      <h2 className="text-5xl font-extrabold text-center mb-8 py-24">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map((service, index) => (
          <Card isHoverable isPressable key={index}>
            <CardHeader>
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover w-full"
              ></Image>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
