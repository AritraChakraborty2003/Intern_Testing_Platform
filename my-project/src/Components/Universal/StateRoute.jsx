/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext.js";
import { useContext } from "react";
import { verifyToken } from "../../utils/tokenManagement.js";
import { useEffect } from "react";
const StateRoute = ({ children }) => {
  const {
    name,
    setName,
    email,
    setEmail,
    domain,
    setDomain,
    score1,
    setScore,
  } = useContext(UserContext);

  try {
    const data = localStorage.getItem("details").split(";");
    const score = localStorage.getItem("score");

    setName(data[0].replaceAll('"', ""));
    setEmail(data[1]);
    setDomain(data[2].replaceAll('"', ""));
    setScore(score);
  } catch (err) {
    console.log("No details found in local storage");
    return <Navigate to="/login" />;
  }

  return children;
};

export default StateRoute;
