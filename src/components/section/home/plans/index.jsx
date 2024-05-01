import featuresImg from "@assets/icons/features.svg";
import SubHeader from "../../../common/sub-header";

import Plan from "./plan";
import { useTranslation } from "react-i18next";

function Plans() {
  const { t } = useTranslation();
  const translatedPlans = t("plans.pricing", { returnObjects: true });

  return (
    <section
      className="w-full px-[5%] md:py-16 py-10 bg-gray_200 my-10"
      id="plans"
    >
      <h1 className="mx-auto md:w-fit w-full">
        <SubHeader
          text={t("plans.header")}
          imgSrc={featuresImg}
          header
          width="100%"
        />
      </h1>
      <p className="font-bold text-center my-5 header-one lg:leading-[60px] md:leading-[45px]">
        {t("plans.subHeader")}
      </p>
      <div className="flex md:flex-row flex-wrap  flex-col gap-2 justify-between md:mt-20 mt-8">
        {translatedPlans.map((plan, index) => (
          <Plan
            title={plan.title}
            price={plan.price}
            date={plan.date}
            features={plan.features}
            key={index}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Plans;
