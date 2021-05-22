import React from 'react';
import './Bienvenidos.css';


function Bienvenidos() {
    return (

<div className='container-fondo'>
    <h1 className='container-titulo'>Bienvenidos </h1>

    <div className='container-bienvenidos'>

   

            <img className="container-director" src='/images/director.jpg' alt="director"/>
            <div className="container-text1">
                <h4 className="subtitulo">Lic. Edwin Lucio Lázaro Espinoza</h4>
                <p className="texto1">Director de la Institución Educativa Josefa Carrillo y Albornoz.</p>
            </div>

            <div className="parrafo">
                <p className="texto-parrafo">En nombre de todos los que conformamos la comunidad educativa del colegio Josefa Carrillo y Albornoz BIENVENIDOS
                 a un nuevo año escolar 2021. Con el lema “Trabajo y Estudio” iniciamos las clases virtuales de nuestros niños, niñas y jóvenes por medio de la educación para hacer realidad el sueño como Josefinos, formar buenos estudiantes y virtuosos ciudadanos, mediante la formación integral de calidad en un ambiente virtual. </p>
            </div>







    </div>
      


</div>

    );
}

export default Bienvenidos;