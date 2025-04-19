import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projectsData = [
  {
    id: "1",
    title: "WanderLust",
    description: "A travel agency web app helping users book trips, explore destinations, and manage travel plans.",
    technologies: ["HTML/CSS/JavaScript", "Bootstrap"],
    category: "Web App",
    featured: true,
    liveUrl: "https://thewanderlusttravels.com/",
    githubUrl: "https://github.com/example/taskmanager",
  },
  {
    id: "2",
    title: "Coach Africa",
    description: "A platform for educators to master modern teaching technologies, enhancing learning and engagement.",
    technologies: ["React", "Tailwind", "Firebase"],
    category: "Education",
    featured: true,
    liveUrl: "https://coach-africa.vercel.app",
    githubUrl: "https://github.com/example/finance",
  },
  {
    id: "3",
    title: "Weather App",
    description: "A real-time weather tracking application with detailed forecasts and location-based updates.",
    technologies: ["React", "REST API", "Firebase"],
    category: "Utility",
    featured: false,
    liveUrl: "https://nazeem.vercel.app/",
    githubUrl: "https://github.com/example/wellness",
  },
  {
    id: "4",
    title: "Portfolio v1",
    description: "A platform for designers and artists to showcase work with customizable layouts and analytics.",
    technologies: ["React.js", "Tailwind CSS", "Vercel"],
    category: "Portfolio",
    featured: true,
    liveUrl: "matinport.vercel.app",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    id: "5",
    title: "Ludus Ecommerce",
    description: "An IoT dashboard for managing home devices, automation, and energy consumption tracking.",
    technologies: ["React", "Tailwind", "Vercel"],
    category: "E-commerce",
    featured: true,
    liveUrl: "https://example.com/smarthome",
    githubUrl: "https://github.com/example/smarthome",
  },
  {
    id: "6",
    title: "Kanban Board",
    description: "A full-fledged platform with task management, progress tracking, and collaboration tools.",
    technologies: ["React", "Tailwind", "Firebase"],
    category: "Productivity",
    featured: false,
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms",
  },
  {
    id: "7",
    title: "FurniCraft",
    description: "Transforming spaces with stylish, functional, and modern furniture designs. Experience comfort and elegance with a touch of luxury.",
    technologies: ["React", "Tailwind"],
    category: "E-commerce",
    featured: true,
    liveUrl: "https://furnicraft-sand.vercel.app/",
    githubUrl: "https://github.com/example/furniture",
  },
  {
    id: "8",
    title: "TaskFlow Pro",
    description: "Comprehensive task management system with workflow automation, team collaboration, and progress analytics.",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Productivity",
    featured: false,
    liveUrl: "https://taskflow-pro.vercel.app/",
    githubUrl: "https://github.com/example/taskflow",
  },
];

const ProjectsShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });

    // Add intersection observer for scroll animations
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
      y: -15, 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      transition: { duration: 0.3 } 
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

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
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
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-black">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-black mb-8">A showcase of my work across various technologies and domains.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                data-aos={index % 4 === 0 ? "fade-right" : index % 4 === 3 ? "fade-left" : "fade-up"}
                data-aos-delay={100 * (index % 4)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Blue accent bar */}
                <div className="h-2 w-full bg-blue-600"></div>
                
                <div className="p-6">
                  {/* Category badge */}
                  <div className="mb-4 flex justify-between items-center">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                      {project.category}
                    </span>
                    
                    {project.featured && (
                      <span className="text-xs font-medium text-blue-600">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  {/* Project title */}
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {project.title}
                  </h3>
                  
                  {/* Project description */}
                  <p className="text-black text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action links */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-3">
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub size={16} />
                      </motion.a>
                      <motion.a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        aria-label="View live project"
                      >
                        <FaExternalLinkAlt size={14} />
                      </motion.a>
                    </div>
                    
                    <motion.button
                      className="text-xs font-medium rounded-lg px-3 py-2 bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCode className="mr-2" />
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {visibleProjects < projectsData.length && (
          <div className="mt-16 text-center" data-aos="fade-up">
            <motion.button
              onClick={() => setVisibleProjects(projectsData.length)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsShowcase;