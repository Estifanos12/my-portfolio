import { Github, Linkedin, Send, Phone } from "lucide-react";

import { Button } from "./ui/button";

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

export default function Home() {
  return (
    <div className="flex-1 min-h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl p-4">
        {/* Left side - Image with floating animation */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative">
            <img
              src="/my-portfolio/img.jpg"
              alt="Person Image"
              className="h-96 lg:h-[26rem] rounded-3xl shadow-lg relative z-10"
            />

            <div className="absolute -top-6 -left-6 bg-accent size-20 rounded-3xl -z-10 animate-float" />
            <div className="absolute -bottom-6 -right-6 bg-border size-20 rounded-3xl -z-10 animate-float-delayed" />
          </div>
        </div>

        {/* Right side - Description and social links */}
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-4xl text-center md:text-left font-extrabold tracking-tight">
              I'm Estifanos Gashawtena
            </h1>
            <h2 className="text-2xl text-center md:text-left font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg text-center md:text-left text-muted-foreground leading-relaxed">
              Love creating elegant solutions to complex problems. Specializing
              in building modern web applications with latest technologies.
            </p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
