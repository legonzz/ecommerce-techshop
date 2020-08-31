import React from "react";
import "./Estilos/Producto.css";
import { useStateValue } from "../services/StateProvider";

const Producto = ({ id, titulo, precio, rating, imagen }) => {
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
    <div className="container__producto">
      <div className="producto">
        <div className="producto__info">
          <p className="producto__titulo">{titulo}</p>
          <p className="producto__precio">
            <small>S/.</small>
            <strong>{precio}</strong>
          </p>
          <div className="producto__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>
                  <i className="fas fa-star producto__estrella"></i>
                </p>
              ))}
          </div>
        </div>
        <img src={imagen} className="producto__img" alt="" />
        {/* <BotonComprar onClick={añadirProducto} /> */}
        <div onClick={aniadirProducto} class="buttons">
          <div class="boton__comprar">
            <a class="boton effect04" data-sm-link-text="CLICK" target="_blank">
              <span>COMPRAR</span>
            </a>
          </div>
        </div>
        {/* <button onClick={aniadirProducto} className="producto__btn" >Añadir a la canasta</button> */}
      </div>
    </div>
  );
};

export default Producto;
