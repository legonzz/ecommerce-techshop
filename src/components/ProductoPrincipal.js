import React from "react";
import "./Estilos/ProductoPrincipal.css";
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
    <div className="producto-principal__container">
      <div className="producto-principal__card">
        <div className="producto__informacion">
          <p className="producto__titulo-principal">{titulo}</p>
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
        <div onClick={aniadirProducto} class="buttons-principal">
          <div class="boton-principal__comprar">
            <a class="boton effect04" data-sm-link-text="CLICK" target="_blank">
              <span>PRE-ORDER!</span>
            </a>
          </div>
        </div>
        <img src={imagen} className="producto-principal__img" alt="" />
        {/* <BotonComprar onClick={añadirProducto} /> */}
        {/* <button onClick={aniadirProducto} className="producto__btn" >Añadir a la canasta</button> */}
      </div>
    </div>
  );
};

export default Producto;
