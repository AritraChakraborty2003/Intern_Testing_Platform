import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Body from "./Body";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Body />
    <ToastContainer />
  </StrictMode>
);
