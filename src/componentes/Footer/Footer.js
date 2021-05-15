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
      <div class='footer-links'>
        <div className='footer-link-wrapper'>



        <div class='footer-link-items'>
            <h2>Contacto:</h2>
            <Link to='/'>Teléfono: 366-0000</Link>
            <Link to='/'>Celular: 956310339</Link>
            <Link to='/'>Soporte Técnico: 922756605</Link>
            
        </div>

        <div class='footer-link-items'>
            <h2>Puedes visitar:</h2>
            <Link to='/'>Inicio</Link>
            <Link to='/acerca'>Acerca de la I.E</Link>
            <Link to='/actividades'>Actividades</Link>
        </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Enlaces de interés</h2>
            <Link to='/sisnotas'>Sit. Notas</Link>
            <Link to='/videoteca'>Videoteca</Link>
            <Link to='/biblioteca'>Biblioteca virtual</Link>
        </div>
        
        <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
        </div>
        
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              I.E. JC y A
              <i class="fas fa-chalkboard-teacher"/>
            </Link>
          </div>
          <small class='website-rights'>© 2021 - BillySoftperú .All Rights Reserved. © Copy Right

</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;