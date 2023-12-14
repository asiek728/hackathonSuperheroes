import React, { useState, useContext, createContext } from "react"

const HeroesContext = createContext()

export const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([])

  return (
    <HeroesContext.Provider value={{ heroes, setHeroes }}>
      {children}
    </HeroesContext.Provider>
  );
};

export const useHeroes = () => useContext(HeroesContext)
