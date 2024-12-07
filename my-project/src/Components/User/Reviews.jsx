/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
const Reviews = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(parseInt(rate));
  };
  return (
    <>
      <div className="reviewHolder bg-bgColor w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="reviewHolder bg-white w-[96vw] md:w-[80%] pb-20 rounded-lg flex flex-col">
          <div className="contentHolder">
            <p className="text-purple font-bold text-center text-[6vmin] mt-5">
              Add a Review..
            </p>

            <div className="ratingHolder flex justify-center items-center flex-col">
              <div className="mt-10">
                <p className="text-[3.5vmin] text-purple">
                  How's your overall experience??
                </p>
                <div className="mt-5 flex justify-center items-center">
                  <Rating
                    onClick={handleRating}
                    initialValue={rating}
                    SVGstyle={{ display: "inline" }}
                  />
                </div>
              </div>
              <div className="textHolder">
                <div className="msgHolder mt-6 w-[90vw] h-[100%] md:w-[50vw] lg:h-[30vh] border-lightGrey border-[1px] p-3">
                  <textarea
                    style={{ height: "100%", width: "100%" }}
                    className="2xl:text-[2.25vmin]"
                    placeholder="Enter a review for the platform..."
                  />
                </div>
              </div>

              <div className="btnHolder flex justify-center items-center mt-6">
                <button className="bg-purple text-white p-3">
                  Check Score...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
