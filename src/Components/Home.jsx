import { useState, useEffect, useRef } from "react";
import {
  FaDownload,
  FaEye,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import profileImage from "../assets/me.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const typedRef = useRef(null);
  const heroImageRef = useRef(null);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroImageRef.current) {
      observer.observe(heroImageRef.current);
    }

    return () => {
      if (heroImageRef.current) {
        observer.unobserve(heroImageRef.current);
      }
    };
  }, []);

  // Typed.js animation
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend Developer", "Backend Developer", "IT Support Engineer"],
      typeSpeed: 85,
      backSpeed: 70,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToNextSection = () => {
    const nextSection =
      document.getElementById("project") ||
      document.querySelector("[data-section='project']");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      data-section="home"
      className="relative min-h-screen flex flex-col justify-center pt-16 md:pt-0 overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Decorative backgrounds */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-black rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          {/* Left Section */}
          <div
            className="flex flex-col items-start w-full lg:w-1/2 space-y-6 md:space-y-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex items-center space-x-2">
              <div className="h-1 w-10 bg-blue-600 rounded"></div>
              <span className="text-blue-600 font-semibold bg-blue-100 px-4 py-1 rounded-full">
                <span ref={typedRef}></span>
              </span>
            </div>

            <h1 className="font-bold text-gray-900 leading-tight">
              <p className="text-xl md:text-2xl">Hello, I'm</p>
              <span className="text-2xl lg:text-3xl xl:text-5xl block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Abdul-Matin Olalekan
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              I transform ideas into intuitive, accessible, and visually stunning
              web applications. With a keen eye for design and technical
              expertise, I build seamless user interfaces that drive results and
              delight users.
            </p>

            <div className="flex flex-wrap gap-4 mt-4" id="contact">
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <FaEye className="text-lg" /> Let's Talk
              </button>

              <a
                href="https://drive.google.com/file/d/1mBCFAo-yiRiI5bHYj1lhrJS8niAMLsC_/view?usp=drive_link"
                className="bg-white text-blue-600 border-2 border-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <FaDownload className="text-lg" /> Download CV
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex mt-6 gap-6">
              <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <FaHtml5 />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <FaCss3Alt />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    <FaJsSquare />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white">
                    <FaReact />
                  </div>
                </div>
                <span className="text-sm text-gray-600">Tech Stack</span>
              </div>
            </div>
          </div>

          {/* Right Section - Hero Image */}
          <div
            ref={heroImageRef}
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className={`relative transition-all duration-1000 ease-in-out ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-100">
                    <img
                      src={profileImage}
                      alt="Abdul-Matin Olalekan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 right-0 bg-white rounded-lg shadow-xl p-3 animate-bounce">
                <div className="text-center">
                  <p className="text-blue-600 font-bold text-xl">2+</p>
                  <p className="text-gray-600 text-xs">Years Experience</p>
                </div>
              </div>

              {/* Project Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3">
                <div className="text-center">
                  <p className="text-blue-600 font-bold text-xl">10+</p>
                  <p className="text-gray-600 text-xs">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Button */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNextSection}
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-md p-3 hover:bg-white transition-colors duration-300">
            <HiArrowDown className="text-blue-600 text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
