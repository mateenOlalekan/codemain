import { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { Codesandbox } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#project", id: "project" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const RESUME_LINK = "https://drive.google.com/file/d/1mBCFAo-yiRiI5bHYj1lhrJS8niAMLsC_/view?usp=drive_link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navbarRef = useRef(null);

  const detectActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);
    
    const currentSection = NAV_LINKS.reduce((current, { id }) => {
      const section = document.getElementById(id) || document.querySelector(`[data-section="${id}"]`);
      if (!section) return current;
      
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      return scrollPosition >= sectionTop && scrollPosition < sectionBottom ? id : current;
    }, "home");
    
    setActiveSection(currentSection);
  }, []);

  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId) || document.querySelector(`[data-section="${targetId}"]`);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", detectActiveSection);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", detectActiveSection);
      window.removeEventListener("resize", handleResize);
    };
  }, [detectActiveSection]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-0" : "py-4"
      }`}
    >
      <div 
        className={`mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl" 
            : "bg-transparent backdrop-blur-0 rounded-t-lg"
        } transition-all duration-300 py-4`}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex justify-center items-center gap-2 group"
        >
          <div className="relative animate-spin">
            <Codesandbox 
              size={30} 
              className="text-blue-600 transition-all group-hover:animate-spin duration-500 group-hover:rotate-90" 
            />
            <div className="absolute -inset-1 bg-blue-100 rounded-full -z-10 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300" />
          </div>
          <div className="flex text-3xl items-center">
            <span className="text-slate-600 font-bold">Ola</span>
            <span className="text-blue-600 font-bold">lekan</span>  
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ name, href, id }) => (
            <a
              key={name}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className={`relative text-base font-medium ${
                activeSection === id ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
              } transition-all duration-300 px-2 py-1`}
            >
              {name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                activeSection === id ? "scale-x-100" : "scale-x-0"
              }`} />
            </a>
          ))}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_LINK}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white hover:from-blue-700 hover:to-blue-700 rounded-full py-2 px-5 text-base font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
          >
            <FaDownload className="text-sm" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full ${
            scrolled ? "bg-blue-100 text-blue-600" : "bg-white backdrop-blur-md text-blue-600"
          } transition-all hover:bg-blue-200`}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } z-40`}
      >
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <Codesandbox className="text-blue-600" />
          <div className="flex">
            <span className="text-gray-900 font-bold">Ola</span>
            <span className="text-blue-600 font-bold">Lekan</span>  
          </div>
        </div>
        
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-6 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 transition-all hover:bg-blue-200"
        >
          <FaTimes />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(({ name, href, id }, index) => (
            <a
              key={name}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className={`text-xl font-medium ${
                activeSection === id ? "text-blue-600" : "text-gray-800"
              } hover:text-blue-600 transition-all transform hover:scale-110`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)" 
              }}
            >
              {name}
            </a>
          ))}
        </div>
        
        <div 
          className="mt-8"
          style={{ 
            transitionDelay: "400ms",
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)" 
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_LINK}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20" />
      </div>
    </header>
  );
};

export default Navbar;