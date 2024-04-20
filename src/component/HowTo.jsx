import React from "react";
import { useTranslation } from "react-i18next";

const HowTo = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black py-6 px-4 md:px-0">
      <div className="container mx-auto">
        <h3 className="text-white text-center my-4 text-4xl capitalize">
          {t("how_to")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              01
            </div>
            <h2 className="text-white uppercase my-3">{t("title_1")}</h2>
            <p className="text-gray-300 text-[14px]">{t("content_1")}</p>
          </div>
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              02
            </div>
            <h2 className="text-white uppercase my-3">{t("title_2")}</h2>
            <p className="text-gray-300 text-[14px]">{t("content_2")}</p>
          </div>
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              03
            </div>
            <h2 className="text-white uppercase my-3">{t("title_3")}</h2>
            <p className="text-gray-300 text-[14px]">{t("content_3")}</p>
          </div>
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              04
            </div>
            <h2 className="text-white uppercase my-3">{t("title_4")}</h2>
            <p className="text-gray-300 text-[14px]">{t("content_4")}</p>
          </div>
        </div>
        <div>
          <p className="text-white text-center mt-[40px]">
            <span className="font-semibold">NOTE:</span> If you have any
            questions regarding this swap or have any further issue, kindly
            contact to our support or send email to zenexchanging1@gmail.com .
            Our support are active 24 hours and ready to assist you at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
