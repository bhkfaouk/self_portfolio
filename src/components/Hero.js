import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
const Hero = ({ activeSection }) => {
    return (_jsxs("div", { id: "hero", className: "flex-grow flex flex-col items-start pb-20 justify-start pt-20 bg-[#0F172A] text-white w-full", children: [activeSection === "about" && _jsx(About, {}), activeSection === "experience" && _jsx(Experience, {}), activeSection === "education" && _jsx(Education, {}), activeSection === "projects" && _jsx(Projects, {}), activeSection === "hero" && (_jsxs("div", { className: "text-left", children: [_jsx("h2", { className: "text-4xl font-bold mb-4 mt-8", children: "Welcome to Farouk's Portfolio" }), _jsx("p", { className: "text-xl", children: "Explore my portfolio to learn more about me and my work." })] })), _jsx("div", { className: "bg-card fixed bottom-0 z-49 h-20 w-full flex-0 flex items-center border-t px-4 bg-[#0F172A] sm:h-20 md:px-6 print:hidden", children: _jsx("span", { className: "text-secondary font-medium font-bold", children: "Farouk Bouhaka \u00A9 2024" }) })] }));
};
export default Hero;
