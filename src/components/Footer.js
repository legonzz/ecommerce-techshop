import React from "react";
import "./Estilos/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <Link to="/">
        <div className="tech-shop">
          <h2>TECH-SHOP</h2>
          <p>
            &copy; TECH-SHOP <small> Todos los Derechos Reservados 2020</small>
          </p>
        </div>
      </Link>
      <div className="redes">
        <a href="https://www.youtube.com/">
          <div className="youtube">
            <i class="fab fa-3x fa-youtube"></i>
          </div>
        </a>
        <a href="https://www.facebook.com/">
          <div className="facebook">
            <i class="fab fa-3x fa-facebook-square"></i>
          </div>
        </a>
        <a href="https://twitter.com/">
          <div className="twitter">
            <i class="fab fa-3x fa-twitter-square"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/"></a>
        <div className="instagram">
          <i class="fab fa-3x fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
