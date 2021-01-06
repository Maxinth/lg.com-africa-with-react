import React from "react";
import GenerateTabSlideCard from "../GenerateTabSlideCard";
import newestItems from "./data";
const Newest = () => {
  return (
    <section className="newest">
      <section className="newest__container">
        <GenerateTabSlideCard data={newestItems} />
      </section>
    </section>
  );
};

export default Newest;
