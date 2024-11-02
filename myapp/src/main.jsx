import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div>
    <div className="MainContainer">
      <Header />
    </div>
    <MainContent />
  </div>
);
