export default function Hero() {
  return (
    <section className="section section-light pt-28" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-eco-dark leading-tight">
            MAK Eco Bag for a Better World <br className="hidden sm:block" />&
            Green Environment
          </h1>

          <p className="mt-5 text-lg text-text-secondary max-w-xl">
            An eco-friendly innovation from jute fibre. This project was
            initiated as a pilot initiative in 2017 with the vision of reducing
            plastic pollution and promoting sustainable alternatives.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#inventor"
              className="px-6 py-3 text-sm font-medium text-white bg-eco-base hover:bg-hover-eco transition-colors duration-300"
            >
              About the Inventor
            </a>

            <a
              href="#product"
              className="px-6 py-3 text-sm font-medium text-eco-dark border border-eco-base hover:text-hover-eco transition-colors duration-300"
            >
              Explore the Product
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="/images/hero/eco-bag.webp"
            alt="MAK Eco Bag made from jute biopolymer"
            className="w-full rounded-md object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
