import React from 'react';
import '../../App';
import { Button } from '../Button/Button';
import './Portada.css';

function Portada() {
    return (
        <div className='hero-container'>
           
           
            <h1>I.E. Josefa Carrillo y Albornoz</h1>
            <p>https://www.facebook.com/iejosefacarrilloyalbornoz</p>
            <div className='hero-btns'>
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
                    onClick={console.log('hey')}
                >
                    Galería de Fotos <i className='far fa-play-circle' />
                </Button>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    Facebook <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default Portada;