/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext.js";
import { useContext } from "react";
import { verifyToken } from "../../utils/tokenManagement.js";

const ProtectedRoute = ({ children }) => {
  if (!verifyToken(`${import.meta.env.VITE_APP_TOKEN_EXPIRATION_TIME_HRS}`)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
