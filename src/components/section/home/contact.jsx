import { useTranslation } from "react-i18next";
import CustomButton from "../../common/custom-button";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="w-full mx-auto bg-black py-20 my-10 text-white px-5">
      <h1 className="text-center header-one lg:leading-[60px] md:leading-[45px] leading-[40px] font-bold ">
        {t("contact.header")}
      </h1>
      <p className="text-center text-lg md:text-xl my-4">
        {t("features.subHeaderTwo")}
      </p>
      <div className="mx-auto md:w-fit my-10">
        <CustomButton
          text={t("contact.buttonText")}
          bgColor="#fff"
          href="mailto:support@biafira.com"
        />
      </div>
    </div>
  );
}

export default Contact;
