import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, guardarIdReceta] = useState(null);
  const [receta, guardarReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await axios.get(url);
      guardarReceta(resultado);
    };
    obtenerReceta();
  }, [idReceta]);

  let value = {
    receta,
    guardarIdReceta,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
