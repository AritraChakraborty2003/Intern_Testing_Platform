/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ScorePage = () => {
  const [image, setImage] = useState("");
  const scoreRes = [40, 10, 20];
  const name = "Anil Behera";
  const score = scoreRes[Math.floor(Math.random() * 4)];
  return (
    <div className="scoreHolder w-[100vw] h-[100vh] bg-bgColor flex flex-col justify-center items-center">
      <div className="scoreHolder flex flex-col justify-center items-center gap-y-3">
        <div className="emojiHolder">
          {score >= 30 && <img src="excited.png" height={180} width={180} />}
          {score < 30 && score >= 20 && (
            <img src="happy.png" height={150} width={150} />
          )}
          {score < 20 && (
            <img src="disappointed.webp" height={150} width={150} />
          )}
        </div>
        <div className="nameHolder">
          <p className="text-[12vmin] 2xl:text-[9vmin] font-extrabold text-purple mt-3">
            {score >= 30 ? "Wow!!!" : score < 20 ? "Oops!!!" : "Good Try!!!"}
            &nbsp; {name.split(" ")[0]}
          </p>
        </div>
        <div className="scoreHolder">
          <p className="text-[6vmin] text-purple">
            Your Score is :
            <span className="font-bold">&nbsp;&nbsp;{score}</span>
          </p>
        </div>

        <div className="buttonHolder flexx justify-center items-center">
          <button className="mt-10 bg-purple text-white p-4 2xl:text-[2.25vmin]">
            Check Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
