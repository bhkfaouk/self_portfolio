import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faGraduationCap, faHome , faProjectDiagram ,faUser ,faBriefcase} from '@fortawesome/free-solid-svg-icons';
import ThemeToggle   from "./ThemeToggle.tsx";



interface NavbarProps {
    setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
    return (
        <nav className="flex items-center p-5 bg-[#0F172A] text-white fixed w-full z-40">
            <div className="text-lg ">Bouhaka Farouk</div>
            <div className="flex-grow flex justify-center">
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            className="text-lg cursor-pointer hover:text-gray-400"
                            onClick={() => setActiveSection("hero")}
                        >
                            <FontAwesomeIcon icon={faHome} className="mr-2"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-lg cursor-pointer hover:text-gray-400"
                            onClick={() => setActiveSection("about")}
                        >
                            <FontAwesomeIcon icon={faUser} className="mr-2 text-lg "/>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            className="text-lg cursor-pointer hover:text-gray-400"
                            onClick={() => setActiveSection("experience")}
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="education"
                            smooth={true}
                            duration={500}
                            className="text-lg cursor-pointer hover:text-gray-400"
                            onClick={() => setActiveSection("education")}
                        >
                            <FontAwesomeIcon icon={faGraduationCap} className="mr-2"/>
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="text-lg cursor-pointer hover:text-gray-400"
                            onClick={() => setActiveSection("projects")}
                        >
                            <FontAwesomeIcon icon={faProjectDiagram} className="mr-2"/>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex space-x-4">
                <a
                    href="https://github.com/bhkfaouk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/farouk-bouhaka-4006a7235/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6"/>
                </a>
                <a
                    href="mailto:faroukbouhaka@gmail.com"
                    className="hover:text-gray-400"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6"/>
                </a>

            </div>

            <ThemeToggle/>

        </nav>
    );
};

export default Navbar;