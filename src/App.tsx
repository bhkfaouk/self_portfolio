import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// icons
import { BsMoon, BsSun } from "react-icons/bs";
import "./global.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <html className={` ${isDarkMode && "dark"}`}>
      <body className="flex flex-col h-[750px] dark:bg-background-primary bg-White">
        <Navbar setActiveSection={setActiveSection} />
        <Hero activeSection={activeSection} />
        <button
          className="fixed bottom-5 right-5  w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop:blur-[] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-150 transition-all
        bg-gray-950 dark:bg-white dark:text-black text-white"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
      </body>
    </html>
  );
};

export default App;
