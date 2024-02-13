import React from "react";
import { HiSwitchVertical } from "react-icons/hi";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();
  return (
    <div className="px-3 md:px-0">
      <div className="container mx-auto h-screen w-[100%] flex items-center justify-center flex-col gap-5">
        <h1 className="text-white text-3xl capitalize tracking-wider">
          {t("your_swap_details")}
        </h1>
        <div className="backdrop-blur-3xl bg-[#1a1a1a] p-5 rounded-xl shadow-lg shadow-red-500 w-[100%] md:w-[70%]">
          <p className="text-white text-right mb-[30px]">
            {t("ticket_id")}: <span className="text-red-500">#62338582</span>
          </p>
          <div className="flex md:items-center justify-between mb-[30px]">
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                alt="#"
                className="w-[100px] h-[100px] object-contain"
              />
              <p className="capitalize text-red-600 text-xl">{t("you_send")}</p>
              <p className="capitalize text-white text-lg">0.2</p>
              <p className="capitalize text-gray-300 text-xl">solana</p>
            </div>
            <HiSwitchHorizontal className="text-4xl text-white mt-[30px] md:mt-0" />
            <div className="flex flex-col items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png"
                alt="#"
                className="w-[100px] h-[100px] object-contain"
              />
              <p className="capitalize text-red-600 text-xl">{t("you_get")}</p>
              <p className="capitalize text-white text-lg">0.2</p>
              <p className="capitalize text-gray-300 text-xl">solana</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-[15px]">
              <p className="text-white tracking-wide capitalize font-bold">
                {t("order_date")}
              </p>
              <span className="text-red-600 tracking-wide capitalize">
                25th jan 2024
              </span>
            </div>
            <div className="flex items-center justify-between mb-[15px]">
              <p className="text-white tracking-wide capitalize font-bold">
                {t("your_email_address")}
              </p>
              <span className="text-red-600 tracking-wide">
                johndoe@gmail.com
              </span>
            </div>
            <div className="grid grid-cols-2 md:flex items-center justify-between mb-[15px]">
              <p className="text-white tracking-wide capitalize font-bold">
                {t("your_wallet_address")}
              </p>
              <span className="text-red-600 block break-words">
                4n2fg034hd7q0w9yd7gdihey7dghygsycystcf6tsyctxcftx
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
