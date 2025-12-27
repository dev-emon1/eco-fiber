export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          Contact Information
        </h2>

        {/* Description */}
        <p className="mt-6 text-text-secondary leading-relaxed">
          For inquiries, collaboration, or further information regarding the MAK
          Eco Bag and ECO-FIBER initiative, please contact us using the details
          below.
        </p>

        {/* Contact Card */}
        <div className="mt-10 border border-eco-base px-6 inline-block w-full sm:w-auto transition-all duration-300 hover:border-hover-eco">
          <p className="mt-3 text-text-secondary">
            <span className="font-medium text-text-primary">Email:</span>{" "}
            <a
              href="mailto:info@ecofibre.net"
              className="text-eco-base hover:text-hover-eco transition-colors"
            >
              info@ecofibre.net
            </a>
          </p>

          <p className="my-3 text-text-secondary">
            <span className="font-medium text-text-primary">Phone:</span>{" "}
            <a
              href="tel:+8801819522292"
              className="text-eco-base hover:text-hover-eco transition-colors"
            >
              +880 1401-446644
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
