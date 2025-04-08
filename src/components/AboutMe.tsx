import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import {
  Code2,
  GraduationCap,
  Briefcase,
  FileCode,
  Server,
  Database,
  Terminal,
  LayoutTemplate,
  GitBranch,
  Globe,
  Smartphone,
  Cloud,
  Box,
  Layers,
  Calendar,
  Building,
  FolderCode,
  Worm,
  CheckCircle2,
} from "lucide-react";

const skills = [
  { name: "React", icon: <FileCode className="w-5 h-5" /> },
  { name: "Node.js", icon: <Server className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  { name: "Express", icon: <Terminal className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <LayoutTemplate className="w-5 h-5" /> },
  { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
  { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
  { name: "Docker", icon: <Box className="w-5 h-5" /> },
  { name: "GraphQL", icon: <Layers className="w-5 h-5" /> },
  { name: "Redux", icon: <Database className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
  { name: "Python", icon: <Worm className="w-5 h-5" /> },
  { name: "Django", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "PHP", icon: <FileCode className="w-5 h-5" /> },
  { name: "Laravel", icon: <FolderCode className="w-5 h-5" /> },
  { name: "Golang", icon: <Code2 className="w-5 h-5" /> },
];

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Addis Ababa Science and Technology University",
    year: "2019 - 2024",
    description: "Specialized in Software Engineering",
  },
  {
    degree: "Full Stack Web Developer Professional Certification",
    school: "Udacity",
    year: "2023 - 2024",
    description: "Focused on modern web technologies and frameworks",
  },
];

const workHistory = [
  {
    position: "Full Stack Developer",
    company: "Cooperative Bank of Oromia",
    period: "2023 - 2024",
    responsibilities: [
      "Worked on multiple enterprise-level applications",
      "Used PHP/Laravel for backend development",
      "Participated on code review and testing",
    ],
  },
  {
    position: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2022 - 2023",
    responsibilities: [
      "Developed and maintained web applications using MERN stack",
      "Collaborated with cross-functional teams to deliver features",
      "Optimized application performance and user experience",
    ],
  },
];

export default function AboutMe() {
  return (
    <div className="flex-1 min-h-[calc(100vh-100px)] flex items-center justify-center py-2 md:px-2">
      <div className="w-full ">
        <Card>
          <CardHeader>
            <h2 className="scroll-m-20 text-2xl font-bold tracking-tight first:mt-0 line-clamp-1">
              About Me
            </h2>
            <CardDescription>Get to know me better</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Introduction</h2>
              <p className="text-base leading-relaxed">
                Hi there! I'm a full-stack developer with over 5 years of
                experience in building modern web applications. I specialize in
                creating user-friendly interfaces and solving complex problems
                through clean, maintainable code. My journey in software
                development has been driven by a constant desire to learn and
                improve, always staying up-to-date with the latest technologies
                and best practices in the industry.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:translate-x-0 translate-x-4"></div>

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center transform md:translate-x-[-50%] translate-x-0">
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>

                      {/* Content */}
                      <div
                        className={`ml-12 md:ml-0 ${
                          index % 2 === 0
                            ? "md:mr-[50%] md:pr-8 md:text-right"
                            : "md:ml-[50%] md:pl-8"
                        }`}
                      >
                        <div className="bg-secondary/50 p-4 rounded-lg shadow-sm">
                          <h3 className="text-lg font-medium">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">
                            {edu.year}
                          </p>
                          <p className="text-sm">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Work History
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:translate-x-0 translate-x-4"></div>

                <div className="space-y-8">
                  {workHistory.map((job, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center transform md:translate-x-[-50%] translate-x-0">
                        <Building className="w-4 h-4 text-primary" />
                      </div>

                      {/* Content */}
                      <div
                        className={`ml-12 md:ml-0 ${
                          index % 2 === 0
                            ? "md:mr-[50%] md:pr-8 md:text-right"
                            : "md:ml-[50%] md:pl-8"
                        }`}
                      >
                        <div className="bg-secondary/50 p-4 rounded-lg shadow-sm">
                          <div className="flex flex-col md:block">
                            <h3 className="text-lg font-medium">
                              {job.position}
                            </h3>
                            <div
                              className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-2 ${
                                index % 2 === 0 ? "md:justify-end" : ""
                              }`}
                            >
                              <p className="text-muted-foreground">
                                {job.company}
                              </p>
                              <span className="hidden md:inline text-muted-foreground">
                                •
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {job.period}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 space-y-2 text-sm">
                            {job.responsibilities.map((resp, idx) => (
                              <div
                                key={idx}
                                className={`flex items-start gap-2 ${
                                  index % 2 === 0
                                    ? "md:flex-row-reverse md:text-right"
                                    : "flex-row"
                                }`}
                              >
                                <div className="flex-shrink-0 mt-0.5">
                                  <CheckCircle2 className="w-4 h-4 text-primary" />
                                </div>
                                <p>{resp}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
