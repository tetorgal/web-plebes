import { Card, CardBody } from "@nextui-org/react"; // Import NextUI Card
import { FaQuoteLeft, FaQuoteRight, FaUser } from "react-icons/fa";

const testimonials = [
  { quote: "Las hamburguesas son deliciosas y el servicio es inmejorable.", author: "Juan Pérez" },
  { quote: "¡La mejor hamburguesa que he probado en mucho tiempo! Totalmente recomendable.", author: "María López" },
  {
    quote: "Un lugar increíble con un servicio amable y rápido. Siempre es un placer venir a Plebes Burger.",
    author: "Pedro Martínez",
  },
  {
    quote: "La atención al cliente es excelente, y las hamburguesas son simplemente perfectas.",
    author: "Roberto Fernandez",
  },
];

export default function Testimonials() {
  return (
    <section className="container mx-auto py-24" id="testimonials">
      <div className="space-y-6 mb-6">
        <h2 className="text-5xl font-extrabold mb-4 text-center">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-3xl text-center">
          Conoce las experiencias de quienes nos eligen para disfrutar las mejores hamburguesas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="shadow-lg p-6 hover:cursor-pointer"
            isHoverable
          >
            <CardBody>
              <blockquote className="flex items-center">
                <FaQuoteLeft className="text-lg text-gray-500 mr-2" />
                <p className="text-lg">{testimonial.quote}</p>
                <FaQuoteRight className="text-lg text-gray-500 ml-2" />
              </blockquote>
              <div className="mt-2 text-sm text-gray-600 flex items-end justify-end">
                <FaUser className="text-lg text-gray-500 mr-1" />
                {testimonial.author}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
