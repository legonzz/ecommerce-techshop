import React from "react";
import "./Estilos/BotonComprar.css";
import { useStateValue } from "../services/StateProvider";
const BotonComprar = (id, titulo, precio, rating, imagen) => {
  const [{}, dispatch] = useStateValue();

  const aniadirProducto = () => {
    // Añadir un item a la canasta
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        titulo: titulo,
        imagen: imagen,
        precio: precio,
        rating: rating,
      },
    });
  };
  return (
    <>
      <div onClick={aniadirProducto} class="buttons">
        <div class="boton__comprar">
          <a class="boton effect04" data-sm-link-text="CLICK" target="_blank">
            <span>COMPRAR</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default BotonComprar;
