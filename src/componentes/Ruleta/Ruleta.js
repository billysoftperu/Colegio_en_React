import React from 'react';
import './Ruleta.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import './Script.js'




//const imgRuleta = document.querySelector('#imgruleta');



  

function Ruleta() {
    return (

        
        <div className='ruleta-fondo'>


            <h1 className='ruleta-titulo'>Ruleta</h1>
            <p>https://www.youtube.com/watch?v=Hz0cwwqZlbw&ab_channel=AxelfoxII</p>
            <p>https://www.youtube.com/watch?v=H8ymJ9HH204&ab_channel=Puntoycoma-Tutoriales</p>

            <div className='ruleta-container'>

                <div className="ruleta-imagen">
                    <img className="mensaje" src="/images/web-en-construccion.jpg" alt="web" />

                    <div id="premio">

                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <p className="elije">ELIJE TU CORTESIA:</p>
                                    </td>
                                    <td><img className="imgSorpresa" src="/images/cortesia.png" alt="cortesia"/></td>

                                </tr>

                                <tr>
                                    <td>
                                        <p className="contador">TURNOS: 0</p>
                                    </td>
                                </tr>

                            </tbody>
                            
                            
                        </table>

                    </div>

                    <div className="vara"></div>
                    <div>
                        <img className="ruleta-imagen" src="/images/imagen.png" id="imgruleta" alt="vara"/>
                    </div>
                    <div>
                        <div id="sonido">
                        <audio src="/sonido/ruleta.mp3" id="audio" title="sonido"/>

                        </div>
                    </div>


                            
                </div>


            </div>
            










        </div>

            
            




    );
}

export default Ruleta;