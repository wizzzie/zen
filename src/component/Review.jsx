import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="my-[40px]" id="review">
      <div className="container mx-auto">
        <div className="overflow-x-scroll p-3 scrollbar scrollbar-thumb-red-600 ">
          <div className="flex gap-3">
            <div className="flex items-center justify-between shadow-lg shadow-black bg-[#aeaeae] p-4 rounded-[10px] min-w-[300px] md:min-w-[500px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-50 object-contain overflow-hidden">
                  <img
                    src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
                    alt="#"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="capitalize text-[13px] font-medium">
                    by john doe
                  </span>
                  <p className="capitalize text-[25px] text-red-600">
                    very goood
                  </p>
                  <div className="flex items-center gap-3 text-yellow-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span>17hrs ago</span>
            </div>

            <div className="flex items-center justify-between shadow-lg shadow-black bg-[#aeaeae] p-4 rounded-[10px] min-w-[300px] md:min-w-[500px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-50 object-contain overflow-hidden">
                  <img
                    src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
                    alt="#"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="capitalize text-[13px] font-medium">
                    by john doe
                  </span>
                  <p className="capitalize text-[25px] text-red-600">
                    very goood
                  </p>
                  <div className="flex items-center gap-3 text-yellow-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span>17hrs ago</span>
            </div>

            <div className="flex items-center justify-between shadow-lg shadow-black bg-[#aeaeae] p-4 rounded-[10px] min-w-[300px] md:min-w-[500px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-50 object-contain overflow-hidden">
                  <img
                    src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
                    alt="#"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="capitalize text-[13px] font-medium">
                    by john doe
                  </span>
                  <p className="capitalize text-[25px] text-red-600">
                    very goood
                  </p>
                  <div className="flex items-center gap-3 text-yellow-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span>17hrs ago</span>
            </div>

            <div className="flex items-center justify-between shadow-lg shadow-black bg-[#aeaeae] p-4 rounded-[10px] min-w-[300px] md:min-w-[500px]">
              <div className="flex gap-5 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-50 object-contain overflow-hidden">
                  <img
                    src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
                    alt="#"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="capitalize text-[13px] font-medium">
                    by john doe
                  </span>
                  <p className="capitalize text-[25px] text-red-600">
                    very goood
                  </p>
                  <div className="flex items-center gap-3 text-yellow-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <span>17hrs ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
