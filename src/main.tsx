import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Import HashRouter
import App from "./App";
import "./global.css"; // Ensure this path is correct

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <HashRouter> {/* Wrap App in HashRouter */}
            <App />
        </HashRouter>
    </StrictMode>
);
