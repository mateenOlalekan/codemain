import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaUserGraduate, 
  FaGithub, FaNodeJs, FaBootstrap, FaTools, FaCode, FaLaptopCode, FaServer
} from "react-icons/fa";
import {
  SiTailwindcss, SiTypescript, SiRedux, SiSass, SiMongodb, 
  SiFirebase, SiFigma, SiNextdotjs
} from "react-icons/si";

const AboutMe = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutSectionRef = useRef(null);
  const skillsContainerRef = useRef(null);

  // Initialize AOS animation library with enhanced settings
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  // Skills with icons from react-icons
  const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-2xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-2xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-2xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-2xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
    { name: "SASS", icon: <SiSass className="text-pink-400 text-2xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600 text-2xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-2xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-2xl" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-400 text-2xl" /> },
  ];

  // Group skills for better organization
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode className="text-xl" />,
      skills: technologies.filter(tech => 
        ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Tailwind", "SASS", "Bootstrap","Node.js", "MongoDB", "Firebase","Git", "GitHub", "Figma"].includes(tech.name)
      )
    },
  ];

  return (
    <section 
      ref={aboutSectionRef} 
      className="relative min-h-screen py-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      id="about"
      data-section="about"
    >
      {/* Background decorative elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20" />
      
      <div 
        className="container mx-auto px-6 lg:px-10 pt-10" 
        data-aos="fade-up"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 relative inline-block">
            About <span className="text-blue-600">Me</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform transition-transform duration-300"></div>
          </h1>
        </div>

        {/* Main Content with two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
          {/* About Me Column */}
          <div 
            className="lg:col-span-6" 
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 border border-gray-100 h-full">
              <div className="flex items-center mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full mr-4">
                  <FaUserGraduate className="text-xl" />
                </span>
                <h2 className="text-2xl font-bold text-gray-800">Who I Am</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed md:text-[14px]">
                I'm a passionate web developer and graphic designer currently pursuing my undergraduate degree in graphics design. With a keen eye for detail and a love for clean code, I specialize in creating engaging digital experiences that combine aesthetics with functionality.
                I enjoy building everything from small business sites to interactive web applications, focusing on responsive design, performance, and accessibility. My approach combines modern design principles with robust technical implementation to deliver exceptional user experiences.
              </p>
              


            </div>
          </div>

          {/* Technical Skills Column */}
          <div 
            className="lg:col-span-6" 
            data-aos="fade-left"
            data-aos-delay="200"
            ref={skillsContainerRef}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full">
              <div className="flex items-center mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full mr-4">
                  <FaCode className="text-xl" />
                </span>
                <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
              </div>

              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <div 
                    key={category.title}
                    data-aos="fade-up" 
                    data-aos-delay={200 + (index * 100)}
                  >
                    
                    <div className="grid lg:grid-cols-6 grid-cols-4 gap-2">
                      {category.skills.map((tech) => (
                        <div 
                          key={tech.name}
                          className="bg-white border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-blue-300 flex flex-col items-center"
                        >
                          <div className="mb-2">{tech.icon}</div>
                          <span className="text-gray-700 text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
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