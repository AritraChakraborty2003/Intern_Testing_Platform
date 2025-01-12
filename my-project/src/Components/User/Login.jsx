/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidEmail } from "../../utils/checkValidEmail.js";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext.js";
import { v4 as uuidv4 } from "uuid";
import { generateToken, setToken } from "../../utils/tokenManagement.js";
import { toast } from "react-toastify";
const Login = (props) => {
  const navigate = useNavigate();

  const { name, setName, email, setEmail, domain, setDomain, score, setScore } =
    useContext(UserContext);

  console.log(name, email);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name_entry = document.getElementById("name").value;
    const email_entry = document.getElementById("email").value;
    const domain_entry = document.getElementById("domain").value;
    const secretCode = document.getElementById("secretCode").value;

    console.log(domain_entry);

    if (
      checkValidEmail(email_entry) &&
      secretCode == `${import.meta.env.VITE_APP_USER_PASSWORD}`
    ) {
      //Setting up the login token

      localStorage.setItem(
        "details",
        JSON.stringify(name_entry + ";" + email_entry + ";" + domain_entry)
      );
      localStorage.setItem("score", JSON.stringify(score));

      const token = generateToken(
        name_entry,
        `${import.meta.env.VITE_APP_TOKEN_EXPIRATION_TIME_HRS}`
      );

      setToken(token);
      toast("Login Successful... ");
      navigate(`/rules`);
    } else {
      toast.error("Invalid email or name... ");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Done!!!");
  };
  return (
    <>
      {(props.category === "user" && (
        <div className="LoginHolder w-[100vw] pt-12 pb-10 lg:pt-0 md:h-[100vh] mt-[1.5vmin] lg:mt-0 flex justify-center items-center">
          <div className="loginHolderContainer flex w-[90%] lg:h-[85vh] mt-[-3vmin] lg:mt-0 border-lightGrey border-[1px] rounded-lg">
            <div className=" leftHolder  hidden lg:block lg:w-[50%] border-lightGrey border-[1px] h-[85vh] rounded-lg  bg-purple ">
              <div className="flex flex-col justify-center items-center h-[100%] ">
                <div className="imageHolder w-[85%] h-[50vh]  flex justify-center items-center">
                  <img
                    src="quizNew.png"
                    className="max-h-full ma-w-full object-contain "
                  />
                </div>
                <div className="textHolder flex flex-col justify-center items-center">
                  <p className="text-[7vmin] text-white font-bold">
                    Code Probe
                  </p>
                  <p className="txet-white tracking-[0.25vmin] text-white">
                    (Designed By Codemap)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-2 lg:pt-0  gap-y-12 justify-center  items-center rightHolder  w-[100vw]  lg:p-0 lg:w-[50%]  bg-bgColor pb-6  ">
              {screen.width > 1000 && (
                <div className="logoHolder mt-3">
                  <img src="CodemapLogo.png" height={150} width={150} />
                </div>
              )}
              {screen.width < 1000 && (
                <>
                  <div className="logoHolder mt-3">
                    <img src="CodemapLogo.png" height={150} width={150} />
                  </div>
                  <div className="textHolder flex flex-col justify-center items-center">
                    <p className="text-[11vmin] font-extrabold text-black font-bold mt-[-5.5vmin]">
                      Code <span className="text-purple">Probe</span>
                    </p>
                    <p className="txet-white tracking-[0.35vmin] tracking-[0.25vmin] text-black mt-2">
                      ( Designed By Codemap )
                    </p>
                  </div>
                </>
              )}
              <div className="w-[94%] 2xl:w-[85%] mt-[-1.25vmin] lg:text-[2.15vmin]">
                <div className="formHolder">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name..."
                    className="text w-[100%] p-4"
                  />
                  <br></br>
                  <br></br>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email..."
                    className="text w-[100%] p-4"
                  />
                  <br></br>
                  <br></br>
                  <input
                    type="password"
                    name="password"
                    id="secretCode"
                    placeholder="Enter your code..."
                    className="text w-[100%] p-4"
                  />
                  <br></br>
                  <br></br>

                  <select className="w-[100%] p-5" id="domain">
                    <option value="none">Choose the domain...</option>
                    <option value="git/github">git/github</option>
                    <option value="react.js">react.js</option>
                    <option value="tailwind">tailwind</option>
                    <option value="node.js">node.js</option>
                    <option value="express.js">express.js</option>
                    <option value="Spring Boot">Spring Boot</option>
                  </select>

                  <div className="btnHolder mt-8 2xl:mt-10 flex justify-center items-center">
                    <button
                      className="p-4 bg-purple text-white w-[25%]"
                      onClick={handleSubmit}
                    >
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) || (
        <div className="LoginHolder w-[100vw] pt-12 pb-10 lg:pt-0 md:h-[100vh] mt-[1.5vmin] lg:mt-0 flex justify-center items-center">
          <div className="loginHolderContainer flex w-[90%] lg:h-[85vh] mt-[-3vmin] lg:mt-0 border-lightGrey border-[1px] rounded-lg">
            <div className=" leftHolder  hidden lg:block lg:w-[50%] border-lightGrey border-[1px] h-[85vh] rounded-lg  bg-purple ">
              <div className="flex flex-col justify-center items-center h-[100%] ">
                <div className="imageHolder w-[85%] h-[50vh]  flex justify-center items-center">
                  <img
                    src="quizNew.png"
                    className="max-h-full ma-w-full object-contain "
                  />
                </div>
                <div className="textHolder flex flex-col justify-center items-center">
                  <p className="text-[7vmin] text-white font-bold">
                    Code Probe
                  </p>
                  <p className="txet-white tracking-[0.25vmin] text-white">
                    (Designed By Codemap)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col pt-2 lg:pt-0  gap-y-10 justify-center  items-center rightHolder  w-[100vw]  lg:p-0 lg:w-[50%]  bg-bgColor pb-6  ">
              <div className="logoHolder mt-3">
                <img src="CodemapLogo.png" height={150} width={150} />
              </div>
              <div className="textHolder">
                <p className="text-[5vmin] text-purple font-bold">CMS Login</p>
              </div>
              <div className="w-[94%] 2xl:w-[85%] mt-[-1.25vmin] lg:text-[2.15vmin]">
                <div className="formHolder">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name..."
                    className="text w-[100%] p-4"
                  />
                  <br></br>
                  <br></br>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email..."
                    className="text w-[100%] p-4"
                  />
                  <br></br>
                  <br></br>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password..."
                    className="text w-[100%] p-4"
                  />
                  <br></br>
                  <br></br>

                  <div className="btnHolder mt-8 2xl:mt-10 flex justify-center items-center">
                    <button
                      className="p-4 bg-purple text-white w-[25%]"
                      onClick={handleLogin}
                    >
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
