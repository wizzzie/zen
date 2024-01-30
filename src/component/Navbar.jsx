import { useState } from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="shadow-xl shadow-[#000]">
      <div className="container mx-auto sm:px-0 px-3 ">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="./images/logo.png"
              alt="Logo"
              className="sm:w-[110px] sm:h-[110px] object-contain w-[90px] h-[90px]"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <a
              href="#swap"
              className="text-[18px] capitalize text-red-600 block transition-all ease-in-out duration-300"
            >
              swap
            </a>
            <a
              href="#review"
              className="text-[18px] capitalize text-red-600 block transition-all ease-in-out duration-300"
            >
              reviews
            </a>
          </div>
          <div className="relative sm:w-[110px] flex justify-end">
            <BsGlobeAsiaAustralia
              className="text-red-600 text-2xl"
              onClick={() => setShow(!show)}
            />
            <div
              className={`absolute z-10 right-[0%] bg-gray-500 w-[130px] p-3 ${
                show ? "top-[150%]" : "-top-[900%]"
              } transition-all ease-in-out duration-300`}
            >
              <div className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-600 p-2 transition-all ease-in-out duration-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png"
                  alt="#"
                  className="w-[30px] h-[30px] object-contain"
                />
                <p className="text-white text-xl capitalize">france</p>
              </div>
              <div className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-600 p-2 transition-all ease-in-out duration-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png"
                  alt="#"
                  className="w-[30px] h-[30px] object-contain"
                />
                <p className="text-white text-xl capitalize">france</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
