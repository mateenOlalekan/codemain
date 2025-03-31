import { FaDownload, FaEye } from "react-icons/fa";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./SocialLinks";
import Social from "./Social";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaBootstrap,
  FaLaptopCode, FaPalette, FaBriefcase, FaUserGraduate, FaTools, 
  FaEnvelope, FaLinkedinIn, FaTwitter, FaExternalLinkAlt
} from "react-icons/fa";


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

    <div className="  px-5 lg:px-10 flex lg:flex-row justify-between items-center gap-8 lg:gap-16 transition-all duration-1000 mt-36">

    <div className="flex flex-col md:items-center items-start w-full space-y-6 lg:space-y-8 gap-4">
    <span className=" md:text-center text-blue-600 font-semibold mb-2 bg-blue-100 px-4 py-1 rounded-full">
              Web Developer & Designer
    </span>
            <h1 className="font-semibold md:text-center text-gray-900 leading-tight mb-2">
              <p className='text-2xl'>Hello, I'm</p><br />
              <span className="text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Abdul-Matin Olalekan
              </span>
            </h1>
      <p className="text-[16px] sm:text-base md:text-center lg:text-lg text-gray-600 leading-relaxed max-w-5xl">
        I transform ideas into intuitive, accessible, and visually stunning web applications. 
        With a keen eye for design and technical expertise, I build seamless user interfaces 
        that deliver meaningful results for businesses and delight users. I transform creative 
        ideas into exceptional digital experiences with a focus on intuitive design and clean code.
      </p>
      <div className="flex flex-wrap gap-2 ">
      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-1 rounded-lg text-lg font-medium flex items-center gap-2 shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl">
      <FaEye/> Let's Talk
      </button>
      <button className="bg-white text-blue-500 border-2 border-blue-500 hover:from-blue-700 hover:to-indigo-700  px-3 py-1 rounded-lg text-lg font-medium flex items-center gap-2 shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl">
        <FaDownload /> Download CV
      </button>

      </div>
      <div className=" max-md:hidden block">
      <SocialLinks />
      </div> 
      </div>
      <div className="md:hidden block">
      <Social />
      </div>
    </div>
  );
};

export default Home;
