import React from 'react';
import './SliderPortada.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'


function SliderPortada() {
	return (
		<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="/images/colegio1.jpg"
      alt="..."
	  height="600px"
    />
    <Carousel.Caption>
      <h3 className="titulo-slider">I.E. Josefa Carrillo y Albornoz</h3>
      <p className="subtitulo-slider">ESTUDIO - SUPERACIÓN - PATRIOTISMO</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="/images/aprendo2.jpg"
      alt="..."
	  height="600px"
    />
    <Carousel.Caption>
      <h3>I.E. Josefa Carrillo y Albornoz</h3>
      <p>ESTUDIO - SUPERACIÓN - PATRIOTISMO</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="/images/aprendo3.jpg"
      alt="..."
	  height="600px"
    />
    <Carousel.Caption>
      <h3>I.E. Josefa Carrillo y Albornoz</h3>
      <p>ESTUDIO - SUPERACIÓN - PATRIOTISMO</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
	); 

   
}

export default SliderPortada;