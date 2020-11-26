import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";
const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas } = useContext(RecetasContext);

  const obtenerDatosReceta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  const busquedaRecetas = (evt) => {
    evt.preventDefault();
    buscarRecetas(busqueda);
  };
  return (
    <form className="col-12" onSubmit={busquedaRecetas}>
      <fieldset className="text-center">
        <legend>Busca Bebidas por Categoría o Ingredientes</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceta}
          >
            <option value="">--Selecciona Categoría--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Recetas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
