import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Body from "./Body";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Body />
  </StrictMode>
);
