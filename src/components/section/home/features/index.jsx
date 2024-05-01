import SubHeader from "../../../common/sub-header";
import featuresImg from "@assets/icons/features.svg";

import forecastingImg from "@assets/svg/features/forecasting.svg";
import planningImg from "@assets/svg/features/planning.svg";
import insightsImg from "@assets/svg/features/insights.svg";
import assessmentImg from "@assets/svg/features/assessment.svg";
import reportingImg from "@assets/svg/features/reporting.svg";
import dataAnimation from "@assets/lottie-animations/data/data.json";
import aiAnimation from "@assets/lottie-animations/ai/data.json";

import Feature from "./feature";

import { useTranslation } from "react-i18next";

function Features() {
  const imgMap = {
    data: dataAnimation,
    ai: aiAnimation,
    forecasting: forecastingImg,
    planning: planningImg,
    insights: insightsImg,
    assessment: assessmentImg,
    reporting: reportingImg,
  };

  const imgHandler = (title) => {
    const key = Object.keys(imgMap).find((key) =>
      title.toLowerCase().includes(key)
    );
    return key ? imgMap[key] : null;
  };

  const { t } = useTranslation();
  const features = t("features.featuresData", { returnObjects: true });

  return (
    <section className="w-[90%] mx-auto lg:py-20 md:py-16 py-8 md:py-10  ">
      <p className="mx-auto md:w-fit mb-3">
        <SubHeader
          text={t("features.header")}
          imgSrc={featuresImg}
          header
          width="100%"
        />
      </p>
      <h1 className="font-bold text-center my-6 header-one lg:leading-[60px] md:leading-[45px] leading-[40px]">
        {t("features.subHeaderOne")}
      </h1>
      <p className="text-gray_500 md:text-center text-xl md:text-2xl">
        {t("features.subHeaderTwo")}
      </p>
      <div className="flex flex-col  w-full my-10">
        {features.map((item, index) => (
          <Feature
            title={item.title}
            description={item.description}
            points={item.points}
            imgSrc={imgHandler(item.img)}
            index={index + 1}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
