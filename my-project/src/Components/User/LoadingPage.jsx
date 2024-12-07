import ProgressBar from "./ProgressBar";

const LoadingPage = () => {
  return (
    <>
      <div className="loadingPageContainer w-[100vw] h-[100vh] flex flex-col bg-bgColor justify-center items-center">
        <div className="lg:mt-[-10vmin] flex flex-col justify-center items-center gap-y-4 ">
          <div className="imageHolder">
            <img src="CodemapLogo.png" height={150} width={150} />
          </div>
          <div className="flex flex-col justify-center items-center mt-6">
            <div className="textHolder">
              <p className="text-purple font-mono  font-medium text-[4vmin]">
                Calculating Scores...
              </p>
            </div>
            <div className="progressBarHolder flex justify-center items-center mt-3">
              {(screen.width > 1000 && (
                <ProgressBar
                  start={0}
                  end={100}
                  height={"7vmin"}
                  width={"45vw"}
                  timer={80}
                  bgColor={"#7e5bef"}
                  borderColor={"#7e5bef"}
                />
              )) || (
                <ProgressBar
                  start={0}
                  end={100}
                  height={"12vmin"}
                  width={"80vw"}
                  timer={50}
                  bgColor={"#7e5bef"}
                  borderColor={"#7e5bef"}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-purple tracking-[0.35vmin]">
            ( Hold your breathe for the results!!! )
          </p>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
