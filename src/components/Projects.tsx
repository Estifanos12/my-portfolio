import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "OpenType",
    description:
      "A minimalistic typing speed testing app built with React and TailwindCSS.",
    image: "/projects/opentype.jpg",
    technologies: ["React", "Redux", "TailwindCSS"],
    link: "https://github.com/Estifanos12/OpenType",
  },
  {
    id: 2,
    title: "Students Get Rentals",
    description:
      "A student rental platform for students to find and rent properties.",
    image: "/projects/studentsgetrentals.jpg",
    technologies: ["React", "NextJs", "Nextra", "MongoDB"],
    link: "https://www.studentsgetrentals.com/",
  },
  {
    id: 3,
    title: "Call Analytics",
    description:
      "A minimal and aesthetic app that scans through your call history and gives you incredible graphical visualization.",
    image: "/projects/callanalytics.jpg",
    technologies: ["React", "React Native", "Chart.js"],
    link: "https://github.com/Estifanos12/Call_Analytics",
  },
  {
    id: 4,
    title: "Online Tic Tac Toe Game",
    description:
      "An online multiplayer game made with React, tailwind and firebase.",
    image: "/projects/tictactoe.jpg",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    link: "https://online-tic-tac-toe-sigma.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills.",
    image: "/projects/portfolio.png",
    technologies: ["React", "Tailwind CSS", "Shadcn"],
    link: "https://github.com/Estifanos12/my-portfolio",
  },
];

export default function Projects() {
  return (
    <div className="flex-1 min-h-[calc(100vh-100px)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2 md:px-2 w-full"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader className="flex-none">
                <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 truncate">
                  {project.title}
                </h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <CardDescription className="line-clamp-2 text-start">
                        {project.description}
                      </CardDescription>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p className="text-center text-sm w-full whitespace-normal break-words overflow-wrap">
                        {project.description}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video mb-4 overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-none">
                <Button className="w-full" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
