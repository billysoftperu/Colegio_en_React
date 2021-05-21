import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
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
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Escribe'
            />
            <Button buttonStyle='btn--outline'>Buscar</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>



        <div className='footer-link-items'>
            <h2>Contacto:</h2>
            <Link to='/'>Teléfono: 366-0000</Link>
            <Link to='/'>Celular: 956310339</Link>
            <Link to='/'>Soporte Técnico: 922756605</Link>
            
        </div>

        <div className='footer-link-items'>
            <h2>Puedes visitar:</h2>
            <Link to='/'>Inicio</Link>
            <Link to='/acerca'>Acerca de la I.E</Link>
            <Link to='/actividades'>Actividades</Link>
        </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Enlaces de interés</h2>
            <Link to='/sisnotas'>Sit. Notas</Link>
            <Link to='/videoteca'>Videoteca</Link>
            <Link to='/biblioteca'>Biblioteca virtual</Link>
        </div>
        
        <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
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