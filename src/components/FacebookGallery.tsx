'use client';

import Marquee from 'react-fast-marquee';

// Tipo para los posts de Facebook
interface FacebookPost {
  id: string;
  content: string;
  image?: string;
  date: string;
}

// Ejemplo de posts (reemplazar con tus posts reales de Facebook)
const examplePosts: FacebookPost[] = [
  {
    id: '1',
    content: 'Hamburguesa Concentida',
    image: '/images/img1.jpeg', // Ruta relativa a la carpeta `public`
    date: '2024-03-30',
  },
  {
    id: '2',
    content: 'Hamburguesa Tremenda',
    image: '/images/img2.jpeg',
    date: '2024-03-29',
  },
  {
    id: '3',
    content: 'Hamburguesa Misteriosa',
    image: '/images/img3.jpeg',
    date: '2024-03-28',
  },
  {
    id: '4',
    content: 'Perritos',
    image: '/images/img4.jpeg',
    date: '2024-03-28',
  },
];

export default function FacebookGallery() {
  return (
    <section className="w-full py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Galería</h2>
      <Marquee
        gradient={true}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {examplePosts.map((post) => (
          <div
            key={post.id}
            className="mx-4 w-[300px] p-4 flex flex-col gap-4 bg-white shadow-md rounded-lg"
          >
            {post.image && (
              <img
                src={post.image}
                alt={`Post de Facebook ${post.id}`}
                className="w-full h-[200px] object-cover rounded-lg"
              />
            )}
            <p className="text-sm">{post.content}</p>
            <time className="text-xs text-gray-500">{post.date}</time>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

