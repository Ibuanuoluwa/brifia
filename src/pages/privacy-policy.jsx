import { useTranslation } from "react-i18next";
import Contact from "../components/section/home/contact";

function PrivacyPolicy() {
  const { t } = useTranslation();
  const policies = t("privacyPolicy.policies", { returnObjects: true });

  return (
    <section>
      <div className=" w-[90%] mx-auto  py-6 md:py-7 lg:text-xl">
        <h1 className="header-three font-bold mb-4">
          {t("privacyPolicy.pageTitle")}
        </h1>
        <div className="flex flex-col gap-5">
          <div>
            <h6>{t("privacyPolicy.header")}</h6>
            <h6>{t("privacyPolicy.date")}</h6>
          </div>
          <p>{t("privacyPolicy.description")}</p>
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {policies.map((item, index) => (
            <div key={index}>
              <h6>{`${index + 1}. ${item.title}`}</h6>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </section>
  );
}

export default PrivacyPolicy;
