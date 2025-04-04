import { useEffect } from "react";
import ProjectCard from './ProjectCard';
import { FaFolderOpen } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projectsData = [
  {
    id: "1",
    title: "WanderLust",
    description: "A travel agency web app helping users book trips, explore destinations, and manage travel plans.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://thewanderlusttravels.com/",
    githubUrl: "https://github.com/example/taskmanager"
  },
  {
    id: "2",
    title: "Coach Africa",
    description: "A platform for educators to master modern teaching technologies, enhancing learning and engagement.",
    technologies: ["React", "Tailwind", "Firebase"],
    liveUrl: "https://coach-africa.vercel.app",
    githubUrl: "https://github.com/example/finance"
  },
  {
    id: "3",
    title: "Weather App",
    description: "A real-time weather tracking application with detailed forecasts and location-based updates.",
    technologies: ["React", "REST API", "Firebase"],
    liveUrl: "https://nazeem.vercel.app/",
    githubUrl: "https://github.com/example/wellness"
  },
  {
    id: "4",
    title: "Portfolio v1",
    description: "A platform for designers and artists to showcase work with customizable layouts and analytics.",
    technologies: ["React.js", "Tailwind CSS", "Vercel"],
    liveUrl: "matinport.vercel.app",
    githubUrl: "https://github.com/example/portfolio"
  },
  {
    id: "5",
    title: "Ludus Ecommerce",
    description: "An IoT dashboard for managing home devices, automation, and energy consumption tracking.",
    technologies: ["React", "Tailwind", "Vercel"],
    liveUrl: "https://example.com/smarthome",
    githubUrl: "https://github.com/example/smarthome"
  },
  {
    id: "6",
    title: "Kanban Board",
    description: "A full-fledged platform with task management, progress tracking, and collaboration tools.",
    technologies: ["React", "Tailwind", "Firebase"],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms"
  },{
    id: "7",
    title: "FurniCraft 🛋️",
    description: "Transforming spaces with stylish, functional, and modern furniture designs. Experience comfort and elegance with a touch of luxury, tailored to elevate your living space.",
    technologies: ["React", "Tailwind",],
    liveUrl: "https://nazeem.vercel.app/",
    githubUrl: "https://github.com/example/lms"
  },

];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="project" className="bg-gray-50 py-12 md:py-14 flex flex-col justify-center items-center px-6 lg:px-32">
      
      {/* Section Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <FaFolderOpen className="text-blue-500" /> Featured Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-lg mx-auto text-lg">
          A curated collection of my best development projects, showcasing skills in modern, responsive, and user-focused solutions.
        </p>
        <div className="w-16 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            className="hover:scale-105 cursor-pointer e duration-700 transition-all"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Project;
