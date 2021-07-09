import React from 'react';
import '../../App';
import { Button } from '../Button/Button';
import './Portada.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Portada() {
    return (
        <div className='portada-container'>
            <div className='container-fluid'>

                <h1>I.E. Josefa Carrillo y Albornoz</h1>
                <h3>ESTUDIO - SUPERACIÓN - PATRIOTISMO</h3>
                <p>Prolongación Bolivia S/N - San Fernando Alto - Lurigancho  - Chosica</p>
                <div className='portada-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Bienvenidos <i className='far fa-play-circle' />
                    </Button>

                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        
                    >
                        Galería de Fotos <i className='far fa-play-circle' />
                    </Button>

                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        
                    >
                        Facebook <i className='far fa-play-circle' />
                    </Button>
                </div>
            </div>
           
           
            
        </div>
    );
}

export default Portada;