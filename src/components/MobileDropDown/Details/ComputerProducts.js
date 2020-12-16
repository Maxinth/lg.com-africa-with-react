import React from "react";
import Details from "./Details";
import data from "./detailsData";

const ComputerProducts = ({largerScreens}) => {
    const { computerProducts } = data;
    return <Details {...computerProducts} largerScreens={largerScreens} />;
};

export default ComputerProducts;
