import markIcon from "@assets/icons/mark.svg";
import Lottie from "lottie-react";
import {
  ForecastingSvg,
  PlanningSvg,
  ReportingSvg,
  AssessementsSvg,
  InsightsSvg,
} from "../../../svgComponents";

function Feature({ title, description, points, imgSrc, index }) {
  const reverse = parseInt(index) % 2 === 0 ? true : false;

  const renderSvg = (imgSrc) => {
    if (imgSrc.includes("forecasting")) {
      return <ForecastingSvg />;
    } else if (imgSrc.includes("planning")) {
      return <PlanningSvg />;
    } else if (imgSrc.includes("reporting")) {
      return <ReportingSvg />;
    } else if (imgSrc.includes("assessment")) {
      return <AssessementsSvg />;
    } else if (imgSrc.includes("insights")) {
      return <InsightsSvg />;
    } else {
      return null;
    }
  };

  return (
    <div
      className={`flex lg:flex-row flex-col items-center justify-between gap-6 lg:gap-2 mb-10 md:mt-10 mt-3 ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:w-[45%] w-full flex flex-col gap-5">
        <h1 className="lg:text-3xl text-2xl font-semibold">{title}</h1>
        <p className="text-gray_500 text-lg md:text-xl">{description}</p>
        <ul className="flex flex-col gap-4">
          {points.map((item, index) => (
            <li className="flex gap-4 items-center md:text-lg" key={index}>
              <span>
                <img
                  src={markIcon}
                  alt="mark"
                  className="h-[15px] min-w-[20px]"
                />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-[45%] w-full md:w-[60%] ">
        <div className="w-full bg-yellow_300 rounded-[16px] flex items-center justify-center md:min-h-[400px] min-h-[280px]">
          {typeof imgSrc === "object" ? (
            <Lottie animationData={imgSrc} loop autoplay />
          ) : (
            renderSvg(imgSrc)
          )}
        </div>
      </div>
    </div>
  );
}

export default Feature;
