export default function Footer() {
  return (
    <footer className="bg-eco-dark text-white">
      <div className="container py-12 text-center">
        <h2 className="text-lg font-semibold">ECO-FIBRE</h2>

        <p className="text-sm mt-2 opacity-90">
          MAK Eco Bag – For a Better World & Green Environment
        </p>

        <p className="text-sm mt-4">
          Contact: <span className="font-medium">info@ecofibre.net</span>
        </p>

        <p className="text-xs mt-6 opacity-70">
          © {new Date().getFullYear()} ECO-FIBRE. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
