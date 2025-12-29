const rows = [
  {
    //  rowTitle: "Research & Raw Materials",
    sections: [
      {
        title: "Research & Innovation",
        images: [
          "/images/gallery/research-1.webp",
          "/images/gallery/research-2.webp",
        ],
      },
      {
        title: "Jute Cultivation & Raw Materials",
        images: ["/images/gallery/jute-1.jpg", "/images/gallery/jute-2.jpg"],
      },
    ],
  },
  {
    //  rowTitle: "Product Development & Usage",
    sections: [
      {
        title: "MAK Eco Bag – Product",
        images: [
          "/images/gallery/product-1.webp",
          "/images/gallery/product-2.webp",
        ],
      },
      {
        title: "Practical Usage",
        images: [
          "/images/gallery/usage-1.webp",
          "/images/gallery/usage-2.webp",
        ],
      },
    ],
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section section-light">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark text-center">
          Gallery
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center text-text-secondary">
          A visual overview of the MAK Eco Bag initiative—from research and jute
          cultivation to product development and real-world applications.
        </p>

        {/* ROWS */}
        <div className="mt-16 space-y-28">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {/* Row Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-eco-dark text-center">
                {row.rowTitle}
              </h3>

              {/* Two Sections per Row */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-14">
                {row.sections.map((section, idx) => (
                  <GalleryBlock key={idx} section={section} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   Reusable Gallery Block
---------------------------- */
function GalleryBlock({ section }) {
  return (
    <div>
      {/* Section Title */}
      <h4 className="text-lg md:text-xl font-medium text-eco-dark text-center">
        {section.title}
      </h4>

      {/* Images */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {section.images.map((src, i) => (
          <div
            key={i}
            className="group border border-eco-base p-4 h-64 flex items-center justify-center transition-all duration-300 hover:border-hover-eco"
          >
            <img
              src={src}
              alt={`${section.title} image ${i + 1}`}
              className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
