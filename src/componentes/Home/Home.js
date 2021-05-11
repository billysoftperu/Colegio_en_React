import React from 'react';
import '../../App.css';
import Portada from '../Portada/Portada';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

import Matricula from '../Matricula/Matricula';


function Home() {
  return (
    <>
      <Portada />
      <Cards />
      <Matricula />
      <Footer />
      
    </>
  );
}

export default Home;