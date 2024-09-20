import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap, faHome, faProjectDiagram, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from "./ThemeToggle";
const Navbar = ({ setActiveSection }) => {
    return (_jsxs("nav", { className: "flex items-center p-5 bg-[#0F172A] text-white fixed w-full z-40", children: [_jsx("div", { className: "text-lg ", children: "Bouhaka Farouk" }), _jsx("div", { className: "flex-grow flex justify-center", children: _jsxs("ul", { className: "flex space-x-6", children: [_jsx("li", { children: _jsxs(Link, { to: "hero", smooth: true, duration: 500, className: "text-lg cursor-pointer hover:text-gray-400", onClick: () => setActiveSection("hero"), children: [_jsx(FontAwesomeIcon, { icon: faHome, className: "mr-2" }), "Home"] }) }), _jsx("li", { children: _jsxs(Link, { to: "about", smooth: true, duration: 500, className: "text-lg cursor-pointer hover:text-gray-400", onClick: () => setActiveSection("about"), children: [_jsx(FontAwesomeIcon, { icon: faUser, className: "mr-2 text-lg " }), "About"] }) }), _jsx("li", { children: _jsxs(Link, { to: "experience", smooth: true, duration: 500, className: "text-lg cursor-pointer hover:text-gray-400", onClick: () => setActiveSection("experience"), children: [_jsx(FontAwesomeIcon, { icon: faBriefcase, className: "mr-2" }), "Experience"] }) }), _jsx("li", { children: _jsxs(Link, { to: "education", smooth: true, duration: 500, className: "text-lg cursor-pointer hover:text-gray-400", onClick: () => setActiveSection("education"), children: [_jsx(FontAwesomeIcon, { icon: faGraduationCap, className: "mr-2" }), "Education"] }) }), _jsx("li", { children: _jsxs(Link, { to: "projects", smooth: true, duration: 500, className: "text-lg cursor-pointer hover:text-gray-400", onClick: () => setActiveSection("projects"), children: [_jsx(FontAwesomeIcon, { icon: faProjectDiagram, className: "mr-2" }), "Projects"] }) })] }) }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "https://github.com/bhkfaouk", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-400", children: _jsx(FontAwesomeIcon, { icon: faGithub, className: "w-6 h-6" }) }), _jsx("a", { href: "https://www.linkedin.com/in/farouk-bouhaka-4006a7235/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-400", children: _jsx(FontAwesomeIcon, { icon: faLinkedin, className: "w-6 h-6" }) }), _jsx("a", { href: "mailto:faroukbouhaka@gmail.com", className: "hover:text-gray-400", children: _jsx(FontAwesomeIcon, { icon: faEnvelope, className: "w-6 h-6" }) })] }), _jsx(ThemeToggle, {})] }));
};
export default Navbar;
