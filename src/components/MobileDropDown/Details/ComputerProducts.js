import React from "react";
import Details from "./Details";
import data from "./detailsData";

const ComputerProducts = () => {
    const { computerProducts } = data;
    return <Details {...computerProducts}/>;
};

export default ComputerProducts;
