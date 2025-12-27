const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="section section-light">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          Gallery
        </h2>

        <p className="mt-4 max-w-2xl text-text-secondary">
          A visual overview of the MAK Eco Bag initiative, showcasing product
          development, materials, and sustainable applications.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="border border-eco-base overflow-hidden">
              <img
                src={src}
                alt={`MAK Eco Bag gallery image ${index + 1}`}
                className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
