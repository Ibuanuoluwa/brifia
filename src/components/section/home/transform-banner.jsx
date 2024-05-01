import transformImg from "@assets/svg/transform.svg";
import { useTranslation } from "react-i18next";

function TransformBanner() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-[90%] bg-yellow_300 rounded-[36px] py-16 md:my-22 my-12 px-5">
      <p className="md:w-[80%] mx-auto lg:text-4xl text-2xl md:text-3xl  text-center my-5 mb-10">
        {t("transform.header")}
      </p>
      <div className="flex justify-center">
        <img src={transformImg} alt="transform" />
      </div>
    </div>
  );
}

export default TransformBanner;
