import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login=()=>{

    
    return(


      
        <div className="container w-75 bg-primary mt-5 rounded shadow">

            

            <div className="row align-items-strech">
            
            
                <div className="col bg-img d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">

                </div>

                <div className="col bg-warning p-5 rounded-end">
                    <div className="text-center">
                        <img className="logo" src="images/insignea.png" width="100" alt=""/>

                    </div>

                    <h2 className="fw-bold text-center py-5">Ingrese al Sistema</h2>

                    <form action="#">
                        <div className="mb-4">
                            <label for="usuario" className="form-label">Usuario</label>
                            <input type="usuario" className="form-control" name="usuario" placeholder="Usuario"/>
                        </div>

                        <div className="mb-4">
                            <label for="password" className="form-label">Password</label>
                            <input type="pasword" className="form-control" name="password" placeholder="Password"/>
                        </div>
                            
                        <div className="mb-4" form-check>
                            
                            <input type="checkbox" className="form-check-imput" name="connected"/>
                            <label for="connected" className="form-check-label">Mantenerme conectado</label>
                        </div>

                        <div className="d-grid">
                             <button type="submit" className="btn btn-primary">Iniciar Sesión</button>

                        </div>

                        <div className="my-3">
                            <span><a href="/">Recuperar Password</a></span>

                        </div>

                    
                    </form>


                </div>

               

            </div>
            
            
        </div>
    )
}

export default Login