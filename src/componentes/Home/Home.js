import React from 'react';
import '../../App.css';
//import Portada from '../Portada/Portada';
import Cards from '../Cards/Cards';
import SliderPortada from '../SliderPortada/SliderPortada';
import "bootstrap/dist/css/bootstrap.min.css";








function Home() {

  

  return (
    <div className="container-home">

	  <SliderPortada />
	  
    <Cards />

    </div>
     

      
      

     
      
    
  );
}

export default Home;