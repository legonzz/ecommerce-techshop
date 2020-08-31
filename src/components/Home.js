import React from "react";
import Carousel from "./Carousel";
import Producto from "./Producto";
import ProductoPrincipal from "./ProductoPrincipal"
import Imagenes from "../services/Imagenes";


const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <div className="home__row">
        {/* Producto_props: id, titutlo, precio , rating, imagen*/}
        <Producto
          id={125}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2789.99}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
        {/* Producto */}
        <Producto
          id={126}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2789.99}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
        <Producto
          id={127}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2789.99}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
      </div>
      
      <div className="home__row">
        <ProductoPrincipal 
         id={127}
         titulo="Transportate a un mundo nuevo con PlayStation"
         precio={2789.99}
         rating={5}
         imagen="https://media.playstation.com/is/image/SCEA/playstation-vr-astro-bot-rescue-mission-and-moss-bundle-product-shot-01-ps4-latam-08nov18?$native_md_t$"
        />
       {/*  <Producto
          id={128}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2789.99}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
        <Producto
          id={129}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2700.0}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
        <Producto
          id={129}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2700.0}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        /> */}
      </div>
      <div className="home__row">
        <Producto
          id={129}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2700.0}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
        <Producto
          id={129}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2700.0}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
        <Producto
          id={129}
          titulo="Apple Iphone X  - Smarthphone de 7 pulgadas 32gb - en Negro"
          precio={2700.0}
          rating={5}
          imagen="https://www.freeiconspng.com/uploads/3d-apple-iphone-x-image-7.png"
        />
      </div>
      
    </div>
  );
};

export default Home;
