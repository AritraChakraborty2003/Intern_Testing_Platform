import { CompareDateStrings } from "./compareDateStrings";
import { compareTimeStrings } from "./compareTimeStrings";

/* eslint-disable no-unused-vars */
export const generateToken = (payload, EXPIRY_TIME) => {
  try {
    const currTime = new Date();
    currTime.setHours(currTime.getHours() + parseInt(EXPIRY_TIME));
    const expiryDate = currTime.toUTCString();

    const tokenString = `payload=${payload};` + `${expiryDate};` + `type=user`;
    return tokenString;
  } catch (err) {
    return null;
  }
};

export const verifyToken = (EXPIRY_TIME) => {
  try {
    const token = getToken();
    if (!token) {
      return false;
    }

    const expiryDate = token.split(";")[1];
    const date = new Date();

    return (
      CompareDateStrings(expiryDate, date.toUTCString()) &&
      compareTimeStrings(
        expiryDate.split(" ")[4],
        date.toUTCString().split(" ")[4]
      )
    );
  } catch (error) {
    console.error("Error verifying token:", error);
    return false;
  }
};

export const setToken = (token) => {
  try {
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Error setting token:", error);
  }
};
export const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    } else {
      return token;
    }
  } catch (error) {
    console.error("Error getting token:", error);
    return false;
  }
};
