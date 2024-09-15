import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("hero");

    return (

        <div className="flex flex-col h-screen ">
            <Navbar setActiveSection={setActiveSection}/>
            <Hero activeSection={activeSection}/>



        </div>
    );
};

export default App;
