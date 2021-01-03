import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Navbar from "../../components/Navbar/Navbar";
import ClickSlide from "../../components/Sliders/ClickSlide/ClickSlide";
import MainSlideShow from "../../components/Sliders/MainSlideShow";
import TvSlide from "../../components/Sliders/TvSlide/TvSlide";
import "./home.css";
const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <MainTitle />
      <MainSlideShow />
      <ClickSlide />
      <TvSlide />
    </section>
  );
};

export default Home;
