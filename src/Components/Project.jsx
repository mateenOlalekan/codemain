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
    liveUrl: "https://example.com/wellness",
    githubUrl: "https://github.com/example/wellness"
  },
  {
    id: "4",
    title: "Creative Portfolio",
    description: "A platform for designers and artists to showcase work with customizable layouts and analytics.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio"
  },
  {
    id: "5",
    title: "Smart Home Controller",
    description: "An IoT dashboard for managing home devices, automation, and energy consumption tracking.",
    technologies: ["React", "Tailwind", "Vercel"],
    liveUrl: "https://example.com/smarthome",
    githubUrl: "https://github.com/example/smarthome"
  },
  {
    id: "6",
    title: "Project Management",
    description: "A full-fledged platform with task management, progress tracking, and collaboration tools.",
    technologies: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com/lms",
    githubUrl: "https://github.com/example/lms"
  },
];

function Project() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="project" className="bg-gray-50 py-16 md:py-24 flex flex-col justify-center items-center px-6 lg:px-32">
      
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            className="hover:scale-105 transition-transform duration-300"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Project;
