import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App = () => {
    const [activeSection, setActiveSection] = useState("hero");
    return (_jsxs("div", { className: "flex flex-col h-screen ", children: [_jsx(Navbar, { setActiveSection: setActiveSection }), _jsx(Hero, { activeSection: activeSection })] }));
};
export default App;
