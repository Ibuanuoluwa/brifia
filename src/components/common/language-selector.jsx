import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { languages } from "../../data";

function LanguageSelector() {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setShowLanguages(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function getDefaultLanguage() {
      const userLanguage = navigator.language.substr(0, 2).toUpperCase();

      const matchedLanguage = languages.find(
        (lang) => lang.name === userLanguage
      );
      return matchedLanguage || languages[0];
    }
    getDefaultLanguage();
  }, []);

  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  const [showLanguages, setShowLanguages] = useState(false);
  const selectorRef = useRef(null);

  const filteredLanguage = languages.filter(
    (item) => item.name !== activeLanguage.name
  );

  const activeLanguageHandler = (lng) => {
    setActiveLanguage(lng);
    i18n.changeLanguage(lng.name.toLowerCase());
    setShowLanguages(false);
  };

  return (
    <SelectorContainer
      showLanguages={showLanguages}
      className="text-lg lg:text-xl font-semibold"
      ref={selectorRef}
    >
      <button
        className="active-language flex gap-2 md:gap-3 items-center"
        onClick={() => setShowLanguages(!showLanguages)}
      >
        <span className="h-6 w-6 lg:h-8 lg:w-8">
          {
            <img
              src={activeLanguage.icon}
              className="w-full h-full object-contain"
            />
          }
        </span>
        <span>{activeLanguage.name}</span>
      </button>
      <div className="languages shadow-md">
        {filteredLanguage.map((item, index) => (
          <button
            className=" flex gap-2 md:gap-3 items-center text-gray_500"
            key={index}
            onClick={() => activeLanguageHandler(item)}
          >
            <span className="h-6 w-6 lg:h-8 lg:w-8">
              {<img src={item.icon} className="w-full h-full object-contain" />}
            </span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </SelectorContainer>
  );
}

const SelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;

  .active-language {
    padding: 0px 10px;
  }

  .languages {
    display: ${(props) => (props.showLanguages ? "flex" : "none")};
    flex-direction: column;
    margin-top: 30px;
    gap: 15px;
    position: absolute;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    z-index: 10;
  }
`;

export default LanguageSelector;
