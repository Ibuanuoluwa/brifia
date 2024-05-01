import styled from "styled-components";
import bannerBackground from "@assets/svg/banner-bg.svg";
import microsoftImg from "@assets/svg/microsoft.svg";
import flagImg from "@assets/svg/flag.jpg";

import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();
  return (
    <StyledBanner className="md:w-full md:pl-[5%] w-[90%] mx-auto bg-black md:bg-transparent rounded-2xl md:rounded-none md:mt-4">
      <img src={bannerBackground} alt="" className="absolute z-[-1] bg-img " />
      <div className="flex flex-col md:mx-[10%] md:mt-14 py-6 md:py-0 gap-4 md:gap-0">
        <h1 className="text-2xl text-center md:text-left">
          {t("hero.banner.textOne")}
        </h1>
        <div className="flex md:flex-row flex-col md:gap-6 gap-5 items-center">
          <div className="lg:h-[88px] h-[63px]">
            <img
              src={microsoftImg}
              alt="microsoft"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="line" />
          <div className="lg:h-[85px] h-[60px]">
            <img src={flagImg} alt="flag" className="h-full object-contain" />
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .line {
    width: 60%;
    height: 0.5px;
    background-color: white;
    opacity: 0.8;
  }

  .bg-img {
    display: none;
  }

  .avatar {
    .img-container {
      width: 45px;
      height: 45px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }

  @media screen and (min-width: 760px) {
    height: 360px;
    width: 100%;

    .line {
      height: 80%;
      width: 0.5px;
      background-color: white;
      opacity: 0.8;
    }
    .bg-img {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    .avatar {
      .img-container {
        width: 50px;
        height: 50px;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }
`;

export default Banner;
