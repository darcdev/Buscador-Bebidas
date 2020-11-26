import React, { createContext, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idReceta, guardarIdReceta] = useState(null);

  let value = {
    guardarIdReceta,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
