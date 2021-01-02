import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Navbar from "../../components/Navbar/Navbar";
import ClickSlide from "../../components/Sliders/ClickSlide/ClickSlide";
import MainSlideShow from "../../components/Sliders/MainSlideShow";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <MainTitle />
      <MainSlideShow />
      <ClickSlide />
    </section>
  );
};

export default Home;
