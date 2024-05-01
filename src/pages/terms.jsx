import { useTranslation } from "react-i18next";
import Contact from "../components/section/home/contact";

function Terms() {
  const { t } = useTranslation();
  const terms = t("terms.termsData", { returnObjects: true });
  return (
    <section>
      <div className=" w-[90%] mx-auto  py-6 md:py-7 lg:text-xl">
        <h1 className="header-three font-bold mb-4">{t("terms.pageTitle")}</h1>
        <div className="flex flex-col gap-5">
          <div>
            <h6>{t("terms.header")}</h6>
            <h6>{t("terms.date")}</h6>
          </div>
          <p>{t("terms.description")}</p>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          {terms.map((item, index) => (
            <div key={index}>
              <h6>{`${index + 1}. ${item.title}`}</h6>
              {item.subHeader && <p className="mb-3">{item.subHeader}</p>}
              <p>{item.description}</p>
              {item.bottomText && <p>{item.bottomText}</p>}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </section>
  );
}

export default Terms;
