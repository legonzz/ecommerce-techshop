import React, { useState } from "react";
import "./Estilos/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //inicio de sesión exitoso, se redirige a la homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const registrarse = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //crear usuario y logearse, para redireccionar a la homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 className="login__nombre">TECH-SHOP</h2>
      </Link>

      <div className="login__container">
        <h1>Iniciar Sesión</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Iniciar Sesión
          </button>
        </form>
        <p>
          By signing-in you agree to TECH-SHOP's conditions of Use & Sale. Please
          se our Privicy Notice, our Cookies Notice and our Interested-Based-Ads
          Notice
        </p>
        <button
          onClick={registrarse}
          type="submit"
          className="login__registerButtom"
        >
          Crear una cuenta
        </button>
      </div>
    </div>
  );
};

export default Login;
