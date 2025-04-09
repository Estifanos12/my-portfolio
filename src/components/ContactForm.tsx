import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "estif17gtb@gmail.com",
    link: "mailto:estif17gtb@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+251 961 646 618",
    link: "tel:+251961646618",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
  },
];

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    name: "GitHub",
    url: "https://github.com/Estifanos12",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/estifanos-gashawtena/",
  },
  {
    icon: <Send className="w-5 h-5" />,
    name: "Telegram",
    url: "https://t.me/Estif1727",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:estif17gtb@gmail.com?subject=Contact from ${
      formData.name
    }&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="flex-1 lg:py-12 flex items-center justify-center py-4 bg-accent/10 rounded-lg ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="w-full">
            <CardHeader>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 text-center"
              >
                Get in Touch
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <CardDescription>
                  Feel free to reach out to me through any of these channels
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors"
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="pt-4">
                <h3 className="font-medium mb-4 text-center">
                  Connect with me
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="w-full">
            <CardHeader>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 text-center"
              >
                Send a Message
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <CardDescription>
                  Have a question or want to work together? Send me a message!
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </motion.form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
