/* eslint-disable no-unused-vars */
import React from "react";

const Login = () => {
  return (
    <>
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
                <p className="text-[7vmin] text-white font-bold">Code Probe</p>
                <p className="txet-white tracking-[0.25vmin] text-white">
                  (Designed By Codemap)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-2 lg:pt-0  gap-y-12 justify-center  items-center rightHolder  w-[100vw]  lg:p-0 lg:w-[50%]  bg-bgColor pb-6  ">
            <div className="logoHolder">
              <img src="CodemapLogo.png" height={120} width={140} />
            </div>
            <div className="w-[94%] 2xl:w-[85%] mt-[-1.25vmin] lg:text-[2.15vmin]">
              <form>
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
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="text w-[100%] p-4"
                />
                <br></br>
                <br></br>

                <select className="w-[100%] p-5">
                  <option value="none">Choose the domain...</option>
                  <option value="git/github">git/github</option>
                  <option value="react.js">react.js</option>
                  <option value="tailwind">tailwind</option>
                  <option value="node.js">node.js</option>
                  <option value="express.js">express.js</option>
                  <option value="Spring Boot">Spring Boot</option>
                </select>

                <div className="btnHolder mt-8 2xl:mt-10 flex justify-center items-center">
                  <button className="p-4 bg-purple text-white w-[25%]">
                    Start
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
