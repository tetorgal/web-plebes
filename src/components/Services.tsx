import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

const services = [
  {
    title: "Corte de Cabello",
    description:
      "Desde estilos clásicos hasta cortes modernos y vanguardistas, adaptamos cada corte a tu personalidad, garantizando que siempre luzcas impecable.",
    image: "/service-1.jpg",
  },
  {
    title: "Afeitado",
    description:
      "Experimenta un afeitado de lujo, ya sea al ras para un look impecable o con diseño para un toque de distinción, siempre con la precisión que te mereces.",
    image: "/service-2.jpg",
  },
  {
    title: "Cortes para Mujer",
    description:
      "Realza tu belleza con cortes que combinan elegancia y estilo. Desde lo clásico hasta lo contemporáneo, cuidamos cada detalle para que reflejes lo mejor de ti.",
    image: "/service-3.jpg",
  },
];

export default function Services() {
  return (
    <section className="container mx-auto" id="services">
      <div className=" py-24">
        <div className="space-y-6 mb-8">
          <h2 className="text-5xl font-extrabold text-center ">
            Nuestros Servicios
          </h2>
          <p className="text-2xl font-normal text-balance text-center">
            En Rival Peluquería y Barbería, ofrecemos más que simples cortes.
            Cada servicio está diseñado para brindarte una experiencia única y
            personalizada, adaptada a tu estilo y necesidades.
          </p>
        </div>

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
      </div>
    </section>
  );
}
