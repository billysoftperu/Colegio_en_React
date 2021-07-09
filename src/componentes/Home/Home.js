import React from 'react';
import '../../App.css';
import Portada from '../Portada/Portada';
import Cards from '../Cards/Cards';
import SliderPortada from '../SliderPortada/SliderPortada';








function Home() {

  const images = [
		{
			id: '1',
			title: 'Aprendo en Casa',
			image:
				'/images/aprendo1.jpg',
		},
		{
			id: '2',
			title: 'Docentes Capacitados',
			image:
				'/images/aprendo2.jpg',
		},
		{
			id: '3',
			title: 'Uso de las TICs',
			image:
				'/images/aprendo3.jpg',
		},
		{
			id: '4',
			title: 'Personal Docente',
			image:
				'/images/aprendo3.jpg',
		},
		{
			id: '5',
			title: 'I.E. Josefa Carrillo y Albornoz',
			image:
				'/images/aprendo1.jpg',
		},
	]

  return (
    <div className="container-home">

      <Portada />
      <SliderPortada images={images}/>
      <Cards />

    </div>
     

      
      

     
      
    
  );
}

export default Home;