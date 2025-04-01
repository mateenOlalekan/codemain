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
  const resume = "https://drive.google.com/file/d/1ry2-7qFPugX0kU-YX-KOvZMLcGGO9zL4/view?usp=sharing";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50  lg:px-8 md:mt-4 mt-6">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center bg-white lg:rounded-full  backdrop-blur-md lg:shadow-sm max-lg:border-none shadow-none  border-2 border-gray-200  py-2 px-5 lg:px-8 transition-all">
        {/* Logo */}
        <a href="/" className="lg:text-2xl md:text-xl text-lg font-semibold text-black">
          <span className="text-blue-500">Olale</span>kan
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center  gap-8">
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
          target="_blank"
          rel="noopener noreferrer"
            href={resume}
            className="border-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full py-2 px-5 text-base font-medium   transition-all"
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
          target="_blank"
          rel="noopener noreferrer"
            href={resume}
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
