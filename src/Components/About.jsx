import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaUserGraduate, 
  FaGithub, FaNodeJs, FaBootstrap, FaCode, FaLaptopCode
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiRedux, SiSass, SiMongodb, 
  SiFirebase, SiFigma, SiNextdotjs
} from "react-icons/si";

const AboutMe = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting,
      { threshold: 0.1 }
    );

    if (aboutSectionRef.current) observer.observe(aboutSectionRef.current);
    return () => aboutSectionRef.current && observer.unobserve(aboutSectionRef.current);
  }, []);

  const technologies = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", bg: "bg-orange-50/80" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", bg: "bg-blue-50/80" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500", bg: "bg-yellow-50/80" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600", bg: "bg-blue-50/80" },
    { name: "React", icon: <FaReact />, color: "text-blue-400", bg: "bg-blue-50/80" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500", bg: "bg-purple-50/80" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black", bg: "bg-gray-100/80" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400", bg: "bg-teal-50/80" },
    { name: "SASS", icon: <SiSass />, color: "text-pink-400", bg: "bg-pink-50/80" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-indigo-600", bg: "bg-indigo-50/80" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", bg: "bg-green-50/80" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-600", bg: "bg-yellow-50/80" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500", bg: "bg-red-50/80" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-800", bg: "bg-gray-100/80" },
    { name: "Figma", icon: <SiFigma />, color: "text-purple-400", bg: "bg-purple-50/80" },
  ];

  const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Tailwind", "SASS", "Bootstrap", "Node.js", "MongoDB", "Firebase", "Git", "GitHub", "Figma"];

  return (
    <section 
      ref={aboutSectionRef} 
      className="relative  py-20"
      id="about"
    >
      {/* Floating gradient blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-[100px] opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-[100px] opacity-20 -z-10" />
      
      <div className=" px-5 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-sm font-medium text-blue-600 mb-3 px-3 py-1 bg-blue-50 rounded-full">
            ABOUT ME
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">introduce</span> myself
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* About Card */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-100 rounded-xl blur opacity-75"></div>
                <div className="relative bg-white p-3 rounded-xl shadow-sm border border-gray-200/50">
                  <FaUserGraduate className="text-blue-600 text-xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Who I Am</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate web developer and graphic designer currently pursuing my undergraduate degree in graphics design. With a keen eye for detail and a love for clean code, I specialize in creating engaging digital experiences that combine aesthetics with functionality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy building everything from small business sites to interactive web applications, focusing on responsive design, performance, and accessibility.
              </p>
            </div>
          </div>

          {/* Skills Card */}
          <div 
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200/50 hover:shadow-md transition-all duration-300 backdrop-blur-sm"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-100 rounded-xl blur opacity-75"></div>
                <div className="relative bg-white p-3 rounded-xl shadow-sm border border-gray-200/50">
                  <FaCode className="text-blue-600 text-xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">My Skills</h3>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <FaLaptopCode className="text-blue-500 mr-2 text-lg" />
                <h4 className="text-lg font-semibold text-gray-700">Frontend Development</h4>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {technologies
                  .filter(tech => frontendSkills.includes(tech.name))
                  .map((tech) => (
                    <div 
                      key={tech.name}
                      className={`${tech.bg} rounded-xl p-3 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-md border border-gray-200/50`}
                    >
                      <div className={`${tech.color} text-2xl mb-2`}>{tech.icon}</div>
                      <span className="text-xs font-medium text-gray-700 text-center">{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;