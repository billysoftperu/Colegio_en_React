import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

  const [click, setClick] = useState(false);
  

  
  const closeMobileMenu=()=> setClick(false);

  return (
    <>
      

          <nav className='header'>
                <div className='header-container'>

                    <img className="logo1" src='/images/insignea.png' />
                     <Link to='/' className='header-logo' onClick={closeMobileMenu}>
                     
                           I.E. JC y A
                           
                           
                           <i class="fas fa-chalkboard-teacher"/>
                     </Link>
                     
                     <img className="logo2" src='/images/josefa.png' />

                

                </div>

          </nav>
    </>
  );


}

export default Header;