import React from 'react';
import './Biblioteca.css';

import Sorteo from '../Ruleta/Sorteo';




function Biblioteca() {
    return (

<div className='biblioteca-fondo'>
    <h1 className='comunicados-titulo'>Biblioteca Virtual</h1>

    <div className='biblioteca-container'>

    <Sorteo />


    </div>



</div>
        





    );
}

export default Biblioteca;