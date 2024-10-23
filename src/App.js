import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Navbar from "./components/Navbar";
// icons
import { BsMoon, BsSun } from "react-icons/bs";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./global.css";
const App = () => {
    const [activeSection, setActiveSection] = useState("hero");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    // Function to render the component based on activeSection
    const renderActiveSection = () => {
        switch (activeSection) {
            case "about":
                return _jsx(About, {});
            case "experience":
                return _jsx(Experience, {});
            case "education":
                return _jsx(Education, {});
            case "projects":
                return _jsx(Projects, {});
            default:
                return (_jsxs("div", { className: "text-left w-full h-full dark:bg-background-primary bg-background-secondary dark:text-white text-black", children: [_jsx("h2", { className: "text-4xl font-bold mb-4 mt-8", children: "Welcome to Farouk's Portfolio" }), _jsx("p", { className: "text-xl", children: "Explore my portfolio to learn more about me and my work." })] }));
        }
    };
    return (_jsx("html", { className: ` ${isDarkMode && "dark"}`, children: _jsxs("body", { className: "flex flex-col h-[750px] dark:bg-background-primary bg-background-secondary ", children: [_jsx(Navbar, { setActiveSection: setActiveSection }), _jsx("main", { id: "hero", className: "flex-grow flex flex-col items-start pb-10 box-content justify-start pt-20 dark:bg-background-primary bg-background-secondary dark:text-white text-black w-full", children: renderActiveSection() }), _jsxs("div", { className: "dark:bg-background-primary bg-background-secondary dark:text-white text-black fixed bottom-0\r\n          z-49 h-20 w-full flex-0 flex items-center border-t px-6  sm:h-20 md:px-6 print:hidden", children: [_jsx("span", { className: " text-secondary font-medium ", children: "Farouk Bouhaka \u00A9 2024" }), _jsx("button", { className: "fixed bottom-5 right-5  w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop:blur-[] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-150 transition-all bg-gray-950 dark:bg-white dark:text-black text-white", onClick: toggleDarkMode, children: isDarkMode ? _jsx(BsMoon, { size: 20 }) : _jsx(BsSun, { size: 20 }) })] })] }) }));
};
export default App;
