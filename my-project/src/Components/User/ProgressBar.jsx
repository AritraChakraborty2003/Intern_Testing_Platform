/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ProgressBar = (props) => {
  const { start, end, height, width, timer, bgColor, borderColor } = props;
  //   const [value, setValue] = useState(start);
  const [value, setValue] = useState(start);
  // const [percent, setPercent] = useState(value);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 1);
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <>
      <div
        className="holder rounded-md"
        style={{
          height: height,
          width: width,
          border: `1px solid ${borderColor} `,
        }}
      >
        <div
          className="navBg"
          style={{
            backgroundColor: `${bgColor ? bgColor : "#008000"}`,
            width: `${value <= 100 ? value + "%" : "100%"}`,
            height: "100%",
          }}
        >
          <span
            className="flex justify-center items-center"
            style={{
              width: width,
              height: "100%",
              color: `${value <= 49 ? "#000000" : "#fff"}`,
            }}
          >
            {value <= end ? (
              <span className="2xl:text-[2.25vmin]">{value.toFixed()}%</span>
            ) : (
              <span className="2xl:text-[2.25vmin]">100%</span>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
