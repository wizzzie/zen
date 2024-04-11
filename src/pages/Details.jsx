import React, { useEffect, useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { publicRequest } from "../request";
import Moment from "react-moment";

const Details = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState({});

  const getOrderDetails = async () => {
    try {
      const res = await publicRequest.get(`/order/${id}`);
      setOrderDetails(res.data.singleOrder);
      setLoading(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, [id]);
  return (
    <div className="px-3 md:px-0">
      <div className="container mx-auto h-screen w-[100%] flex items-center justify-center flex-col gap-5">
        <h1 className="text-black text-3xl capitalize tracking-wider">
          {t("your_swap_details")}
        </h1>
        {loading ? (
          "Loadd...................."
        ) : (
          <div className="backdrop-blur-3xl bg-white p-5 rounded-xl shadow-lg shadow-[#FFD700] w-[100%] md:w-[70%]">
            <p className="text-black text-right mb-[30px]">
              {t("ticket_id")}:{" "}
              <span className="text-[#FFD700]">#{orderDetails._id}</span>
            </p>
            <div className="flex md:items-center justify-between mb-[30px]">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={orderDetails.fromImage}
                  alt="#"
                  className="w-[100px] h-[100px] object-contain"
                />
                <p className="capitalize text-black text-xl">{t("you_send")}</p>
                <p className="capitalize text-black text-lg">
                  {orderDetails.fromAmount}
                </p>
                <p className="capitalize text-black text-xl">
                  {orderDetails.from}
                </p>
              </div>
              <HiSwitchHorizontal className="text-4xl text-black mt-[30px] md:mt-0" />
              <div className="flex flex-col items-center gap-2">
                <img
                  src={orderDetails.toImage}
                  alt="#"
                  className="w-[100px] h-[100px] object-contain"
                />
                <p className="capitalize text-black text-xl">{t("you_get")}</p>
                <p className="capitalize text-black text-lg">
                  {orderDetails?.toAmount?.toFixed(3)}
                </p>
                <p className="capitalize text-black text-xl">
                  {orderDetails.to}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="text-black tracking-wide capitalize font-bold">
                  {t("order_date")}
                </p>
                <span className="text-black tracking-wide capitalize">
                  <Moment
                    date={orderDetails?.createdAt}
                    format="DD MMMM yyyy"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="text-black tracking-wide capitalize font-bold">
                  {t("your_email_address")}
                </p>
                <span className="text-black tracking-wide">
                  {orderDetails.email}
                </span>
              </div>
              <div className="grid grid-cols-2 md:flex items-center justify-between mb-[15px]">
                <p className="text-black tracking-wide capitalize font-bold">
                  {t("your_wallet_address")}
                </p>
                <span className="text-blackblock break-words">
                  {orderDetails.toWallet}
                </span>
              </div>
              <div className="flex items-center justify-center">
                {orderDetails?.confirmed ? (
                  <p className="capitalize text-green-600 px-[30px] py-[10px] border border-green-500 rounded-lg">
                    confirmed
                  </p>
                ) : (
                  <p className="capitalize text-red-600 px-[30px] py-[10px] border border-red-500 rounded-lg">
                    processing
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
