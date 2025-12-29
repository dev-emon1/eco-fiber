export default function EcoBag() {
  return (
    <section id="product" className="section">
      <div className="space-y-24">
        {/* BLOCK 1 — Product Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
              MAK Eco Bag
            </h2>

            <p className="mt-6 text-text-secondary leading-relaxed">
              Introducing the MAK Eco Bag — a sustainable solution and an
              eco-friendly companion for a greener planet. It is made from
              cellulose-based biopolymer derived from jute, the golden fibre of
              Bangladesh.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Jute is a renewable natural resource, and the MAK Eco Bag degrades
              harmlessly into the environment, leaving no trace behind. This
              innovation directly addresses the environmental challenges caused
              by single-use plastic products.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/product/mak-eco-bag-main.png"
              alt="MAK Eco Bag made from jute biopolymer"
              className="w-full rounded-md object-cover transition-all duration-300 hover:opacity-90"
            />
          </div>
        </div>

        {/* BLOCK 2 — Made Better for Environment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div>
            <img
              src="/images/product/mak-eco-bag-environment.png"
              alt="MAK Eco Bag supporting a better environment"
              className="w-full rounded-md object-cover transition-all duration-300 hover:opacity-90"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-eco-dark">
              MAK Eco Bag Made Better for Environment
            </h3>

            <p className="mt-6 text-text-secondary leading-relaxed">
              MAK Eco Bag is made and crafted with care to support a better
              environment. The innovative creation is designed with the goal of
              reducing natural waste and promoting sustainability.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              By embracing environmentally responsible materials and production
              processes, MAK Eco Bag becomes an active part of the solution for
              a greener and cleaner world.
            </p>
          </div>
        </div>

        {/* BLOCK 3 — Plastic Free & Biodegradable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-eco-dark">
              Completely Plastic-Free & Biodegradable
            </h3>

            <p className="mt-6 text-text-secondary leading-relaxed">
              MAK Eco Bag is a true game-changer. It is completely plastic-free
              and biodegradable, embodying a strong commitment to protecting the
              planet.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              This innovation encourages the transition away from harmful
              plastics and supports a sustainable future where products return
              safely to nature after use.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/product/mak-eco-bag-plastic-free.png"
              alt="Plastic free and biodegradable MAK Eco Bag"
              className="w-full rounded-md object-cover transition-all duration-300 hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
