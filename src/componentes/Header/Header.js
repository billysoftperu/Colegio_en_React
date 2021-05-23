import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Header.css';


function Header() {

  const [click,setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu=()=> setClick(false);

  return (
    <div>
      

          <nav className='header'>
                <div className='header-container'>

                    <img className="logo1" src='/images/insignea.png' alt="logo1" onClick={handleClick}/>
                     <Link to='/' className='header-logo' onClick={closeMobileMenu}>
                     
                           I.E. JC y A
                           
                           
                           <i className="fas fa-chalkboard-teacher"/>
                     </Link>
                     
                     <img className="logo2" src='/images/josefa.png' alt="logo2" onClick={handleClick}/>

                

                </div>

          </nav>
    </div>
  );


}

export default Header;