import React from "react";
import { useStateValue } from "../services/StateProvider";
import "./Estilos/Checkout.css";
import ProductoCheckout from "./ProductoCheckout";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__izquierda">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._ CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Tu canasta de compras está vacía.</h2>
            <p>
              No tienes items en tu canasta. Para poder comprar debes hacer
              click en el botón "Añadir a la canasta"
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__titulo">Tu canasta de compras </h2>
            {/* Lista de los productos en el checkout */}
            {basket.map((item) => (
              <ProductoCheckout
                id={item.id}
                titulo={item.titulo}
                imagen={item.imagen}
                precio={item.precio}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__derecha">
          
          <Subtotal/>
        </div>
      )}
    </div>
  );
};

export default Checkout;
