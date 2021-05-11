import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu=()=> setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 720) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);



  return (
    <>
      

          <nav className='navbar'>
                <div className='navbar-container'>

               
               

                    <div className='menu-icon' onClick={handleClick}>
                          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                          <li className='nav-item'>
                            <Link 
                            to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            Inicio
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/acerca'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Acerca de la I.E
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/actividades'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Actividades
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/comunicados'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Comunicados
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/matricula'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Matrícula
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/bliblioteca'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Biblioteca Virtual
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/videoteca'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Videoteca
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link
                              to='/mapa'
                              className='nav-links'
                              onClick={closeMobileMenu}
                            >
                              Mapa
                            </Link>
                          </li>

                          
                        

                          <li>
                            <Link
                              to='/sisnotas'
                              className='nav-links-mobile'
                              onClick={closeMobileMenu}
                            >
                              Sistema de Notas
                            </Link>
                          </li>
                        </ul>

                        {button && <Button buttonStyle='btn--outline'>Sistema de Notas</Button>}

                       


                </div>

          </nav>
    </>
  );


}

export default Navbar;