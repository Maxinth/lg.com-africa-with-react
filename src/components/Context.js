import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showNavItems, setShowNavItems] = useState(true);
  const toggleNavItems = () => setShowNavItems(!showNavItems);

  // state for hamburger on smaller and mobile screens
  const [bar, setBar] = useState(false);
  const toggleBar = () => setBar(!bar);

  // state for search on mobile Screens
  const [isSearchInView, setIsSearchInView] = useState(false);
  const toggleSearch = () => setIsSearchInView(!isSearchInView);
  const closeSearchBox = () => setIsSearchInView(false);

  // state for bringing productItems into view on screen sizes between 768px and 1326px - products goes true
  // and tv, ac, etc come into view, when each of these are hovered on the state defined in line 68-78 handle the rest
  const [showItems, setShowItems] = useState({
    products: false,
    support: false,
  });

  // show productItems on >= 768px
  const productsItemsInView = () => {
    return setShowItems({ products: true, support: false });
  };

  // hide both support and product
  const bothItemsHidden = () =>
    setShowItems({
      products: false,
      support: false,
    });
  const supportInView = () => setShowItems({ products: false, support: true });

  // 1. state for displaying more details based on listItem (ON MOBILE and SMALL SCREENS)

  const productItemsData = {
    tv: false,
    homeAppliances: false,
    ac: false,
    computer: false,
  };

  // state to bring display into view when clicked (on MOBILE)
  const [showDetails, setShowDetails] = useState({
    ...productItemsData,
    support: false,
  });

  const backToInitial = () => {
    setShowDetails({
      ...productItemsData,
      support: false,
    });
  };

  const makeCurrentItem = (id) => {
    toggleNavItems();

    setShowDetails({
      tv: false,
      homeAppliances: false,
      ac: false,
      computer: false,
      support: false,
      [`${id}`]: true,
    });
    //  }
  };

  // 2. controlling the view using the same data as in productItemsData (LARGER SCREENS) - only this time, while hovering
  const [productItems, setProductItems] = useState(productItemsData);
  const closeProductItemsView = () => setProductItems(productItemsData);
  const ItemInView = (id) =>
    setProductItems({
      tv: false,
      homeAppliances: false,
      ac: false,
      computer: false,
      [`${id}`]: true,
    });

  return (
    <AppContext.Provider
      value={{
        showNavItems,
        bar,
        toggleNavItems,
        toggleBar,
        toggleSearch,
        closeSearchBox,
        isSearchInView,
        makeCurrentItem,
        showDetails,
        backToInitial,
        showItems,
        productsItemsInView,
        bothItemsHidden,
        productItems,
        closeProductItemsView,
        ItemInView,
        supportInView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to consume context data

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
