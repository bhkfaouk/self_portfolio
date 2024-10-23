import { jsx as _jsx } from "react/jsx-runtime";
import TimelineItem from "./TimelineItem";
const Experience = () => {
    // Define your timeline events as an array of objects
    const timelineEvents = [
        {
            title: "Java Backend developer for e-commerce platforme ",
            date: "Teletic ,Fabruary  2024",
            description: "development of an commerce platform for phone accessories s utilizing Spring Boot to construct a robust, scalable and I secure\n" +
                "backend",
            isLatest: true
        },
        {
            title: "Java Developer SpringBoot",
            date: " Teletic ,November, 2023",
            description: "Developed a and optimized REST APIs for the Admin dashboard of a Topup solution (with 40k/dayt transactions)",
        },
        {
            title: "Java Freelancer",
            date: "December , 2022",
            description: "Developed desktop applications for management systems for gyms, grocery stores, and small warehouses using Java Swing and JavaFX, integrated with MySQL and Firebase.",
        },
        {
            title: "Java Freelancer",
            date: "September , 2022",
            description: "Developed an automated backend for the AliExpress affiliate program using Spring Boot, integrating Telegram Bot API as the frontend. The system automates tasks like generating affiliate links, retrieving promotions, searching and comparing product prices, and more, with Firebase as the database for users and bot information.",
        }
    ];
    return (_jsx("section", { id: "experience", className: "p-10 h-auto dark:bg-background-primary bg-background-secondary dark:text-white text-black", children: _jsx("ol", { className: "relative border-s border-gray-400 dark:border-gray-700", children: timelineEvents.map((event, index) => (_jsx(TimelineItem, { title: event.title, date: event.date, description: event.description, isLatest: event.isLatest }, index))) }) }));
};
export default Experience;
