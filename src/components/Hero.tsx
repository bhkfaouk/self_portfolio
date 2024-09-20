import React from "react";

import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import ThemeToggle from "./ThemeToggle";

interface HeroProps {
    activeSection: string;
}

const Hero: React.FC<HeroProps> = ({ activeSection }) => {
    return (
        <div
            id="hero"
            className="flex-grow flex flex-col items-start pb-20 justify-start pt-20 bg-[#0F172A] text-white w-full"

        >
            {/* Display content based on the active section */}
            {activeSection === "about" && <About/>}
            {activeSection === "experience" && <Experience/>}
            {activeSection === "education" && <Education/>}
            {activeSection === "projects" && <Projects/>}
            {activeSection === "hero" && (
                <div className="text-left">
                    <h2 className="text-4xl font-bold mb-4 mt-8">Welcome to Farouk's Portfolio</h2>
                    <p className="text-xl">Explore my portfolio to learn more about me and my work.</p>
                </div>
            )}

            <div
                className="bg-card fixed bottom-0 z-49 h-20 w-full flex-0 flex items-center border-t px-4 bg-[#0F172A] sm:h-20 md:px-6 print:hidden"
            >
    <span className="text-secondary font-medium font-bold">
        Farouk Bouhaka © 2024
    </span>
            </div>

        </div>

    );
};

export default Hero;
