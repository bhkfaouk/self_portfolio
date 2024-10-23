import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
// icons
import { BsMoon, BsSun } from "react-icons/bs";
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    /* if (resolvedTheme === "dark") {
        console.log("dark");
        return setTheme("light");
      }
      if (resolvedTheme === "light") {
        console.log("light");
        return setTheme("dark");
      } */
    return (_jsx("button", { className: "fixed bottom-5 right-5  w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop:blur-[] rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-150 transition-all\r\n        bg-gray-950 dark:bg-white dark:text-black text-white", onClick: toggleDarkMode, children: isDarkMode ? _jsx(BsMoon, { size: 20 }) : _jsx(BsSun, { size: 20 }) }));
};
export default ThemeToggle;
