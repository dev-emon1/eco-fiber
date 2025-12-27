"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-eco-dark">
          ECO<span className="text-eco-base">-FIBER</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
          <a href="#about" className="hover:text-hover-eco transition-colors">
            About
          </a>
          <a href="#jute" className="hover:text-hover-eco transition-colors">
            Jute
          </a>
          <a href="#product" className="hover:text-hover-eco transition-colors">
            MAK Eco Bag
          </a>
          <a href="#gallery" className="hover:text-hover-eco transition-colors">
            Gallery
          </a>
          <a href="#contact" className="hover:text-hover-eco transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
