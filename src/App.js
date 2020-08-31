import React, { useEffect } from "react";
import "./components/Estilos/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./services/StateProvider";
import { auth } from "./components/firebase";
import Footer from "./components/Footer";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //El usuario inicia sesión
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //El usuario no inicia sesión
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsuscribe();
    };
  }, []);
  console.log("usuario:", user);

  return (
    /* Se usa react-router porque no recarga la página(no hace refresh), con esto evitamos tiempos de recarga */
    /* Switch permite cambiar entre páginas */
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/ofertas">
            <Header exact />
            <h1>Ofertas y Descuentos</h1>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};

export default App;
