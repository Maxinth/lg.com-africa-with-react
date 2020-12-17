import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import Navbar from "../../components/Navbar/Navbar";
import MainSlideShow from "../../components/Sliders/MainSlideShow";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <MainTitle />
      <MainSlideShow />
    </section>
  );
};

export default Home;
