import SubHeader from "../../common/sub-header";
import productIcon from "@assets/icons/product.svg";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import animationData from "@assets/lottie-animations/product/data.json";

export default function Product() {
  const { t } = useTranslation();
  return (
    <div className="w-[90%] mx-auto bg-black rounded-[30px] py-10 md:my-10 px-5">
      <h1 className="mx-auto w-fit">
        <SubHeader
          text={t("product.header")}
          imgSrc={productIcon}
          bgColor="#D4D4D4"
          header
        />
      </h1>
      <p className="md:w-[70%] mx-auto header-one text-white text-center lg:leading-[60px] md:leading-[45px] leading-[40px] my-5 mb-10">
        {t("product.text")}
      </p>
      <div className="flex justify-center md:px-4">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}
