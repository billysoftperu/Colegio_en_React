import React from 'react';
import '../../App.css';
import Portada from '../Portada/Portada';
import Cards from '../Cards/Cards';



import Acerca from '../Acerca/Acerca';
import Matricula from '../Matricula/Matricula';



function Home() {
  return (
    <>
      <Portada />
      <Cards />

      <Acerca />
      <Matricula />

     
      
    </>
  );
}

export default Home;