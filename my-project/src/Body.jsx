import App from "./App";
import { useState } from "react";
import { UserContext } from "./Components/UserContext/UserContext";

const Body = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <UserContext.Provider
        value={{
          name: name,
          setName: setName,
          email: email,
          setEmail: setEmail,
          domain: domain,
          setDomain: setDomain,
          score: score,
          setScore: setScore,
        }}
      >
        <App />
      </UserContext.Provider>
    </>
  );
};

export default Body;
