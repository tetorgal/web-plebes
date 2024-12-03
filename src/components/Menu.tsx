import { Image } from "@nextui-org/react";

const menuItems = [
  {
    name: "Hamburguesa Clásica",
    description: "Carne 100% de res con lechuga, tomate, queso cheddar y pan artesanal.",
    price: "$120 MXN",
    image: "/images/hamburguesa-clasica.jpg",
  },
  {
    name: "Hamburguesa BBQ",
    description: "Carne de res bañada en salsa BBQ con tocino, queso suizo y cebolla caramelizada.",
    price: "$150 MXN",
    image: "/images/hamburguesa-bbq.jpg",
  },
  {
    name: "Papas a la Francesa",
    description: "Crujientes papas fritas servidas con kétchup y aderezo ranch.",
    price: "$50 MXN",
    image: "/images/papas-fritas.jpg",
  },
  {
    name: "Hot Dog Especial",
    description: "Salchicha premium con queso derretido, tocino y salsa especial.",
    price: "$90 MXN",
    image: "/images/hotdog-especial.jpg",
  },
];

export default function Menu() {
  return (
    <section className="container mx-auto py-24" id="menu">
      {/* Encabezado del Menú */}
      <div className="space-y-6 mb-6">
        <h2 className="text-5xl font-extrabold mb-4 text-center">
          Nuestro Menú
        </h2>
        <p className="text-3xl text-center">
          Descubre nuestras especialidades preparadas con los mejores ingredientes.
        </p>
      </div>

      {/* Contenedor grid para los items del menú */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-lg mb-4 object-cover"
              width="100%"
              height="200px"
            />
            <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-orange-500">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
