export default function Hero() {
  return (
    <section className="section section-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-eco-dark leading-tight">
            MAK Eco Bag
          </h1>

          <p className="mt-3 text-lg text-eco-base font-medium">
            For a Better World & Green Environment
          </p>

          <p className="mt-6 max-w-xl text-text-secondary leading-relaxed">
            MAK Eco Bag is an eco-friendly innovation from jute fibre. Developed
            as a sustainable alternative to plastic, it supports a cleaner,
            greener, and more responsible future.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#about"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-eco-base hover:bg-hover-eco transition-colors"
            >
              Learn More
            </a>

            <a
              href="#contact"
              className="inline-block px-6 py-3 text-sm font-medium text-eco-dark border border-eco-base hover:text-hover-eco transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="/images/hero/eco-bag.jpg"
            alt="MAK Eco Bag from jute fibre"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
