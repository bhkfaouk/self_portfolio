import React from "react";
import { Button, Timeline } from "flowbite-react";
const About: React.FC = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-start overflow-hidden justify-center h-full w-full dark:bg-background-primary bg-background-secondary dark:text-white text-black  p-0  "
    >
      {/* Text starting from the top left corner */}

      <div className="  dark:bg-background-primary bg-background-secondary  shadow-lg rounded-lg p-6 h-3/4 w-3/4 mx-auto flex  border-white border-color: rgb(255 255 255) ">
        <img
          src="src/assets/farouk.jpg"
          alt="Your Namethr"
          className="w-60 h-90 rounded-lg object-cover "
        />

        <div className="pl-5 flex flex-col ">
          <h3 className="dark:text-white text-black text-3xl font-semibold mb-4 pt-2 ">
            Software Engineer
          </h3>
          <p className="text-gray-400 mt-2">
            Passionate about developing innovative programs that expedite the
            efficiency and effectiveness of organizational success.
          </p>
          <div className="mt-auto">
          <a href="/CV_farouk_bouhaka.pdf"
             target="_blank"     // Open in a new tab
             rel="noopener noreferrer"  // Security measure for external links
             className=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
          </svg> Download Resume  </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
