import React from 'react';
import './Cards.css';
import CardItem from './CardsItem';
import "bootstrap/dist/css/bootstrap.min.css";

function Cards() {
  return (
    <div className='cards'>
      <h1>Bienvenidos Docentes y Estudiantes a nuestro Portal Web!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/aprendo1.jpg'
              text='Recursos de Aprendo en Casa'
              label='Aprendo'
              path='/estudiantes'
            />
            <CardItem
              src='images/aprendo2.jpg'
              text='Programación de clases virtuales'
              label='Clases Virtuales'
              path='/estudiantes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Clases-virtuales.jpg'
              text='Apoyo educativo'
              label='Estudiantes'
              path='/estudiantes'
            />
            <CardItem
              src='images/padres_de_familia.jpg'
              text='Padres comprometidos en la educación de sus hijos'
              label='Padres de Familia'
              path='/estudiantes'
            />
            <CardItem
              src='images/mision.webp'
              text='Coordinación Pedagógica'
              label='Directivos'
              path='/estudiantes'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;