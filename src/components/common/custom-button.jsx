"react-i18next";
import { TiArrowRight } from "react-icons/ti";
import styled from "styled-components";

function CustomButton({ bgColor, text, href, scrollToId }) {
  const scrollToElement = (event) => {
    if (scrollToId) {
      event.preventDefault(); // Prevent default navigation behavior
      const element = document.getElementById(href);
      console.log(href, element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <ButtonContainer
      className="flex gap-2 items-center justify-center text-white rounded-lg py-2 px-3"
      bgColor={bgColor}
      href={href}
      onClick={scrollToElement}
    >
      <span>{text}</span>
      <span>
        <TiArrowRight size="1.5rem" />
      </span>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.a`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#000")};
  color: ${(props) => (props.bgColor ? "#000" : "#fff")};
  width: 100%;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export default CustomButton;
