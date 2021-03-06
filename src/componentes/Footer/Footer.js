import React from 'react';
import './Footer.css';
//import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        https://www.facebook.com/iejosefacarrilloyalbornoz
        </p>
        <p className='footer-subscription-text'>
        E-mail: ie.josefacarrilloyalbornoz@gmail.com
        </p>
        
      </section>
      <div className='footer-links'>

            <div className='footer-link-wrapper'>

                        <div className='footer-link-items'>
                            <h2 className="encabezado-footer">Contacto:</h2>
                            <p>Teléfono: 366-0000</p>
                            <p>Celular: 956310339</p>
                            <p>Soporte Técnico: 922756605</p>
                            
                        </div>

                        <div className='footer-link-items'>
                            <h2 className="encabezado-footer">Puedes visitar:</h2>
                            <Link to='/'>Inicio</Link>
                            <Link to='/acerca'>Acerca de la I.E</Link>
                            <Link to='/actividades'>Actividades</Link>
                        </div>
              
            </div>

            <div className='footer-link-wrapper'>

                        <div className='footer-link-items'>
                          <h2 className="encabezado-footer">Enlaces de interés</h2>
                          <Link to='/sisnotas'>Sit. Notas</Link>
                          <Link to='/videoteca'>Videoteca</Link>
                          <Link to='/biblioteca'>Biblioteca Virtual</Link>
                        </div>
                  
                        <div className='footer-link-items'>
                            <h2 className="encabezado-footer">Redes Sociales</h2>
                            
                            <a href='https://www.facebook.com/iejosefacarrilloyalbornoz'>Facebook</a>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Instagram</Link>
                        </div>
        
            </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              I.E. JC y A
              <i className="fas fa-chalkboard-teacher"/>
            </Link>
          </div>
          <small className='website-rights'>© 2021 - BillySoftperú .All Rights Reserved. © Copy Right

</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;