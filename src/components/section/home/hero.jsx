import SubHeader from "@components/common/sub-header";
import dataIcon from "@assets/icons/data.svg";
import graphIcon from "@assets/icons/graph.svg";
import scienceIcon from "@assets/icons/science.svg";
import styled from "styled-components";
import CustomButton from "../../common/custom-button";
import { useTranslation } from "react-i18next";
import heroGif from "@assets/gif/hero.gif";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <HeroContainer className=" w-[90%] mx-auto lg:py-20 py-6 md:py-10">
      <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-2 gap-5 ">
        <div className="md:w-[50%] w-full">
          <h1 className="header-one font-bold lg:leading-[60px] md:leading-[45px] leading-[40px] ">
            {t("hero.header.wordOne")}
            <span className="text-yellow_500"> {t("hero.header.wordTwo")}</span>
            <br />
            {t("hero.header.wordThree")}
          </h1>
          <div className="flex flex-col gap-4 my-8">
            <SubHeader text={t("hero.subHeader.textOne")} imgSrc={dataIcon} />
            <SubHeader text={t("hero.subHeader.textTwo")} imgSrc={graphIcon} />
            <SubHeader
              text={t("hero.subHeader.textThree")}
              imgSrc={scienceIcon}
            />
          </div>
          <div className="block md:hidden w-full my-1">
            <CustomButton text="Get started" href="plans" scrollToId />
          </div>
        </div>
        <div className="md:w-[50%] mb-4 md:mb-0">
          <img src={heroGif} alt="" />
        </div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.div``;

export default HeroSection;
