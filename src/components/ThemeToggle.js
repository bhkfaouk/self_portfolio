import { jsx as _jsx } from "react/jsx-runtime";
// src/components/ThemeToggle.tsx
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    return (_jsx("button", { onClick: toggleTheme, className: "p-2 rounded-full hover:bg-gray-700", children: _jsx(FontAwesomeIcon, { icon: theme === 'dark' ? faSun : faMoon, className: "w-6 h-6" }) }));
};
export default ThemeToggle;
