import React from "react";
import Footer from "../../components/Footer/Footer";
import LgCards from "../../components/LgCards/LgCards";
import MainTitle from "../../components/MainTitle/MainTitle";
import Navbar from "../../components/Navbar/Navbar";
import ClickSlide from "../../components/Sliders/ClickSlide/ClickSlide";
import MainSlideShow from "../../components/Sliders/MainSlideShow";
import TvSlide from "../../components/Sliders/TvSlide/TvSlide";
import TabWithSlides from "../../components/TabWithSlides/TabWithSlides";
import "./home.css";
const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <MainTitle />
      <MainSlideShow />
      <ClickSlide />
      <TvSlide />
      <LgCards />
      <TabWithSlides />
      <Footer />
    </section>
  );
};

export default Home;
