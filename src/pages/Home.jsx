import { useState } from "react";
import Navbar from "../component/Navbar";
import Review from "../component/Review";
import Showcase from "../component/Showcase";
import Star from "../component/Star";
import HowTo from "../component/HowTo";
import Footer from "../component/Footer";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <Showcase setShow={setShow} />
      <Review />
      {show && <Star setShow={setShow} />}
      <HowTo />
      <Footer />
    </>
  );
};

export default Home;
