import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="p-5 w-full max-w-[1200px] mx-auto min-h-screen">
      <Tabs defaultValue="home" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="about-me">About me</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent
          value="home"
          className="flex-1 min-h-[calc(100vh-100px)] flex"
        >
          <Home />
        </TabsContent>
        <TabsContent
          value="projects"
          className="flex-1 min-h-[calc(100vh-100px)] flex"
        >
          <Projects />
        </TabsContent>
        <TabsContent
          value="about-me"
          className="flex-1 min-h-[calc(100vh-100px)] flex"
        >
          <AboutMe />
        </TabsContent>
        <TabsContent
          value="contact"
          className="flex-1 min-h-[calc(100vh-100px)] flex"
        >
          <ContactForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
