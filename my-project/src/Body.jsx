import App from "./App";
import { useState } from "react";
import { UserContext } from "./Components/UserContext/UserContext";

const Body = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [ansList, setAnsList] = useState([]);
  const [correctAnsList, setCorrectAnsList] = useState([]);

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
          ansList: ansList,
          setAnsList: setAnsList,
          correctAnsList: correctAnsList,
          setCorrectAnsList: setCorrectAnsList,
        }}
      >
        <App />
      </UserContext.Provider>
    </>
  );
};

export default Body;
