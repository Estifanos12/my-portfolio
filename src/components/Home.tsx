import {
  Github,
  Linkedin,
  Send,
  Phone,
  Code,
  Database,
  Cpu,
  Rocket,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/Estifanos12",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://www.linkedin.com/in/estifanos-gashawtena/",
  },
  {
    name: "Telegram",
    icon: <Send className="w-5 h-5" />,
    url: "https://t.me/Estif1727",
  },
  {
    name: "WhatsApp",
    icon: <Phone className="w-5 h-5" />,
    url: "https://wa.me/+251961646618",
  },
];

const skills = [
  {
    name: "Frontend",
    icon: <Code className="w-6 h-6" />,
    color: "text-blue-500",
  },
  {
    name: "Backend",
    icon: <Database className="w-6 h-6" />,
    color: "text-green-500",
  },
  {
    name: "DevOps",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-purple-500",
  },
  {
    name: "Full Stack",
    icon: <Rocket className="w-6 h-6" />,
    color: "text-orange-500",
  },
];

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "10+" },
];

export default function Home() {
  return (
    <div className="flex-1 lg:py-12 lg:px-5 flex items-center bg-accent/10 rounded-lg justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl pt-8 lg:p-0">
        {/* Left side - Image with floating animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex items-center justify-center relative"
        >
          <div className="w-full flex justify-center items-center">
            <div className="relative w-fit">
              <div className="absolute -top-6 -left-6 bg-border/50 size-20 rounded-3xl animate-float" />
              <div className="absolute -bottom-6 -right-6 bg-accent/50 size-20 rounded-3xl animate-float-delayed" />
              <img
                src="/img.jpg"
                alt="Person Image"
                className="relative z-10 h-96 lg:h-[26rem] object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Right side - Description and social links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-3xl text-center md:text-left font-bold tracking-tight">
              I'm Estifanos Gashawtena
            </h1>
            <h2 className="text-xl text-center md:text-left font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg text-center md:text-left text-muted-foreground leading-relaxed">
              Love creating elegant solutions to complex problems. Specializing
              in building modern web applications with latest technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 rounded-lg bg-card transition-colors"
              >
                <div className={`${skill.color} mb-2`}>{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links and CTA */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
            <a
              href="/Estifanos-Gashawtena-CV.pdf"
              download="EstifanosGashawtenaCV.pdf"
            >
              <Button size="lg" className="w-full self-center md:w-auto">
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
