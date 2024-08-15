const galleryImages = [
    "/images/style1.jpg",
    "/images/style2.jpg",
    // Añadir más imágenes según sea necesario
  ];
  
  export default function Gallery() {
    return (
      <section>
        <h2>Galería de Trabajos</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Estilo ${index + 1}`} />
          ))}
        </div>
      </section>
    );
  }
  