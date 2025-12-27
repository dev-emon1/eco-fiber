export default function JuteBiopolymer() {
  return (
    <section id="jute" className="section section-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
            Jute as a Biopolymer
          </h2>

          <p className="mt-6 text-text-secondary leading-relaxed">
            Jute is one of the most important crops of Bangladesh and a rich
            natural source of biopolymer materials. It contains high levels of
            cellulose, hemicellulose, and lignin — the key components required
            for producing biodegradable and sustainable materials.
          </p>

          {/* Composition */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-eco-base p-4 text-center">
              <p className="text-xl font-semibold text-eco-dark">62%</p>
              <p className="mt-1 text-sm text-text-secondary">Cellulose</p>
            </div>

            <div className="border border-eco-base p-4 text-center">
              <p className="text-xl font-semibold text-eco-dark">22.2%</p>
              <p className="mt-1 text-sm text-text-secondary">Hemicellulose</p>
            </div>

            <div className="border border-eco-base p-4 text-center">
              <p className="text-xl font-semibold text-eco-dark">12.5%</p>
              <p className="mt-1 text-sm text-text-secondary">Lignin</p>
            </div>
          </div>
        </div>

        {/* Right: Environmental Benefits */}
        <div>
          <h3 className="text-xl font-semibold text-eco-dark">
            Environmental Contributions of Jute
          </h3>

          <ul className="mt-6 space-y-3 text-text-secondary">
            <li>• Increases the fertility of land</li>
            <li>• Absorbs CO₂ and emits O₂</li>
            <li>• Helps to make air cleaner</li>
            <li>• Preserves the ozone layer</li>
            <li>• One hectare of jute absorbs up to 15 tons of CO₂</li>
            <li>• Has a strong positive impact on the environment</li>
            <li>
              • Used in vegetables, geotextiles, biogas, and biodegradable
              products
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
