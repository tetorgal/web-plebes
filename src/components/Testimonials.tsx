import { Card, CardBody } from "@nextui-org/react"; // Import NextUI Card
import { FaQuoteLeft, FaQuoteRight, FaUser } from "react-icons/fa";


const testimonials = [
  { quote: "Excelente servicio!", author: "Juan Pérez" },
  { quote: "El mejor corte que he tenido.", author: "María López" },
  // Añadir más testimonios según sea necesario
];

export default function Testimonials() {
  return (
    <section className="container mx-auto py-24" id="testimonials">
   
   <div className="space-y-6 mb-6">
   <h2 className="text-5xl font-extrabold mb-4 text-center">Testimonios</h2>
   <p className="text-3xl text-center">Conoce los blababaalaba</p>
   </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg p-6 hover:cursor-pointer" isHoverable>
              <CardBody>
                <blockquote className="flex items-center">
                  <FaQuoteLeft className="text-lg text-gray-500 mr-2" />
                  <p className="text-lg">{testimonial.quote}</p>
                  <FaQuoteRight className="text-lg text-gray-500 ml-2"/>
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
