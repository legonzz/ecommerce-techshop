import React from 'react'

const Imagenes = ({src}) => {
    let imgStyles = {
        width : 50+"%",
        height: 80+"%",
    }
    return (
        <img src={src} className="slide__img" alt="slide-img" style={imgStyles}></img>
    )
}

export default Imagenes
