import React from "react";
import { useStateValue } from "../services/StateProvider";
import "./Estilos/ProductoCheckout.css";

function ProductoCheckout({ id, titulo, imagen, precio, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removerProducto = () => {
    //quitar items de la canasta
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imagen} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{titulo}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{precio}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <i className="fas fa-star producto__estrella"></i>
              </p>
            ))}
        </div>
        <button onClick={removerProducto}>Remove from basket</button>
      </div>
    </div>
  );
}

export default ProductoCheckout;
