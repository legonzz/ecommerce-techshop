import React from "react";
import "./Estilos/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../services/StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div class="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class=" container__logo">
            <h2 className=" link__logo">TECH-SHOP</h2>
          </div>
        </Link>
        <Link
          to={!user && "/login"}
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div class="link" onClick={login}>
            <span className="header__optionLinkUno link__enlace">
              Hola, {user?.email}
            </span>
            <span className="header__optionLinkDos link__enlace">
              {user ? "Salir" : "Inicia sesión"}
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div className="link">
            <span className="header__optionLinkUno link__enlace">Compras</span>
            <span className="header__optionLinkDos link__enlace">
              & devoluciones
            </span>
          </div>
        </Link>
        <Link
          to="/ofertas"
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div className="link">
            <span className="header__optionLinkUno link__enlace">Ofertas</span>
            <span className="header__optionLinkDos link__enlace">
              & descuentos
            </span>
          </div>
        </Link>
        <Link
          to="/checkout"
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div class="link">
            <div className="header__carrito link__enlace">
              <ShoppingCartIcon className="link__basket"/>
              <span className="header__optionLinkDos header__contador link__enlace contador">
                {basket?.length}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;

{
  /* <nav className="header">
      <Link  to="/" style={{ textDecoration: "none" }}>
        <h2 className="header__nombre">TECH-SHOP</h2>
      </Link>

      <div className="header__search">
        <input type="text" className="header__buscador" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link 
          to={!user && "/login"}
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div onClick={login} className="header__option">
            <span className="header__optionLinkUno">Hola, {user?.email}</span>
            <span className="header__optionLinkDos">{user ? 'Salir' : 'Iniciar sesión'}</span>
          </div>
        </Link>
      </div>
      <div className="header__nav">
        <Link
          to="/"
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div className="header__option">
            <span className="header__optionLinkUno">Compras</span>
            <span className="header__optionLinkDos">& devoluciones</span>
          </div>
        </Link>
      </div>
      <div className="header__nav">
        <Link
          to="/ofertas"
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div className="header__option">
            <span className="header__optionLinkUno">Ofertas</span>
            <span className="header__optionLinkDos">& descuentos</span>
          </div>
        </Link>
      </div>
      <div className="header__nav header__compras">
        <Link
          to="/checkout"
          className="header__link"
          style={{ textDecoration: "none" }}
        >
          <div className="header__carrito">
            <ShoppingCartIcon />
            <span className="header__optionLinkDos header__contador">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav> */
}
