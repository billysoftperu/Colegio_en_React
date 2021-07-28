import React from 'react';
import './RegistroEst.css';
import "bootstrap/dist/css/bootstrap.min.css";





const RegistroEstudiante=()=>{

        return(
            <form className="card card-body">
                <div className="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="http://iejosefacarrilloyalbornoz.com" 
                    name="url"/>

                </div>
                 

            </form>
            
        
        
        );
}



export default RegistroEstudiante;