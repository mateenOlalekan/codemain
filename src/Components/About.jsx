import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImage from "../assets/me.jfif";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt,FaUserGraduate, FaGithub, FaNodeJs, FaBootstrap,
 FaTools
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiRedux, SiSass,SiMongodb, SiFirebase, SiFigma
} from "react-icons/si";




const Portfolio = () => {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Skills with icons from react-icons
  const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-2xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-2xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-2xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-2xl" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400 text-2xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600 text-2xl" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-400 text-2xl" /> },
  ];





  return (
    <div className="flex items-center justify-center overflow-hidden py-10" id="about">
      <div 
        className="w-full flex flex-col justify-center items-center px-6 lg:px-20" 
        data-aos="fade-up"
      >
        {/* Header with subtle background pattern */}
        <div className="text-center p-5 border-gray-200 mb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 relative inline-block">
            About <span className="text-blue-600">ME</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
          </h1>
        </div>

        {/* Main Content with developer image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl">
          {/* Developer Image Column */}
          <div className="lg:col-span-4 flex justify-center items-center" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Developer" 
                  className="w-full max-w-sm rounded-lg shadow-2xl object-cover"
                />
                
                {/* Tech stack floating icons */}
                <div className="absolute -right-4 -top-4 bg-blue-600 text-white p-3 rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="300">
                  <FaReact className="text-2xl animate-spin-slow" />
                </div>
                <div className="absolute -left-4 top-20 bg-yellow-500 text-white p-2 rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                  <FaJsSquare className="text-xl" />
                </div>
                <div className="absolute -right-2 bottom-32 bg-teal-500 text-white p-2 rounded-full shadow-lg" data-aos="zoom-in" data-aos-delay="500">
                  <SiTailwindcss className="text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* About Me Column */}
          <div className="lg:col-span-8 space-y-8" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white p-3 rounded-full mr-4">
                  <FaUserGraduate className="text-xl" />
                </span>
                <h2 className="text-2xl font-bold text-gray-800">Who I Am</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate web developer and graphic designer currently pursuing my undergraduate degree in graphics design. With a keen eye for detail and a love for clean code, I specialize in creating engaging digital experiences that combine aesthetics with functionality.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                I enjoy building everything from small business sites to interactive web applications, focusing on responsive design, performance, and accessibility. My approach combines modern design principles with robust technical implementation to deliver exceptional user experiences.
              </p>


            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white p-3 rounded-full mr-4">
                  <FaTools className="text-xl" />
                </span>
                <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center gap-1 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all hover:shadow-md border border-gray-100 transform hover:-translate-y-1"
                    data-aos="zoom-in"
                    data-aos-delay={30 * index}
                  >
                    {tech.icon}
                    <p className="text-xs font-medium text-gray-700">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Portfolio;