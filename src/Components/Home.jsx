import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks"; // Import SocialLinks component
import shock from "../assets/me.jfif";

const Home = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white pb-3 sm:pb-4 lg:pb-6">
      {/* Hero Section */}
      <section className="flex items-center justify-between bg-white max-lg:pt-40 max-lg:pb-20">
        {/* Hero Image */}
        <div
          className="max-lg:w-full lg:w-2/5 h-screen max-lg:hidden lg:block bg-cover bg-center"
          style={{ backgroundImage: `url(${shock})` }}
          data-aos="fade-right"
        ></div>

        {/* Hero Content */}
        <div
  className="max-lg:w-full lg:w-4/5 px-5 lg:px-10 flex lg:flex-row justify-between items-center gap-8 lg:gap-16 transition-all duration-1000"
  data-aos="fade-up"
>
  {/* Left Content */}
  <div className="flex flex-col items-start w-full space-y-6 lg:space-y-8">
    <p className="text-blue-600 text-lg font-medium tracking-wide">Hello, I'm</p>
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
      Abdul-Matin Olalekan.
    </h1>
    <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-gray-700">
      <span className="text-blue-600">Frontend Developer</span> crafting exceptional digital experiences.
    </h2>
    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
      I transform ideas into intuitive, accessible, and visually stunning web applications. 
      With a keen eye for design and technical expertise, I build seamless user interfaces 
      that deliver meaningful results for businesses and delight users.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-4 mt-2">
      <a
        href="#contact"
        className="flex justify-center items-center px-6 py-3 text-sm bg-blue-600 text-white  rounded-full transition-all duration-300 "
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Contact Me
      </a>
      <a
        href="#projects"
        className="flex justify-center items-center px-6 py-3 bg-gray-800 text-white text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        View My Work
      </a>
      <a
        href="#resume"
        className="flex items-center px-6 py-3 border-2 gap-2 border-blue-600 text-blue-600 text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:bg-blue-50 hover:shadow-md"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <span>Download CV</span> <FaDownload />
      </a>
    </div>
  </div>

  {/* Right Content - Social Icons */}
  <SocialLinks />
</div>
      </section>
    </div>
  );
};

export default Home;
