import React from 'react';
import './Registro.css';
import "bootstrap/dist/css/bootstrap.min.css";






function Registro() {
    return (

        
            <div className="container">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#inicio">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#registro">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#listado">Link</a>
                    </li>
                   
                </ul>

                <div className="tab-content">
                                <div className="tab-pane active" id="inicio">
                                    <h3>Inicio</h3>
                                    <p>Lorem1111111111111111111</p>

                                </div>

                                <div className="tab-pane" id="registro">
                                    <h3>Registro de Alumnos</h3>
                                    <p>Lorem2222222222222222222</p>

                                </div>

                                <div className="tab-pane" id="listado">
                                    <h3>Listado de Alumnos</h3>
                                    <p>Lorem3333333333333333333</p>

                                </div>

                               
                </div>



            </div>

    );
}

export default Registro;