export default function Significance() {
  return (
    <section className="section section-light">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          Significance of MAK Eco Bag
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-text-secondary leading-relaxed">
          MAK Eco Bag represents a breakthrough in biodegradable biopolymer
          innovation. It combines environmental responsibility with functional
          strength, offering a sustainable alternative to conventional plastic
          materials.
        </p>

        {/* Significance Points */}
        <ul className="mt-8 space-y-4 text-text-secondary">
          <li>
            • MAK Eco Bag is a biodegradable biopolymer made from jute cellulose
          </li>
          <li>
            • Totally biodegradable, compostable, water soluble, recyclable, and
            sustainable
          </li>
          <li>
            • Does not melt in fire like plastic materials; produces ash during
            incineration
          </li>
          <li>
            • Can be customized as per consumer requirements (water soluble,
            water resistant, etc.)
          </li>
          <li>• Raw materials are renewable and abundantly available</li>
          <li>
            • Production processes are simple and environmentally friendly
          </li>
        </ul>

        {/* Divider */}
        <div className="my-12 border-t border-eco-base opacity-40"></div>

        {/* Use Cases */}
        <h3 className="text-xl md:text-2xl font-semibold text-eco-dark">
          Practical Applications & Use Cases
        </h3>

        <p className="mt-4 max-w-3xl text-text-secondary">
          MAK Eco Bag is designed for versatile use across multiple industries
          and everyday applications.
        </p>

        {/* Use Case Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Shopping bags",
            "Garbage bags",
            "RMG packaging",
            "Mulching & germination sheets",
            "Banners",
            "Tree pots",
            "Table covers",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-eco-base p-4 text-sm text-text-secondary transition-all duration-300 hover:border-hover-eco"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
