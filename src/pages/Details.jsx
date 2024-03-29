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
        <h1 className="text-white text-3xl capitalize tracking-wider">
          {t("your_swap_details")}
        </h1>
        {loading ? (
          "Loadd...................."
        ) : (
          <div className="backdrop-blur-3xl bg-[#1a1a1a] p-5 rounded-xl shadow-lg shadow-red-500 w-[100%] md:w-[70%]">
            <p className="text-white text-right mb-[30px]">
              {t("ticket_id")}:{" "}
              <span className="text-red-500">#{orderDetails._id}</span>
            </p>
            <div className="flex md:items-center justify-between mb-[30px]">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={orderDetails.fromImage}
                  alt="#"
                  className="w-[100px] h-[100px] object-contain"
                />
                <p className="capitalize text-red-600 text-xl">
                  {t("you_send")}
                </p>
                <p className="capitalize text-white text-lg">
                  {orderDetails.fromAmount}
                </p>
                <p className="capitalize text-gray-300 text-xl">
                  {orderDetails.from}
                </p>
              </div>
              <HiSwitchHorizontal className="text-4xl text-white mt-[30px] md:mt-0" />
              <div className="flex flex-col items-center gap-2">
                <img
                  src={orderDetails.toImage}
                  alt="#"
                  className="w-[100px] h-[100px] object-contain"
                />
                <p className="capitalize text-red-600 text-xl">
                  {t("you_get")}
                </p>
                <p className="capitalize text-white text-lg">
                  {orderDetails?.toAmount?.toFixed(3)}
                </p>
                <p className="capitalize text-gray-300 text-xl">
                  {orderDetails.to}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="text-white tracking-wide capitalize font-bold">
                  {t("order_date")}
                </p>
                <span className="text-red-600 tracking-wide capitalize">
                  <Moment
                    date={orderDetails?.createdAt}
                    format="DD MMMM yyyy"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="text-white tracking-wide capitalize font-bold">
                  {t("your_email_address")}
                </p>
                <span className="text-red-600 tracking-wide">
                  {orderDetails.email}
                </span>
              </div>
              <div className="grid grid-cols-2 md:flex items-center justify-between mb-[15px]">
                <p className="text-white tracking-wide capitalize font-bold">
                  {t("your_wallet_address")}
                </p>
                <span className="text-red-600 block break-words">
                  {orderDetails.toWallet}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
