import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, guardarIdReceta] = useState(null);
  const [infoReceta, guardarReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idReceta) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await axios.get(url);
      guardarReceta(resultado.data.drinks[0]);
    };
    obtenerReceta();
  }, [idReceta]);

  let value = {
    infoReceta,
    guardarIdReceta,
    guardarReceta,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
