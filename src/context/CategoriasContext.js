import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// Crear el context

export const CategoriasContext = createContext();

// Provider -> se encuentra funciones y state

const CategoriasProvider = ({ children }) => {
  //crear state context
  const [categorias, guardarCategorias] = useState([]);

  // ejecutar llamado a api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categorias = await axios.get(url);
      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  let value = {
    categorias,
  };
  return (
    <CategoriasContext.Provider value={value}>
      {children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
