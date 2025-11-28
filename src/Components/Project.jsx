import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projectsData = [
  {
    id: "1",
    title: "Cosplitz",
    description: "A smart expense-sharing application that helps groups track contributions, split bills, and settle payments seamlessly with a clean, user-friendly interface.",
    technologies: ["React", "Tailwind"],
    category: "Web App",
    featured: true,
    liveUrl: "https://cosplitz.vercel.app",
    githubUrl: null,
  },

  {
    id: "2",
    title: "Coach Africa",
    description: "An educational platform designed to empower African educators with modern digital teaching tools, interactive resources, and real-time learner engagement features.",
    technologies: ["React", "Tailwind", "Firebase"],
    category: "Education",
    featured: true,
    liveUrl: "https://coach-africa.vercel.app",
    githubUrl: "https://github.com/example/finance",
  },

  {
    id: "3",
    title: "Wavorax",
    description: "A real-time weather monitoring web app delivering accurate forecasts, live climate updates, and location-based insights using modern weather APIs.",
    technologies: ["React", "REST API", "Firebase"],
    category: "Utility",
    featured: false,
    liveUrl: "https://wavorax.vercel.app",
    githubUrl: "https:/",
  },

  {
    id: "4",
    title: "Verder",
    description: "A stylish furniture showcase platform featuring modern, functional interior pieces with smooth browsing, elegant layouts, and a premium brand experience.",
    technologies: ["React", "Tailwind"],
    category: "E-commerce",
    featured: true,
    liveUrl: "https://verdecraft.vercel.app/",
    githubUrl: "https://github.com/example/furniture",
  },

  {
    id: "5",
    title: "Luxe Mart",
    description: "A fully responsive eCommerce web app offering product browsing, cart management, secure checkout flow, order tracking, and a seamless modern shopping experience.",
    technologies: ["React", "Tailwind", "Vercel"],
    category: "E-commerce",
    featured: true,
    liveUrl: "https://example.com/smarthome",
    githubUrl: "https://github.com/example/smarthome",
  },

  {
    id: "6",
    title: "Fintrack",
    description: "An advanced eCommerce dashboard UI providing real-time analytics, product and inventory tools, order monitoring, revenue breakdowns, and customer interaction insights.",
    technologies: ["React", "Tailwind", "Firebase"],
    category: "Productivity",
    featured: false,
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms",
  },

  {
    id: "7",
    title: "Avalon",
    description: "A real estate management web app offering property listings, client inquiries, location search, and an organized dashboard for seamless property discovery.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Real Estate",
    featured: false,
    liveUrl: "https://taskflow-pro.vercel.app/",
    githubUrl: "https://github.com/example/taskflow",
  },

  { 
    id: "8",
    title: "The Wanderlust Travels",
    description: "A travel-experience platform offering curated destinations, guided itineraries, travel tips, and an elegant interface tailored for explorers and adventure seekers.",
    technologies: ["HTML/CSS/JavaScript", "Bootstrap"],
    category: "Web App",
    featured: true,
    liveUrl: "https://thewanderlusttravels.com/",
    githubUrl: null,
  }
];


const ProjectsShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    hover: { 
      y: -5, 
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div  id="project">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-black">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm">A showcase of my work across various technologies and domains.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {projectsData.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                data-aos={index % 4 === 0 ? "fade-right" : index % 4 === 3 ? "fade-left" : "fade-up"}
                data-aos-delay={50 * (index % 4)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Blue accent bar */}
                <div className="h-1 w-full bg-blue-500"></div>
                
                <div className="p-4">
                  {/* Category badge */}
                  <div className="mb-3 flex justify-between items-center">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                      {project.category}
                    </span>
                    
                    {project.featured && (
                      <span className="text-xs font-medium text-blue-500">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  {/* Project title */}
                  <h3 className="text-lg font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  
                  {/* Project description */}
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub size={12} />
                      </motion.a>
                      <motion.a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        aria-label="View live project"
                      >
                        <FaExternalLinkAlt size={11} />
                      </motion.a>
                    </div>
                    
                    <motion.button
                      className="text-xs font-medium rounded px-2 py-1 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors flex items-center"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaCode className="mr-1" size={10} />
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;