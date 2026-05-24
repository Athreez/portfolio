import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "SafeSafar - Real-Time Trip Safety Monitoring System",
    description: [
      "Developed a full-stack platform enabling users to track trips in real-time with geolocation and route visualization.",
      "Implemented a safety scoring system using AQI, weather alerts, and environmental data with color-coded alerts.",
      "Created emergency features including SOS triggers and periodic safety checks."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "Leaflet"],
    liveUrl: "https://safe-safar-deploy.vercel.app/",
    githubUrl: null
  },
  {
    id: 2,
    title: "Sportify-inspired Music Streaming UI",
    description: [
      "Developed a responsive Spotify-inspired UI with a custom audio player supporting play/pause, seek, and track navigation.",
      "Implemented using vanilla JavaScript and DOM manipulation for lightweight performance.",
      "Implemented UI components using pure HTML, CSS, and JavaScript."
    ],
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://sportify-orcin-two.vercel.app/",
    githubUrl: null
  },
  {
    id: 3,
    title: "Online Voting System",
    description: [
      "Developed a secure online voting platform using Flask with role-based authentication for admins and voters.",
      "Implemented one-vote-per-user verification using MySQL triggers, constraints, and a well-structured database schema.",
      "Built admin dashboard supporting candidate management, voter registration, and results monitoring.",
      "Designed user-friendly voting interface and integrated result visualization."
    ],
    techStack: ["Flask", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://cooldude70.pythonanywhere.com/",
    githubUrl: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-blue-500">Projects</span>
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        Here are some of my recent projects showcasing my skills in full-stack development and problem-solving.
      </p>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition duration-300"
          >
            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-white">
              {project.title}
            </h3>

            {/* Description */}
            <ul className="space-y-3 mb-6 text-gray-300">
              {project.description.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-400 mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 items-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-200 transform px-4 py-2 rounded-lg font-medium text-sm"
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 active:scale-95 transition duration-200 transform px-4 py-2 rounded-lg font-medium text-sm"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
