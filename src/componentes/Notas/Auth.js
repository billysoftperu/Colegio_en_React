import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


//import './Registrar';







const Auth=()=>{
      
    return(

        <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="">Ingresar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" data-toggle="modal" data-target="#signupModal">Registrarse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Cerrar Sesión</a>
                        </li>
                        
                        </ul>
                    </div>
                </nav>


                


                <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="signup-form">
                            <div className="form-group">
                                <input type="text" id="signup-email" className="form-control" placeholder="Email" required/>
                            </div>

                            <div className="form-group">
                                <input type="passeord" id="signup-password" className="form-control" placeholder="Password" required/>
                            </div>

                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                    </div>
                </div>
                </div>

                


        </div>

        


      
        
            
            
        
    )
}

export default Auth;

