import styled from "styled-components";
import markIcon from "@assets/icons/mark.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

function Plan({ title, price, date, features, index }) {
  const borderStyle = parseInt(index % 2) === 0 ? true : false;
  const { t } = useTranslation();
  const [link, setLink] = useState("");

  useEffect(() => {
    const formattedTitle = title.toLowerCase();
    if (formattedTitle === "small") {
      setLink("https://dashboard.brifia.com/package?type=small");
    }
    if (formattedTitle === "medium") {
      setLink("https://dashboard.brifia.com/package?type=medium");
    }
    if (formattedTitle === "large") {
      setLink("https://dashboard.brifia.com/package?type=large");
    }
  }, [title]);

  return (
    <PlanConatiner
      className="lg:w-[30%] w-full md:w-[40%] "
      borderStyle={borderStyle}
    >
      <div className="plan-content">
        <div>
          <p className="text-[30px] font-bold text-gray_500 ">{title}</p>
          <h1 className="text-[50px] font-bold  leading-[55px]">{price}</h1>
          <p className="text-xl text-gray_500">{date}</p>
        </div>
        <ul>
          {features.map((item, index) => (
            <li className="flex gap-4 items-center text-base" key={index}>
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
      <div className="mx-auto md:w-fit  w-full">
        <button>
          <a href={link}>{t("plans.buttonText")}</a>
        </button>
      </div>
    </PlanConatiner>
  );
}

const PlanConatiner = styled.div`
  @media screen and (min-width: 1024px) {
    .plan-content {
      margin-top: ${(props) => (props.borderStyle ? "-30px" : "0")};
    }
  }

  @media screen and (min-width: 768px) {
    .plan-content {
      min-height: 710px;
    }
  }
  .plan-content {
    width: 100%;

    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    background-color: white;
    border-radius: 30px;
    gap: 30px;
    border: ${(props) => (props.borderStyle ? "2px solid #DCA15D" : "none")};

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
  button {
    margin: 20px auto;
    background-color: ${(props) => (props.borderStyle ? "#DCA15D" : "black")};
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    width: 100%;
  }
`;

export default Plan;
