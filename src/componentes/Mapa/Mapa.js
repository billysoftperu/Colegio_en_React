import React from 'react';
import './Mapa.css';





function Mapa() {
    return (

<div className='mapa-fondo'>
    <h1 className='mapa-titulo'>Mapa de ubicación de la I.E. Josefa Carrillo y Albornoz</h1>
    <p className='mapa-subtitulo'> Dirección: Av. Prolongación Bolivia S/N San Fernando Alto</p>
    <div className='mapa-contenedor'>
    
        <div className="mapa-imagen">
            <img className="mensaje" src="/images/gps1.svg" alt="gps" />
        </div>

        <div className="mapa-google">
            <iframe title="mapag" className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.127709982243!2d-76.68533999247305!3d-11.929015240415515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105e578c9d6388d%3A0xf8e86155162e708e!2sColegio%20Josefa%20Carrillo%2C%20Lurigancho-Chosica%2015472!5e0!3m2!1ses!2spe!4v1618938911067!5m2!1ses!2spe"  allowFullScreen="" loading="lazy">Mapa</iframe>
        </div>


    </div>



</div>
        





    );
}

export default Mapa;