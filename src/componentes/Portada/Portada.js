import React from 'react';
import '../../App';
import { Button } from '../Button/Button';
import './Portada.css';

function Portada() {
    return (
        <div className='portada-container'>
           
           
            <h1>I.E. Josefa Carrillo y Albornoz</h1>
            <p>https://www.facebook.com/iejosefacarrilloyalbornoz</p>
            <div className='portada-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Bienvenidos <i className='far fa-play-circle' />
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    
                >
                    Galería de Fotos <i className='far fa-play-circle' />
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    
                >
                    Facebook <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Portada;