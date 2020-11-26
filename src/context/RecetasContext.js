import React, { useState, createContext } from "react";

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
  const [recetas, guardarRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });

  let value = {
    buscarRecetas,
  };
  return (
    <RecetasContext.Provider value={value}>{children}</RecetasContext.Provider>
  );
};
export default RecetasProvider;
