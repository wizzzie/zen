import React from "react";

const HowTo = () => {
  return (
    <div className="bg-black py-6 px-4 md:px-0">
      <div className="container mx-auto">
        <h3 className="text-white text-center my-4 text-4xl capitalize">
          how to use zen exchange
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              01
            </div>
            <h2 className="text-white capitalize my-3">SELECT YOUR EXCHANGE</h2>
            <p className="text-gray-300 text-[14px]">
              Select your existing crypto currency on the you have for exchange
              and enter the amount of the currency that you have for exchange on
              the “You pay” menu. After entering your existing amount, you need
              to select the currency that you want to receive from on the “You
              receive” menu.
            </p>
          </div>
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              02
            </div>
            <h2 className="text-white capitalize my-3">
              ENTER THE CRYPTO WALLET ADDRESS
            </h2>
            <p className="text-gray-300 text-[14px]">
              copy your desired wallet address you will use to receive from and
              paste it on the “Enter your xxxxxx wallet address box”. Please be
              careful when entering your wallet address as sending to a wrong
              address will result in loss of funds.
            </p>
          </div>
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              03
            </div>
            <h2 className="text-white capitalize my-3">
              ENTER YOUR EMAIL ADDRESS
            </h2>
            <p className="text-gray-300 text-[14px]">
              Enter your valid email address to receive your order notifications
              and click on confirm order.
            </p>
          </div>
          <div className="border-dotted border-[#2b2b2b] border-[3px] p-6 rounded-lg">
            <div className="text-[#ffd700] h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl bg-[#2b2b2b]">
              04
            </div>
            <h2 className="text-white capitalize my-3">SEND DEPOSIT</h2>
            <p className="text-gray-300 text-[14px]">
              Immediately you click on confirm order, Zen exchange would provide
              you the wallet address to send your deposit to or you can easily
              send via the QR code. Once payment is made, your swap will be
              processed.
            </p>
          </div>
        </div>
        <div>
          <p className="text-white text-center mt-[40px]">
            <span className="font-semibold">NOTE:</span> If you have any questions regarding this swap or
            have any further issue, kindly contact to our support or send email
            to zenexchanging1@gmail.com . Our support are active 24 hours and
            ready to assist you at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
