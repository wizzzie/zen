import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { publicRequest } from "../request";
import { toast } from "react-toastify";

const Star = ({ setShow }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // PARAMETERS FOR REVIEW
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submitReview = async () => {
    setLoading(true);
    try {
      const res = await publicRequest.post("/rating", {
        stars: rating,
        name,
        message,
      });
      toast.success(res.data.message);
      setShow(false);
      setLoading(false);
    } catch (error) {
      console.log(object);
    }
  };
  return (
    <div className="fixed top-0 left-0 h-screen bg-[#FFD700]/70 z-50 w-full flex items-center justify-center px-5 md:px-0">
      <div className="bg-black p-6 rounded-2xl md:w-[600px] w-full">
        <div className="flex items-center justify-end">
          <IoMdClose
            className="text-white text-4xl cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <h1 className="text-slate-200 capitalize text-2xl font-bold">
          Leave a review.
        </h1>
        <div>
          <div className="flex items-center justify-center gap-5 my-[30px]">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    className="hidden"
                  />
                  <FaStar
                    className="text-slate-300 cursor-pointer text-4xl md:text-7xl"
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#cbd5e1"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <input
            type="text"
            placeholder="Your name"
            className="border border-slate-500 bg-transparent text-slate-300 w-full rounded-xl p-3 my-3"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows="5"
            className="border border-slate-500 bg-transparent text-slate-300 w-full rounded-xl p-3"
            placeholder="Please Leave a Rating"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {loading ? (
            <button className="bg-[#FFD700] hover:bg-[#FFD700]/50 transition-all duration-300 ease-in-out py-[10px] w-full my-[25px] rounded-xl">
              Sending...............
            </button>
          ) : (
            <button
              className="bg-[#FFD700] hover:bg-[#FFD700]/50 transition-all duration-300 ease-in-out py-[10px] w-full my-[25px] rounded-xl"
              onClick={submitReview}
            >
              Send Review
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Star;
