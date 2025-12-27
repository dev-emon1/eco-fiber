export default function Inventor() {
  return (
    <section id="inventor" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="w-[50%] mx-auto">
          <img
            src="/images/inventor/dr-mubarak-ahmad-khan.jpg"
            alt="Dr Mubarak Ahmad Khan - Inventor of MAK Eco Bag"
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
            The Inventor of MAK Eco Bag
          </h2>

          <p className="mt-6 text-text-secondary leading-relaxed">
            <span className="font-medium text-text-primary">
              Dr. Mubarak Ahmad Khan
            </span>{" "}
            is a renowned Bangladeshi scientist recognized for his significant
            contributions to jute-based polymer research and sustainable
            materials science.
          </p>

          <p className="mt-4 text-text-secondary leading-relaxed">
            The MAK Eco Bag project was initiated by Dr. Khan in 2017 as a pilot
            initiative aimed at developing biodegradable alternatives to
            single-use plastic. His research focuses on transforming jute
            cellulose into environmentally friendly biopolymer solutions.
          </p>

          <div className="mt-6 border-l-4 border-eco-base pl-4 text-text-secondary">
            Inventor and scientific pioneer behind the eco-friendly jute
            biopolymer technology used in MAK Eco Bag.
          </div>
        </div>
      </div>
    </section>
  );
}
