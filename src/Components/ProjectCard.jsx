import React from 'react';
import { Github, Code, Layers, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const iconMap = {
    React: <Code className="h-4 w-4 text-blue-500" />,
    TypeScript: <Code className="h-4 w-4 text-blue-600" />,
    JavaScript: <Code className="h-4 w-4 text-yellow-500" />,
    Firebase: <Code className="h-4 w-4 text-orange-500" />,
    "Node.js": <Code className="h-4 w-4 text-green-600" />,

    "Next.js": <Code className="h-4 w-4 text-black" />,
    "Vue.js": <Code className="h-4 w-4 text-emerald-500" />,
    "D3.js": <Layers className="h-4 w-4 text-orange-400" />,

    AWS: <Code className="h-4 w-4 text-orange-400" />,
    "Framer Motion": <Layers className="h-4 w-4 text-purple-500" />,
    "Tailwind CSS": <Layers className="h-4 w-4 text-sky-500" />,
    "React Native": <Code className="h-4 w-4 text-blue-400" />,
  };

  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:duration-700">
      <div className="flex h-full flex-col p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium tracking-tight text-gray-900">
            {project.title}
          </h3>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-500">
            <Code className="h-5 w-5" />
          </div>
        </div>

        <div className="my-2 h-px w-full bg-gray-100"></div>

        <p className="mb-3 text-sm text-gray-600 line-clamp-3">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-100"
            >
              {iconMap[tech] || <Layers className="h-3 w-3 text-gray-500" />}
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center rounded-full bg-blue-500 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2"
            >
              <span>View Project</span>
              <ArrowUpRight className="ml-1.5 h-3 w-3 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              <Github className="mr-1.5 h-3 w-3" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
