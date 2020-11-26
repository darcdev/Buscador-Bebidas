import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import CategoriasProvider from "./context/CategoriasContext";
import ListaRecetas from "./components/ListaRecetas";
import RecetasProvider from "./context/RecetasContext";

const App = () => {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
};

export default App;
