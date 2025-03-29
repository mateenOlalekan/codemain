import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 lg:px-8 mt-4">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center bg-white lg:rounded-full lg:border lg:shadow-md py-3 px-5 lg:px-8 transition-all">
        {/* Logo */}
        <a href="/" className="lg:text-2xl text-xl font-bold text-black">
          <span className="text-blue-500">Olale</span>kan
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="relative text-base font-medium text-gray-900 hover:text-blue-600 transition-all after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:bottom-[-3px] after:left-0 after:transition-all hover:after:w-full"
            >
              {name}
            </a>
          ))}
          <a
            href="/"
            className="border-2 bg-blue-500 text-white rounded-full py-2 px-5 text-base font-medium hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="lg:hidden text-2xl text-blue-600"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
      >
        {navLinks.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            onClick={toggleMenu}
            className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-all"
          >
            {name}
          </a>
        ))}
        <a
          href="/"
          onClick={toggleMenu}
          className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;
