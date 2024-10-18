import React, { useState } from "react";
import Navbar from "./components/Navbar";
// icons
import { BsMoon, BsSun } from "react-icons/bs";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./global.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Function to render the component based on activeSection
  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "projects":
        return <Projects />;
      default:
        return (
            <div className="text-left w-full h-full dark:bg-background-primary bg-background-secondary dark:text-white text-black">
              <h2 className="text-4xl font-bold mb-4 mt-8">
                Welcome to Farouk's Portfolio
              </h2>
              <p className="text-xl">
                Explore my portfolio to learn more about me and my work.
              </p>
            </div>
        );
    }
  };

  return (
      <html className={` ${isDarkMode && "dark"}`}>
      <body className="flex flex-col h-[750px] dark:bg-background-primary bg-background-secondary ">
      <Navbar setActiveSection={setActiveSection} />
      <main
          id="hero"
          className="flex-grow flex flex-col items-start pb-10 box-content justify-start pt-20 dark:bg-background-primary bg-background-secondary dark:text-white text-black w-full"
      >
        {renderActiveSection()}
      </main>

      <div
          className="dark:bg-background-primary bg-background-secondary dark:text-white text-black fixed bottom-0
          z-49 h-20 w-full flex-0 flex items-center border-t px-6  sm:h-20 md:px-6 print:hidden"
      >
          <span className=" text-secondary font-medium ">
            Farouk Bouhaka © 2024
          </span>
        <button
            className="fixed bottom-5 right-5  w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop:blur-[] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-150 transition-all bg-gray-950 dark:bg-white dark:text-black text-white"
            onClick={toggleDarkMode}
        >
          {isDarkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
      </div>
      </body>
      </html>
  );
};

export default App;
