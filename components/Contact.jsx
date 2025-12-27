export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-eco-dark">
          Contact Information
        </h2>

        <p className="mt-6 text-text-secondary leading-relaxed">
          For inquiries, collaboration, or further information regarding the MAK
          Eco Bag initiative, please feel free to contact us.
        </p>

        <div className="mt-8 border border-eco-base p-6">
          <p className="text-text-secondary">
            <span className="font-medium text-text-primary">Project:</span>{" "}
            ECO-FIBER
          </p>

          <p className="mt-2 text-text-secondary">
            <span className="font-medium text-text-primary">Email:</span>{" "}
            <a
              href="mailto:info@ecofibre.net"
              className="text-eco-base hover:text-hover-eco transition-colors"
            >
              info@ecofibre.net
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
