import styled from "styled-components";
import logo from "@assets/icons/logo.svg";
import instagramIcon from "@assets/icons/instagram.svg";
import linkedinIcon from "@assets/icons/linkedin.svg";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();

  return (
    <FooterContainer className="md:px-16 py-10">
      <a href="/" className="no-underline">
        <img src={logo} alt="logo" className="md:h-8 h-5" />
      </a>
      <div className="flex gap-4 links">
        <a href="/privacy-policy">{t("footer.firstLink")}</a>
        <a href="/terms-of-use">{t("footer.secondLink")}</a>
      </div>
      <div className="flex gap-4">
        <div className="p-2 rounded-full bg-yellow_200">
          <img src={instagramIcon} alt="instagram" />
        </div>
        <div className="p-2 rounded-full bg-yellow_200">
          <img src={linkedinIcon} alt="linkedin" />
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Footer;
