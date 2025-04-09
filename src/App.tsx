import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "home", label: "Home", component: <Home /> },
  { id: "projects", label: "Projects", component: <Projects /> },
  { id: "about", label: "About me", component: <AboutMe /> },
  { id: "contact", label: "Contact", component: <ContactForm /> },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleSwipe = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      // Swipe right
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex].id);
    } else if (info.offset.x < -threshold) {
      // Swipe left
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Creative Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold tracking-tight mb-2 "
          >
            Welcome to My Digital Space{" "}
            <span className="text-primary text-3xl">🚀</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my journey through code 💻, creativity 🎨, and innovation
            🧠. Each code tells a different story of my professional path 📚.
            Let's build something amazing together! 🤝
          </motion.p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-transparent"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            className="mt-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {tabs.find((tab) => tab.id === activeTab)?.component}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
}
