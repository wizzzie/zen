import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-white p-4">
      <div className="containe mx-auto flex items-center justify-between flex-col md:flex-row">
        <img
          src="./images/blk.png"
          alt="Footer_imgae"
          className="h-[90px] w-[150px] object-contain"
        />
        <p className="capitalize">
          &copy; copyright {currentYear} zen exchange all rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
