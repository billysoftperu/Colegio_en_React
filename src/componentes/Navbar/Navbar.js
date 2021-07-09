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
    if (window.innerWidth <= 960) {
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
    <div>
      

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

                          <li className='submenu'>
                           
                                Acerca de la I.E
                                <div className='sub-menu-1'>
                                  <ul>
                                      <li className='sub-item'><Link to='/bienvenidos' className='sub-links' onClick={closeMobileMenu}>Bienvenidos</Link></li>
                                      <li className='sub-item'><Link to='/resenia' className='sub-links' onClick={closeMobileMenu}>Reseña Histórica</Link></li>
                                      <li className='sub-item'><Link to='/mision' className='sub-links' onClick={closeMobileMenu}>Misión y Visión</Link></li> 
                                      <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Comunidad Educativa</Link></li>
                                      <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Reglamento Interno</Link></li>  
                                  </ul>                     
                                </div>
                                                      
                          </li>

                          <li className='submenu'>
                           
                                Actividades
                                <div className='sub-menu-1'>
                                  <ul>
                                      <li className='sub-item'><Link to='/academicas' className='sub-links' onClick={closeMobileMenu}>Académicas</Link></li>
                                      <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Culturales</Link></li> 
                                      <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Artísticas</Link></li>
                                      <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Formativas</Link></li>
                                      <li className='sub-item'><Link to='/Ruleta' className='sub-links' onClick={closeMobileMenu}>Juegos</Link></li>  
                                  </ul>                     
                                </div>
                                                      
                          </li>


                          <li className='submenu'>
                           
                           Comunicados
                           <div className='sub-menu-1'>
                             <ul>
                                 <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>2019</Link></li>
                                 <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>2020</Link></li> 
                                 <li className='sub-item'><Link to='/comunicados' className='sub-links' onClick={closeMobileMenu}>2021</Link></li>
                               
                             </ul>                     
                           </div>
                                                 
                          </li>

                          <li className='submenu'>
                           
                           Matrícula
                           <div className='sub-menu-1'>
                             <ul>
                                 <li className='sub-item'><Link to='/matricula' className='sub-links' onClick={closeMobileMenu}>Proceso de matrícula</Link></li>
                                 <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Certificados</Link></li> 
                                 <li className='sub-item'><Link to='/' className='sub-links' onClick={closeMobileMenu}>Consultas</Link></li>
                               
                             </ul>                     
                           </div>
                                                 
                          </li>

                                           

                          

                          <li className='nav-item'>
                            <Link
                              to='/biblioteca'
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
    </div>
  );


}

export default Navbar;