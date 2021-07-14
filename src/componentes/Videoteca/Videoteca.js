
import './Videoteca.css';

import React from 'react';
import TabNav from '../Notas/TabNav';
import Tab from '../Notas/Tabs';

class Videoteca extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      selected: 'Inicio'
    }
  }  
  
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }  
  
  render() {
    return (

        <div className='videoteca-fondo'>
          <div className="Videoteca mt-4">
              <TabNav tabs={['Inicio', 'Registro de Alumnos', 'Listado de Alumnos','Registro de Notas','Consultas de Notas']} selected={ this.state.selected } setSelected={ this.setSelected }>


                <Tab isSelected={ this.state.selected === 'Inicio' }>
                      <div className="tab-inicio">
                        <div className="container-inicio">
                            <h1 className="sistema-titulo">SISTEMA DE NOTAS BIMESTRALES 2021</h1>
                        </div>
                          
                      </div>
                  
                </Tab>
                <Tab isSelected={ this.state.selected === 'Registro de Alumnos' }>
                      <div className="tab-registro">
                      <br/>
                          <h3>REGISTRO DE ALUMNOS AL SISTEMA DE NOTAS BIMESTRALES 2021</h3>
                          <br/>
                          <form>
                                <div class="form-group">
                                  <label for="exampleFormControlInput1">Apellidos:</label>
                                  <input type="firtname" class="form-control" id="exampleFormControlInput1" placeholder="Apellidos"/>

                                  <label for="exampleFormControlInput1">Nombres:</label>
                                  <input type="lastname" class="form-control" id="exampleFormControlInput1" placeholder="Nombres"/>

                                  <label for="exampleFormControlInput1">Correo:</label>
                                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>

                                  <label for="exampleFormControlInput1">DNI:</label>
                                  <input type="dni" class="form-control" id="exampleFormControlInput1" placeholder="DNI"/>
                                </div>

                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">Selecciona el Grado:</label>
                                  <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Primer Grado Primaria</option>
                                    <option>Sedundo Grado Primaria</option>
                                    <option>Tercero Grado Primaria</option>
                                    <option>Cuarto Grado Primaria</option>
                                    <option>Quinto Grado Primaria</option>
                                    <option>Sexto Grado Primaria</option>
                                    <option>1ro. Secundaria</option>
                                    <option>2do. Secundaria</option>
                                    <option>3ro. Secundaria</option>
                                    <option>4to. Secundaria</option>
                                    <option>5to. Secundaria</option>
                                  </select>
                                </div>

                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">Selecciona la Sección:</label>
                                  <select class="form-control" id="exampleFormControlSelect1">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    
                                  </select>
                                </div>

                                <div className="form-group">
                                      <label for="exampleFormControlInput1">Sexo:</label><br/>
                                      <div className="custom-control custom-radio custom-control-inline">
                                      
                                          <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input"/>
                                          <label className="custom-control-label" for="customRadioInline1">Femenino</label>
                                    
                                      </div>
                                      <div class="custom-control custom-radio custom-control-inline">
                                      
                                          <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input"/>
                                          <label className="custom-control-label" for="customRadioInline2">Masculino</label>
                                        
                                      </div>
                                
                                </div>

                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">N° de Orden:</label>
                                  <select class="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                        <option>32</option>
                                        <option>33</option>
                                        <option>34</option>
                                        <option>35</option>
                                    
                                  </select>
                                </div>
                                

                                <div class="form-group">
                                  <label for="exampleFormControlTextarea1">Observaciones:</label>
                                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Enviar Registro</button>
                            </form>

                                </div>
                
              </Tab>
              <Tab isSelected={ this.state.selected === 'Listado de Alumnos' }>
                    <div className="tab-lista">
                        <br/>
                        <h3>LISTA DE ALUMNOS REGISTRADOS EN EL SISTEMA DE NOTAS BIMESTRALES 2021</h3>
                        <br/>
                        <table class="table">
                                <thead className="thead-dark">
                                  <tr>
                                    <th scope="col">N° Orden</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Grado</th>
                                    <th scope="col">Sección</th>
                                    <th scope="col">Sexo</th>
                                    <th scope="col">DNI</th>
                                    <th scope="col">Correo</th>
                                    
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Méndez</td>
                                    <td>Luis</td>
                                    <td>Primer Grado Primaria</td>
                                    <td>A</td>
                                    <td>Maculino</td>
                                    <td>1234567</td>
                                    <td>123@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Méndez</td>
                                    <td>Luis</td>
                                    <td>Primer Grado Primaria</td>
                                    <td>B</td>
                                    <td>Maculino</td>
                                    <td>1234567</td>
                                    <td>123@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Méndez</td>
                                    <td>Luis</td>
                                    <td>Primer Grado Primaria</td>
                                    <td>C</td>
                                    <td>Maculino</td>
                                    <td>1234567</td>
                                    <td>123@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>Méndez</td>
                                    <td>Luis</td>
                                    <td>Primer Grado Primaria</td>
                                    <td>C</td>
                                    <td>Maculino</td>
                                    <td>1234567</td>
                                    <td>123@gmail.com</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                    <td>Méndez</td>
                                    <td>Luis</td>
                                    <td>Primer Grado Primaria</td>
                                    <td>C</td>
                                    <td>Maculino</td>
                                    <td>1234567</td>
                                    <td>123@gmail.com</td>
                                  </tr>
                                </tbody>
                          </table>

                    </div>
                
              </Tab>
              <Tab isSelected={ this.state.selected === 'Registro de Notas' }>
                    <div className="tab-notas">
                        <br/>
                        <h3>REGISTRO DE NOTAS 2021</h3>
                        <br/>
                        <table class="table table-bordered">
                              <thead className="thead-dark">
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Apellidos</th>
                                  <th scope="col">Nombres</th>
                                  <th scope="col">Grado</th>
                                  <th scope="col">Sección</th>
                                  <th scope="col">Bimestre I</th>
                                  <th scope="col">Bimestre II</th>
                                  <th scope="col">Bimestre III</th>
                                  <th scope="col">Promedio Final</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Gonzales</td>
                                  <td>Roberto</td>
                                  <td>2do. Secundaria</td>
                                  <td>B</td>
                                  <td>A</td>
                                  <td>AD</td>
                                  <td>B</td>
                                  <td>A</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Gonzales</td>
                                  <td>Roberto</td>
                                  <td>2do. Secundaria</td>
                                  <td>B</td>
                                  <td>A</td>
                                  <td>AD</td>
                                  <td>B</td>
                                  <td>A</td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td>Gonzales</td>
                                  <td>Roberto</td>
                                  <td>2do. Secundaria</td>
                                  <td>B</td>
                                  <td>A</td>
                                  <td>AD</td>
                                  <td>B</td>
                                  <td>A</td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td>Gonzales</td>
                                  <td>Roberto</td>
                                  <td>2do. Secundaria</td>
                                  <td>B</td>
                                  <td>A</td>
                                  <td>AD</td>
                                  <td>B</td>
                                  <td>A</td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td>Gonzales</td>
                                  <td>Roberto</td>
                                  <td>2do. Secundaria</td>
                                  <td>B</td>
                                  <td>A</td>
                                  <td>AD</td>
                                  <td>B</td>
                                  <td>A</td>
                                </tr>
                              </tbody>
                          </table>

                    </div>
                
              </Tab>
              <Tab isSelected={ this.state.selected === 'Consultas de Notas' }>
                    <div className="tab-consultas">
                      <br/>
                      <h3>CONSULTA DE NOTAS 2021</h3>
                      <br/>
                      <div className="form-group">
                          <form className="form-buscar">

                                    <div>
                                          <label for="inputBuscar">Ingresar el Apellido del Alumno:</label>
                                    </div>
                                
                                    <div className="form-row">
                                      
                                          <div className="col-7">
                                              <input type="text" className="form-control" id="buscar"/>
                                            
                                          </div>
                                          <div className="col">
                                                <button type="submit" className="btn btn-primary">Buscar Notas</button>
                                          </div>
                                                                
                                        
                                        
                                    </div>
                                

                              
                          
                            
                                
                          </form>

                              <br/>
                      <table class="table table-bordered">
                            <thead className="thead-dark">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">Grado</th>
                                <th scope="col">Sección</th>
                                <th scope="col">Bimestre I</th>
                                <th scope="col">Bimestre II</th>
                                <th scope="col">Bimestre III</th>
                                <th scope="col">Promedio Final</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Gonzales</td>
                                <td>Roberto</td>
                                <td>2do. Secundaria</td>
                                <td>B</td>
                                <td>A</td>
                                <td>AD</td>
                                <td>B</td>
                                <td>A</td>
                              </tr>
                              
                            
                            </tbody>
                        </table>

                      </div>
                    </div>
               
              </Tab>
            </TabNav>
        </div>
      </div>
    );
      
       
  }
}export default Videoteca;


/* 
function Videoteca() {
    return (

     

      <div className='videoteca-fondo'>
    
        <Registro/>


      </div>

    
      




    );
}

export default Videoteca; */