import { useState } from "react";
import Navbar from "../component/Navbar";
import Review from "../component/Review";
import Showcase from "../component/Showcase";
import Star from "../component/Star";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <Showcase setShow={setShow} />
      <Review />
      {show && <Star setShow={setShow} />}
    </>
  );
};

export default Home;
