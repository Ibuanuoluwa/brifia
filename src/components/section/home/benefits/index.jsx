import SubHeader from "../../../common/sub-header";
import featuresImg from "@assets/icons/features.svg";
import Benefit from "./benefit";
import CustomButton from "../../../common/custom-button";
import featureIcon from "@assets/icons/features.svg";
import { useTranslation } from "react-i18next";

function Benefits() {
  const imgMap = {
    benefit: featureIcon,
  };

  const imgHandler = (title) => {
    const key = Object.keys(imgMap).find((key) =>
      title.toLowerCase().includes(key)
    );
    return key ? imgMap[key] : null;
  };

  const { t } = useTranslation();
  const benefits = t("benefits.benefitsData", { returnObjects: true });

  return (
    <section className="mx-auto w-[90%] md:my-16 my-10">
      <h1 className="mx-auto md:w-fit mb-3">
        <SubHeader
          text={t("benefits.header")}
          imgSrc={featuresImg}
          header
          width="100%"
        />
      </h1>
      <p className="font-bold  header-one lg:leading-[60px] md:leading-[45px] leading-[40px] text-center my-5 mx-auto md:w-[80%]">
        {t("benefits.subHeader")}
      </p>
      <div className="flex justify-between flex-wrap gap-4 md:flex-row flex-col md:my-10 my-4">
        {benefits.map((item, index) => (
          <Benefit
            title={item.title}
            description={item.description}
            icon={imgHandler(item.icon)}
            key={index}
          />
        ))}
      </div>
      <div className="mx-auto md:w-fit my-8 w-full">
        <CustomButton text="Get Started" href="plans" scrollToId />
      </div>
    </section>
  );
}

export default Benefits;
