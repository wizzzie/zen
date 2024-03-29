import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { publicRequest } from "../request";
import Moment from "react-moment";

const Review = () => {
  const [ratings, setRatings] = useState([]);

  const getRatings = async () => {
    try {
      const res = await publicRequest.get("/rating");
      setRatings(res.data.allRatings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRatings();
  }, []);
  return (
    <div className="my-[40px]" id="review">
      <div className="container mx-auto">
        <div className="overflow-x-scroll p-3 scrollbar scrollbar-thumb-red-600 ">
          <div className="flex gap-3">
            {ratings.map((rating) => (
              <div
                className="flex flex-col md:flex-row items-center justify-between shadow-lg shadow-black bg-[#aeaeae] p-4 rounded-[10px] min-w-[300px] md:min-w-[700px]"
                key={rating._id}
              >
                <div className="flex gap-5 items-center flex-col md:flex-row">
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-50 object-contain overflow-hidden">
                    <img
                      src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png"
                      alt="#"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="capitalize text-[13px] font-medium text-center md:text-left">
                      by {rating.name}
                    </span>
                    <p className="capitalize text-[17px] text-red-600 max-w-[500px] text-center md:text-left">
                      {rating.message}
                    </p>
                    <div className="flex justify-center md:justify-start my-3 md:my-0 items-center gap-3 text-yellow-600">
                      {[...Array(rating.stars)].map((item, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="capitalize"><Moment date={rating?.createdAt} fromNow/></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
