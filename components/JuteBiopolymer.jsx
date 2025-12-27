export default function JuteBiopolymer() {
  return (
    <section id="jute" className="section section-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT: Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/jute/jute-field.jpg"
            alt="Jute field in Bangladesh"
            className="w-full h-44 object-cover rounded-md transition-all duration-300 hover:opacity-90"
          />
          <img
            src="/images/jute/raw-jute-fiber.jpg"
            alt="Raw jute fiber bundles"
            className="w-full h-44 object-cover rounded-md transition-all duration-300 hover:opacity-90"
          />
          <img
            src="/images/jute/jute-cellulose.png"
            alt="Jute cellulose fiber close up"
            className="w-full h-44 object-cover rounded-md transition-all duration-300 hover:opacity-90"
          />
          <img
            src="/images/jute/jute-cultivation.jpg"
            alt="Jute cultivation in rural Bangladesh"
            className="w-full h-44 object-cover rounded-md transition-all duration-300 hover:opacity-90"
          />
        </div>

        {/* RIGHT: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
            Jute as a Biopolymer
          </h2>

          <p className="mt-6 text-text-secondary leading-relaxed">
            Jute is one of the most important crops of Bangladesh and one of the
            highest cellulose-containing natural plants. It is a renewable and
            environmentally friendly resource, making it highly suitable for
            biopolymer production.
          </p>

          {/* Composition */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-eco-base p-4 text-center transition-all duration-300 hover:border-hover-eco">
              <p className="text-xl font-semibold text-eco-dark">62%</p>
              <p className="mt-1 text-sm text-text-secondary">Cellulose</p>
            </div>

            <div className="border border-eco-base p-4 text-center transition-all duration-300 hover:border-hover-eco">
              <p className="text-xl font-semibold text-eco-dark">22.2%</p>
              <p className="mt-1 text-sm text-text-secondary">Hemicellulose</p>
            </div>

            <div className="border border-eco-base p-4 text-center transition-all duration-300 hover:border-hover-eco">
              <p className="text-xl font-semibold text-eco-dark">12.5%</p>
              <p className="mt-1 text-sm text-text-secondary">Lignin</p>
            </div>
          </div>

          {/* Environmental Benefits */}
          <ul className="mt-8 space-y-3 text-text-secondary">
            <li>• Increases the fertility of land</li>
            <li>• Absorbs CO₂ and emits O₂</li>
            <li>• Helps to make air clean</li>
            <li>• Preserves the ozone layer</li>
            <li>• One hectare of jute plant absorbs 15 tons of CO₂</li>
            <li>• Has a strong positive impact on the environment</li>
            <li>
              • Jute is used as vegetables, geotextiles, biogas, and
              biodegradable products
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
