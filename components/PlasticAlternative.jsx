export default function PlasticAlternative() {
  return (
    <section className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
            Alternative to Single-Use Plastic Bag
          </h2>

          <p className="mt-6 text-text-secondary leading-relaxed">
            The MAK Eco Bag is famed for its water-soluble feature, which allows
            it to dissolve safely in both regular and marine water within seven
            (7) days.
          </p>

          <p className="mt-4 text-text-secondary leading-relaxed">
            In landfill conditions, the bag decomposes naturally within one
            hundred twenty (120) days. Its liquid casting production process
            enables efficient recycling and allows the same machinery to be used
            for transforming previously used bags.
          </p>

          <ul className="mt-6 space-y-3 text-text-secondary">
            <li>• Dissolves in water within seven (7) days</li>
            <li>
              • Decomposes in landfill within one hundred twenty (120) days
            </li>
            <li>• Marine-safe and environmentally responsible</li>
            <li>• Efficient recycling through liquid casting</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/images/product/mak-eco-bag-water-soluble.jpg"
            alt="Water soluble MAK Eco Bag"
            className="w-full rounded-md object-cover transition-all duration-300 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
