import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showNavItems, setShowNavItems] = useState(true);
  const toggleNavItems = () => setShowNavItems(!showNavItems);

  // state for hamburger
  const [bar, setBar] = useState(false);
  const toggleBar = () => setBar(!bar);

  // state for search input
  const [isSearchInView, setIsSearchInView] = useState(false);
  const toggleSearch = () => setIsSearchInView(!isSearchInView);
  const closeSearchBox = () => setIsSearchInView(false);

  // state for displaying more details based on listItem (ON MOBILE and SMALL SCREENS)

  const [showDetails, setShowDetails] = useState({
    tv: false,
    homeAppliances: false,
    ac: false,
    computer: false,
    support: false,
  });

  const backToInitial = () => {
    setShowDetails({
      tv: false,
      homeAppliances: false,
      ac: false,
      computer: false,
      support: false,
    });
  };

  const itemClicked = (id) => {
    toggleNavItems();
    // if (e.target.id === id) {
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
        itemClicked,
        showDetails,
        backToInitial,
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
