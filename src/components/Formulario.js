import React from "react";

const Formulario = () => {
  return (
    <form className="col-12">
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
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" className="form-control">
            <option value="">--Selecciona Categoría--</option>
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
