import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            I.E.Josefa Carrillo y Albornoz <i className="fab fa-typo3" />
          </Link>

          <img id="logo1" src="./asset/images/josefa.png" alt="logo" />

          <ul class="nav-menu">

            <li>
              <a href="./acerca.html">Acerca de la I.E <i class="fas fa-chevron-circle-right"></i
              ></a>
            </li>
            <li>
              <a href="./estudiantes.html">Estudiantes <i class="fas fa-chevron-circle-right"></i
              ></a>
            </li>
            <li>
              <a href="./docentes.html">Docentes <i class="fas fa-chevron-circle-right"></i
              ></a>
            </li>
            <li>
              <a href="./admision.html">Admisión <i class="fas fa-chevron-circle-right"></i
              ></a>
            </li>
            <li>
              <a href="./sistema.html">Sistema de Notas <i class="fas fa-chevron-circle-right"></i
              ></a>
            </li>
          </ul>

          <p id="nombre-ie">I.E. Josefa Carrillo y Albornoz</p>
          <img id="logo2" src="./asset/images/josefa.png" alt="nombreie" />


          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>


        </div>

      </nav>
    </>
  );


}

export default Navbar;