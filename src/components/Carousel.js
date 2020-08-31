import React, { useState } from "react";
import "./Estilos/CarruselStyle.css";
import Imagenes from "../services/Imagenes";
import i1 from "./pics/pc-gamer-transparent-png-clipart-free-download-ywd-pc-gamer-png-1000_600.png";
import i2 from "./pics/iPhone-11-PNG-Transparent-HD-Photo.png";
import i3 from "./pics/scarlet-red.png";
import i4 from "./pics/pe-uhdtv-nu8000-un75nu8000gxpe-frontblack-113917484.webp";
import i5 from "./pics/fg.png";
import { Link } from "react-router-dom";

const Slider = () => {
  let sliderArray = [
    <Imagenes src={i1} />,
    <Imagenes src={i2} />,
    <Imagenes src={i3} />,
    <Imagenes src={i4} />,
    <Imagenes src={i5} />,
  ];
  const [x, setX] = useState(0);
  const siguiente = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };
  const anterior = () => {
    x === 0 * (sliderArray.length - 1) ? setX(0) : setX(x + 100);
  };
  return (
    <div className="container">
      <span className="fondo"></span>
      <h1 className="container__texto">Lo mejor en tecnología</h1>
      <h3 className="container__disclaimer">con los mejores precios</h3>
      <Link to="/ofertas" style={{ textDecoration: "none" }}>
        <button className="container__btn-verMas">VER MÁS</button>
      </Link>
      {sliderArray.map((item, index) => {
        return (
          <div
            className="container__slider"
            style={{ transform: `translateX(${x}%)` }}
          >
            <div key={index} className="slide">
              {item}
            </div>
          </div>
        );
      })}
      <button className="container__izquierda" onClick={anterior}>
        <i className="fas fa-3x fa-chevron-circle-left"></i>
      </button>
      <button className="container__derecha" onClick={siguiente}>
        <i className="fas fa-3x fa-chevron-circle-right"></i>
      </button>
    </div>
  );
};

export default Slider;
