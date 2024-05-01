import styled from "styled-components";

function SubHeader({ imgSrc, text, bgColor, header, width }) {
  return (
    <Container
      className="flex gap-3 items-center justify-center lg:px-5 lg:py-3.5 px-3 py-2 w-fit rounded-[25px]"
      bgColor={bgColor}
      header={header}
      width={width}
    >
      <img src={imgSrc} alt="" className="lg:h-5.5 lg:w-5.5 h-5 w-5" />
      <span>{text}</span>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#F9EFE4")};
  font-size: ${(props) => (props.header ? "18px" : "14px")};
  width: ${(props) => props.width || "fit-content"};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => (props.header ? "22px" : "14px")};
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => (props.header ? "22px" : "18px")};
  }
`;

export default SubHeader;
