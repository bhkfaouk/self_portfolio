import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css"; // Ensure this path is correct
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Failed to find the root element");
}
const root = createRoot(rootElement);
root.render(_jsx(StrictMode, { children: _jsx(App, {}) }));
