export default function FeatureDiagram() {
  const features = [
    "100% Natural",
    "100% Compostable",
    "100% Water Soluble",
    "100% Biodegradable",
    "0% Plastic",
    "0% Harmful Materials",
    "No Fume & No Corrosive Gas",
    "Simple Production Process",
    "Produces Ash After Burning",
    "1.6× Higher Tensile Strength than Polyethylene",
  ];

  return (
    <section className="section section-light">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          Key Features of MAK Eco Bag
        </h2>

        <p className="mt-4 text-text-secondary">
          A biodegradable biopolymer solution designed to replace single-use
          plastic bags safely and sustainably.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* LEFT FEATURES */}
        <div className="space-y-4">
          {features.slice(0, 5).map((item, i) => (
            <div
              key={i}
              className="border border-eco-base p-3 text-sm text-text-secondary transition-all duration-300 hover:border-hover-eco"
            >
              {item}
            </div>
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/features/mak-eco-bag-diagram.png"
            alt="MAK Eco Bag feature diagram"
            className="w-64 md:w-72 transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-4">
          {features.slice(5).map((item, i) => (
            <div
              key={i}
              className="border border-eco-base p-3 text-sm text-text-secondary transition-all duration-300 hover:border-hover-eco"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
