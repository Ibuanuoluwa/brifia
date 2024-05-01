import styled from "styled-components";
import logo from "../../assets/icons/logo.svg";
import CustomButton from "../common/custom-button";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../common/language-selector";

function Navbar() {
  const { t } = useTranslation();
  return (
    <NavbarContainer className="w-[90%] mx-auto py-6">
      <a href="/" className="no-underline">
        <img src={logo} alt="logo" className="md:h-8 h-5" />
      </a>
      <div className="flex items-center gap-5">
        <LanguageSelector />
        <div className="md:block hidden">
          <CustomButton text={t("header.button")} href="plans" scrollToId />
        </div>
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navbar;
