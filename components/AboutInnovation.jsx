export default function AboutInnovation() {
  return (
    <section id="about" className="section">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          An Eco-Friendly Innovation from Jute Fibre
        </h2>

        <p className="mt-6 text-text-secondary leading-relaxed">
          MAK Eco Bag is a sustainable innovation developed from jute fibre,
          initiated as a pilot project in 2017. The objective of this innovation
          is to provide an environmentally responsible alternative to
          conventional plastic products.
        </p>

        <p className="mt-4 text-text-secondary leading-relaxed">
          This project focuses on the use of natural and renewable resources to
          reduce plastic pollution and promote sustainable practices that are
          safe for both land and marine environments.
        </p>

        <div className="mt-8 border-l-4 border-eco-base pl-4">
          <p className="text-text-secondary leading-relaxed">
            The MAK Eco Bag project was initiated under the guidance of
            <span className="font-medium text-text-primary">
              {" "}
              Dr. Mubarak Ahmad Khan
            </span>
            , a renowned Bangladeshi scientist known for his contributions to
            sustainable materials and green innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
