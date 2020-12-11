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
