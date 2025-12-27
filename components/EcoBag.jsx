export default function EcoBag() {
  return (
    <section id="product" className="section">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          MAK Eco Bag
        </h2>

        <p className="mt-6 text-text-secondary leading-relaxed">
          MAK Eco Bag is a sustainable and eco-friendly solution designed to
          support a greener planet. It is made from cellulose-based biopolymer
          derived from jute — the golden fibre of Bangladesh — a renewable and
          environmentally responsible resource.
        </p>

        <p className="mt-4 text-text-secondary leading-relaxed">
          The bag degrades harmlessly into the environment, leaving no toxic
          residue behind. This innovation addresses the growing need for
          alternatives to conventional plastic products.
        </p>

        {/* Highlights */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-eco-base p-6">
            <h3 className="text-lg font-medium text-eco-dark">
              Sustainable Material
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Made from renewable jute-based biopolymer that supports a circular
              and eco-friendly lifecycle.
            </p>
          </div>

          <div className="border border-eco-base p-6">
            <h3 className="text-lg font-medium text-eco-dark">
              Environment Friendly
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Designed to reduce natural waste and minimize environmental
              pollution.
            </p>
          </div>

          <div className="border border-eco-base p-6">
            <h3 className="text-lg font-medium text-eco-dark">Plastic-Free</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Completely free from plastic, helping to protect land and marine
              ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
