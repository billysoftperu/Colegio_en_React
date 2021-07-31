
import './Primaria.css';

import React from 'react';
import TabNav from '../Notas/TabNav';
import Tab from '../Notas/Tabs';
//import RegistroEstudiante from './RegistroEst';
//import Links from './Links';

//import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Primaria extends React.Component {
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
          
          
          


          <h2 className="titulo-primaria">NIVEL PRIMARIA 2021</h2>
          <div className="table-responsive">
          
              <TabNav tabs={['Inicio', 'Registro de Estudiantes', 'Listado de Estudiantes','Registro de Notas','Consultas de Notas']} selected={ this.state.selected } setSelected={ this.setSelected }>


                <Tab isSelected={ this.state.selected === 'Inicio' }>
                      <div className="tab-inicio">
                        <div className="container-inicio">
                            <h1 className="sistema-titulo">SISTEMA DE NOTAS 2021</h1>
                        </div>
                          
                      </div>
                  
                </Tab>
                <Tab isSelected={ this.state.selected === 'Registro de Estudiantes' }>
                      <div className="tab-registro">
                      <br/>
                          <h2 className="subtitulo-primaria">REGISTRAR A LOS ESTUDIANTES</h2>
                          <br/>
                          <form>
                                <div className="form-row">
                                      <div className="col-3">
                                          <label htmlFor="exampleFormControlInput1">Apellido Paterno:</label>
                                          <input type="lastname1" className="form-control" id="exampleFormControlInput1" placeholder="Paterno"/>
                                      </div>
                                      <div className="col-3">
                                          <label htmlFor="exampleFormControlInput1">Apellido Materno:</label>
                                          <input type="lastname2" className="form-control" id="exampleFormControlInput1" placeholder="Materno"/>
                                      </div>
                                      <div className="col-3">
                                          <label htmlFor="exampleFormControlInput1">Nombres:</label>
                                          <input type="firstname" className="form-control" id="exampleFormControlInput1" placeholder="Nombres"/>
                                      </div>

                                </div>

                                <br/>

                                <div className="form-row">
                                    <div className="col-2">
                                        <label htmlFor="exampleFormControlInput1">Correo:</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                                    </div>
                                    <div className="col-2">
                                        <label htmlFor="exampleFormControlInput1">N° Documento:</label>
                                        <input type="dni" className="form-control" id="exampleFormControlInput1" placeholder="DNI"/>
                                    </div>

                                    
                                    <div className="col-2">
                                         <label htmlFor="exampleFormControlSelect1">Grado:</label>
                                          <select className="form-control" id="exampleFormControlSelect1">
                                              <option>Primero</option>
                                              <option>Sedundo</option>
                                              <option>Tercero</option>
                                              <option>Cuarto</option>
                                              <option>Quinto</option>
                                              <option>Sexto</option>
                                              
                                          </select>
                                    </div>

                                    <div className="col-2">
                                        <label htmlFor="exampleFormControlSelect1">Sección:</label>
                                        <select className="form-control" id="seccion">
                                              <option>A</option>
                                              <option>B</option>
                                              <option>C</option>
                                              <option>D</option>
                                              <option>E</option>
                                              <option>ÚNICA</option>
                                              
                                        </select>
                                    </div>

                                  
                                </div>

                                

                                
                                <br/>
                                <div className="form-row">
                                      

                                      <div className="col-2">
                                            <label htmlFor="exampleFormControlSelect1">Nivel:</label>
                                            <select className="form-control" id="nivel">
                                                  <option>PRIMARIA</option>
                                                  <option>SECUNDARIA</option>
                                                  
                                              
                                            </select>
                                        </div>

                                      <div className="col-2">
                                            <label htmlFor="exampleFormControlSelect1">N° de Orden:</label>
                                            <select className="form-control" id="orden">
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
                                                  <option>36</option>
                                              
                                            </select>
                                        </div>

                                        <div className="col-2">
                                            <label htmlFor="exampleFormControlInput1">Código del estudiante:</label>
                                            <input type="codigo" className="form-control" id="codigo" placeholder="Código"/>
                                        </div>

                                        <div className="col-2">
                                            <label htmlFor="exampleFormControlInput1">Género:</label><br/>
                                            <div className="custom-control custom-radio custom-control-inline">
                                            
                                                <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input"/>
                                                <label className="custom-control-label" htmlFor="customRadioInline1">Femenino</label>
                                          
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                            
                                                <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input"/>
                                                <label className="custom-control-label" htmlFor="customRadioInline2">Masculino</label>
                                              
                                            </div>
                                      
                                      </div>

                                </div>
                                
                                

                                <div className="form-group">
                                  <label htmlFor="exampleFormControlTextarea1">Observaciones:</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar Registro</button>
                            </form>

                                </div>
                
              </Tab>
              <Tab isSelected={ this.state.selected === 'Listado de Estudiantes' }>
                    <div className="tab-lista">
                        <br/>
                        <h2 className="subtitulo-primaria">ESTUDIANTES POR SECCIÓN</h2>
                        <br/>

                        <div className="form-row">
                              <div className="col-2">
                                  <label htmlFor="exampleFormControlSelect1">Grado:</label>
                                  <select className="form-control" id="grado">
                                          <option>Primero</option>
                                          <option>Sedundo</option>
                                          <option>Tercero</option>
                                          <option>Cuarto</option>
                                          <option>Quinto</option>
                                          <option>Sexto</option>
                                                                  
                                  </select>
                              </div>

                              <div className="col-1">
                                  <label htmlFor="exampleFormControlSelect1">Sección:</label>
                                  <select className="form-control" id="seccion">
                                          <option>A</option>
                                          <option>B</option>
                                          <option>C</option>
                                          <option>D</option>
                                          <option>E</option>
                                          <option>ÚNICA</option>
                                  </select>
                              </div>
                              <div className="row">
                                   
                                    <button id="btnListar" type="submit" className="btn-listar">Listar Estudiantes</button>
                                    <button id="btnNuevo" type="submit" className="btn-nuevo" data-toggle="tooltip" title="Nuevo Estudiante"><i className="bi bi-person-plus"></i></button>
                                    <label htmlFor="exampleFormControlSelect1"></label>
                              </div>

                        </div>
                        

                        <br/>
                        <table className="table">
                                <thead className="thead-dark">
                                  <tr>
                                    <th scope="col">N° Orden</th>
                                    <th scope="col">DNI</th>
                                    <th scope="col">CÓDIGO</th>
                                    <th scope="col">Apellidos y Nombres</th>                                    
                                    <th scope="col">Género</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Celular</th>                                                              
                                    <th scope="col">Correo</th>
                                    <th scope="col">Notas</th>
                                    <th scope="col">Editar</th>
                                    <th scope="col">Eliminar</th>
                                    
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>07060504</td>
                                    <td>070605041A</td>
                                    <td>Luis Miguel Sánchez</td>
                                    <td>M</td>
                                    <td>650-9854</td>
                                    <td>987654321</td>
                                    <td>luismiguel@gmail.com</td>
                                    <td><a href="/"><i className="far fa-address-card"></i></a></td>
                                    <th><a href="/"><i class="bi bi-pencil-square"></i></a></th>
                                    <th><a href="/"><i class="bi bi-trash"></i></a></th>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>08102135</td>
                                    <td>081021351A</td>
                                    <td>José Pérez Gonzales</td>
                                    <td>F</td>
                                    <td>418-3126</td>
                                    <td>987654321</td>
                                    <td>joseperez@gmail.com</td>
                                    <td><a href="/"><i className="far fa-address-card"></i></a></td>
                                    <th><a href="/"><i class="bi bi-pencil-square"></i></a></th>
                                    <th><a href="/"><i class="bi bi-trash"></i></a></th>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>75648949</td>
                                    <td>756489491A</td>
                                    <td>Ricardo Gonzales Hurtado</td>
                                    <td>M</td>
                                    <td>270-4531</td>
                                    <td>987654321</td>
                                    <td>ricardogonzales@gmail.com</td>
                                    <td><a href="/"><i className="far fa-address-card"></i></a></td>
                                    <th><a href="/"><i class="bi bi-pencil-square"></i></a></th>
                                    <th><a href="/"><i class="bi bi-trash"></i></a></th>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>32644848</td>
                                    <td>326448481A</td>
                                    <td>Elena Paz Hinojoza</td>
                                    <td>F</td>
                                    <td>361-5170</td>
                                    <td>987654321</td>
                                    <td>elenapaz@gmail.com</td>
                                    <td><a href="/"><i className="far fa-address-card"></i></a></td>
                                    <th><a href="/"><i class="bi bi-pencil-square"></i></a></th>
                                    <th><a href="/"><i class="bi bi-trash"></i></a></th>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>                                    
                                    <td>58748945</td>
                                    <td>587489451A</td>
                                    <td>María Norabuena Saenz</td>
                                    <td>F</td>
                                    <td>589-1241</td>
                                    <td>987654321</td>
                                    <td>marianorabuena@gmail.com</td>
                                    <td><a href="/"><i className="far fa-address-card"></i></a></td>
                                    <th><a href="/"><i class="bi bi-pencil-square"></i></a></th>
                                    <th><a href="/"><i class="bi bi-trash"></i></a></th>
                                    
                                  </tr>
                                  <tr>
                                    <th scope="row">6</th>
                                    <td>32484172</td>
                                    <td>324841721A</td>
                                    <td>Miguel Peña Quispe</td>
                                    <td>M</td>
                                    <td>467-1234</td>
                                    <td>987654321</td>
                                    <td>miguelpenia@gmail.com</td>
                                    <td><a href="/"><i className="far fa-address-card"></i></a></td>
                                    <th><a href="/"><i class="bi bi-pencil-square"></i></a></th>
                                    <th><a href="/"><i class="bi bi-trash"></i></a></th>
                                  </tr>
                                </tbody>
                                
                          </table>

                    </div>
                
              </Tab>
              <Tab isSelected={ this.state.selected === 'Registro de Notas' }>
                    <div className="tab-notas">
                        <br/>
                        <h2 className="subtitulo-primaria">REGISTRO DE NOTAS FINALES</h2>
                        <br/>

                        <div className="form-row">

                              <div className="col-2">
                                          <label htmlFor="exampleFormControlSelect1">Periodo:</label>
                                          <select className="form-control" id="seccion">
                                                <option>I Trimestre</option>
                                                <option>II Trimestre</option>
                                                <option>III Trimestre</option>                  
                                          </select>
                              </div>

                              <div className="col-3">
                                          <label htmlFor="exampleFormControlSelect1">Área Curricular:</label>
                                          <select className="form-control" id="seccion">
                                                <option>PERSONAL SOCIAL</option>
                                                <option>EDUCACIÓN FÍSICA</option>
                                                <option>COMUNICACIÓN</option>
                                                <option>ARTE Y CULTURA</option> 
                                                <option>INGLÉS COMO LENGUA EXTRANJERA</option> 
                                                <option>MATEMÁTICA</option> 
                                                <option>CIENCIA Y TECNOLOGÍA</option> 
                                                <option>EDUCACIÓN RELIGIOSA</option> 
                                                <option>COMPETENCIAS TRANSVERSALES</option> 
                                                                 
                                          </select>
                              </div>

                              <div className="col-2">
                                    <label htmlFor="exampleFormControlSelect1">Grado:</label>
                                    <select className="form-control" id="grado">
                                            <option>Primer</option>
                                            <option>Sedundo</option>
                                            <option>Tercero</option>
                                            <option>Cuarto</option>
                                            <option>Quinto</option>
                                            <option>Sexto</option>
                                                                    
                                    </select>
                                </div>

                                <div className="col-2">
                                    <label htmlFor="exampleFormControlSelect1">Sección:</label>
                                    <select className="form-control" id="seccion">
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                            <option>ÚNICA</option>
                                    </select>
                                </div>

                                <div className="col-1">
                                   
                                      <button type="submit" className="btn-ingresar">Ingresar</button>
                                   
                                </div>
                                

                                

                                

                        </div>
                        <br/>

                        <table className="table table-bordered">
                              <thead className="thead-dark">
                                <tr>
                                  <th className="col-1">N° de Orden</th>
                                  <th className="col-2">Apellidos y Nombres</th>
                                  
                                  <th className="col-1">Grado</th>
                                  <th className="col-1">Sección</th>
                                  <th className="col-1">Com1/NL</th>
                                  <th className="col-1">Conclusión descriptiva1</th>
                                  <th className="col-1">Com2/NL</th>
                                  <th className="col-1">Conclusión descriptiva2</th>
                                  <th className="col-1">Com3/NL</th>
                                  <th className="col-1">Conclusión descriptiva3</th>
                                  <th className="col-1">Com4/NL</th>
                                  <th className="col-1">Conclusión descriptiva4</th>
                                  <th className="col-1">Com5/NL</th>
                                  <th className="col-1">Conclusión descriptiva5</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td className="apellidos-nombres">Luis Miguel Sánchez</td>
                                  
                                  <td>Primero</td>
                                  <td>B</td>
                                  <td><input type="text" className="form-control" id="competencia1"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva1"/></td>
                                  <td><input type="text" className="form-control" id="competencia2"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva2"/></td>
                                  <td><input type="text" className="form-control" id="competencia3"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva3"/></td>
                                  <td><input type="text" className="form-control" id="competencia4"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva4"/></td>
                                  <td><input type="text" className="form-control" id="competencia5"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva5"/></td>
                                  
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td className="apellidos-nombres">José Pérez Gonzales</td>
                                  
                                  <td>Primero</td>
                                  <td>B</td>
                                  <td><input type="text" className="form-control" id="competencia1"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva1"/></td>
                                  <td><input type="text" className="form-control" id="competencia2"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva2"/></td>
                                  <td><input type="text" className="form-control" id="competencia3"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva3"/></td>
                                  <td><input type="text" className="form-control" id="competencia4"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva4"/></td>
                                  <td><input type="text" className="form-control" id="competencia5"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva5"/></td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td className="apellidos-nombres">Ricardo Gonzales Hurtado</td>
                                  
                                  <td>Primero</td>
                                  <td>B</td>
                                  <td><input type="text" className="form-control" id="competencia1"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva1"/></td>
                                  <td><input type="text" className="form-control" id="competencia2"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva2"/></td>
                                  <td><input type="text" className="form-control" id="competencia3"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva3"/></td>
                                  <td><input type="text" className="form-control" id="competencia4"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva4"/></td>
                                  <td><input type="text" className="form-control" id="competencia5"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva5"/></td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td className="apellidos-nombres">Elena Paz Hinojoza</td>
                                  
                                  <td>Primero</td>
                                  <td>B</td>
                                  <td><input type="text" className="form-control" id="competencia1"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva1"/></td>
                                  <td><input type="text" className="form-control" id="competencia2"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva2"/></td>
                                  <td><input type="text" className="form-control" id="competencia3"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva3"/></td>
                                  <td><input type="text" className="form-control" id="competencia4"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva4"/></td>
                                  <td><input type="text" className="form-control" id="competencia5"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva5"/></td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td className="apellidos-nombres">María Norabuena Saenz</td>
                                  
                                  <td>Primero</td>
                                  <td>B</td>
                                  <td><input type="text" className="form-control" id="competencia1"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva1"/></td>
                                  <td><input type="text" className="form-control" id="competencia2"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva2"/></td>
                                  <td><input type="text" className="form-control" id="competencia3"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva3"/></td>
                                  <td><input type="text" className="form-control" id="competencia4"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva4"/></td>
                                  <td><input type="text" className="form-control" id="competencia5"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva5"/></td>
                                </tr>
                                <tr>
                                  <th scope="row">6</th>
                                  <td className="apellidos-nombres">Miguel Peña Quispe</td>
                                  
                                  <td>Primero</td>
                                  <td>B</td>
                                  <td><input type="text" className="form-control" id="competencia1"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva1"/></td>
                                  <td><input type="text" className="form-control" id="competencia2"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva2"/></td>
                                  <td><input type="text" className="form-control" id="competencia3"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva3"/></td>
                                  <td><input type="text" className="form-control" id="competencia4"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva4"/></td>
                                  <td><input type="text" className="form-control" id="competencia5"/></td>
                                  <td><input type="text" className="form-control" id="descriptiva5"/></td>
                                </tr>
                              </tbody>
                          </table>

                          <div className="form-row">

                                <div className="row">
                                   
                                    <button type="submit" className="btn-editar">Editar Notas</button>
                                    <label htmlFor="exampleFormControlSelect1"></label>
                                </div>

                                <div className="row">
                                  
                                    <button type="submit" className="btn-guardar">Guardar Notas</button>
                                    <label htmlFor="exampleFormControlSelect1"></label>
                                </div>

                          </div>

                          

                    </div>
                
              </Tab>
              <Tab isSelected={ this.state.selected === 'Consultas de Notas' }>
                    <div className="tab-consultas">
                      <br/>
                      <h2 className="subtitulo-primaria">CONSULTA DE NOTAS</h2>
                      <br/>

                      <div className="form-row">

                            <div className="col-2">
                                        <label htmlFor="exampleFormControlSelect1">Periodo:</label>
                                        <select className="form-control" id="seccion">
                                              <option>I Trimestre</option>
                                              <option>II Trimestre</option>
                                              <option>III Trimestre</option>                  
                                        </select>
                            </div>

                            <div className="col-2">
                                  <label htmlFor="exampleFormControlSelect1">Grado:</label>
                                  <select className="form-control" id="grado">
                                          <option>Primero</option>
                                          <option>Sedundo</option>
                                          <option>Tercero</option>
                                          <option>Cuarto</option>
                                          <option>Quinto</option>
                                          <option>Sexto</option>
                                                                   
                                  </select>
                              </div>

                              <div className="col-1">
                                  <label htmlFor="exampleFormControlSelect1">Sección:</label>
                                  <select className="form-control" id="seccion">
                                          <option>A</option>
                                          <option>B</option>
                                          <option>C</option>
                                          <option>D</option>
                                          <option>E</option>
                                          <option>ÚNICA</option>
                                  </select>
                              </div>

                              <div className="col-2">
                                    <label htmlFor="exampleFormControlSelect1">N° de Orden:</label>
                                    <select className="form-control" id="orden">
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
                                        <option>36</option>
                                     </select>
                              </div>

                              <div className="col-3">
                                              <label htmlFor="inputBuscar">Apellido del Estudiante:</label>
                                              <input type="text" className="form-control" id="buscar"/>
                                            
                              </div>
                              <div className="col-1">
                                   
                                      <button type="submit" className="btn-ingresar">Buscar</button>
                                   
                                </div>

                      </div>

                      
                      
                      

                      
                      <br/>
                      <div className="form-group">
                      <h2 className="subtitulo-primaria2">INFORME DE PROGRESO DEL ESTUDIANTE - 2021</h2>
                      <br/>

                      <table className="table table-bordered">
                            
                            <tbody className="tabla1">
                              <tr>                                
                                <td rowSpan="8"><img className="img-boleta" src="./images/Escudo_Nacional.png" alt="escudo"/></td>                                                     
                              </tr>
                              <tr>                                
                                <td className="table-secondary">DRE:</td>
                                <td>DRE LIMA METROPOLITANA</td>
                                <td className="table-secondary">UGEL:</td>
                                <td>UGEL 06 ATE</td>
                                <td rowSpan="8"><img className="img-boleta" src="./images/insignea.png" alt="escudo"/></td>                          
                              </tr>
                              <tr>                                
                                <td className="table-secondary">Nivel:</td>
                                <td>PRIMARIA</td> 
                                <td className="table-secondary">Código Modular:</td>
                                <td>456789</td>
                                                        
                              </tr>
                              <tr>                                
                                <td className="table-secondary">Institución Educativa:</td>
                                <td colSpan="3">JOSEFA CARRILLO Y ALBORNOZ</td>
                                                                                     
                              </tr>
                              <tr>                                
                                <td className="table-secondary">Grado:</td>
                                <td>Primero</td>
                                <td className="table-secondary">Sección:</td>
                                <td>A</td>
                                
                                                         
                              </tr>
                              <tr>                                
                                <td className="table-secondary">Apellidos y nombres del estudiante</td>
                                <td colSpan="3">Ricardo Merino Flores</td>
                                
                                                         
                              </tr>
                              <tr>                                
                                <td className="table-secondary">Código del estudiante:</td>
                                <td>00000012345678</td>
                                <td className="table-secondary">DNI:</td>
                                <td>12345678</td>
                                                         
                              </tr>
                              <tr>                                
                                <td className="table-secondary">Apellidos y nombres del docente o tutor</td>
                                <td colSpan="3">Ricardo Merino Flores</td>                                                                                         
                              </tr>
                                                            
                                                                                  
                             
                            
                            </tbody>
                      </table>
                      <br/>
                          

                              
                      <table className="table table-bordered">
                            <thead className="table-secondary">
                              <tr>
                                
                                <th className="encabezado-area" scope="col">Área Curricular</th>                                           
                                <th className="encabezado-competencia" scope="col">Competencias</th>
                                <th className="encabezado-logro" scope="col">Nivel de logro alcanzado al finalizar el período lectivo</th>
                                <th className="encabezado-descriptiva" scope="col">Conclusión descriptiva</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>                                
                                <td rowSpan="5" className="area-curricular">PERSONAL SOCIAL</td>
                                <td className="competencias">1) Construye interpretaciones históricas</td>
                                <td></td>
                                <td></td>                         
                              </tr>                         
                            
                              <tr>                                                  
                                <td className="competencias">2) Construye su identidad</td>
                                <td></td>
                                <td></td>                                                         
                              </tr>
                              <tr>                                                  
                                <td className="competencias">3) Convive y participa democráticamente en la búsqueda del bien común</td>
                                <td></td>
                                <td></td>                                                         
                              </tr>
                              <tr>                                                  
                                <td className="competencias">4) Gestiona responsablemente el espacio y el ambiente</td>
                                <td></td>
                                <td></td>                                                         
                              </tr>
                              <tr>                                                  
                                <td className="competencias">5) Gestiona responsablemente los recursos económicos</td>
                                <td></td>
                                <td></td>                                                         
                              </tr>



                              <tr>
                                <td rowSpan="3" className="area-curricular">EDUCACIÓN FÍSICA</td>
                                <td className="competencias">1) Asume una vida saludable</td>
                                <td></td>
                                <td></td>                                                        
                              </tr>
                              
                              <tr>                         
                                <td className="competencias">2) Interactúa a través de sus habilidades sociomotrices</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              <tr>                         
                                <td className="competencias">3) Se desenvuelve de manera autónoma a través de su motricidad</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                            
                           
                              <tr>                                
                                <td rowSpan="3" className="area-curricular">COMUNICACIÓN</td>
                                <td className="competencias">1) Escribe diversos tipos de textos en su lengua materna</td>
                                <td></td>
                                <td></td>                               
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Lee diversos tipos de textos escritos en su lengua materna</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              <tr>                         
                                <td className="competencias">3) Se comunica oralmente en su lengua materna</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              
                                                        
                              <tr>                                
                                <td rowSpan="2" className="area-curricular">ARTE Y CULTURA</td>
                                <td className="competencias">1) Aprecia de manera crítica manifestaciones artístico-culturales</td>
                                <td></td>
                                <td></td>                              
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Crea proyectos desde los lenguajes artísticos</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              
                                                        
                              <tr>                                
                                <td rowSpan="3" className="area-curricular">INGLÉS COMO LENGUA EXTRANJERA</td>
                                <td className="competencias">1) Escribe diversos tipos de textos en inglés como lengua extranjera</td>
                                <td></td>
                                <td></td>                                                 
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Lee diversos tipos de textos escritos en inglés como lengua extranjera</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              <tr>                         
                                <td className="competencias">3) Se comunica oralmente en inglés como lengua extranjera</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              
                            
                            
                              <tr>                                
                                <td rowSpan="4" className="area-curricular">MATEMÁTICA</td>
                                <td className="competencias">1) Resuelve problemas de cantidad</td>
                                <td></td>
                                <td></td>                                                                
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Resuelve problemas de forma,movimiento y localización</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              <tr>                         
                                <td className="competencias">3) Resuelve problemas de gestión de datos e incertidumbre</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              <tr>                         
                                <td className="competencias">4) Resuelve problemas de regularidad,equivalencia y cambio</td>
                                <td></td>
                                <td></td>                           
                              </tr>                        
                                                                                                             
                                                      
                              <tr>                                
                                <td rowSpan="3" className="area-curricular">CIENCIA Y TECNOLOGÍA</td>
                                <td className="competencias">1) Diseña y construye soluciones tecnológicas para resolver problemas de su entorno</td>
                                <td></td>
                                <td></td>                                                              
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              <tr>                         
                                <td className="competencias">3) Indaga mediante métodos científicos para construir sus conocimientos</td>
                                <td></td>
                                <td></td>                           
                              </tr>
                              
                            
                            
                              <tr>                                
                                <td rowSpan="2" className="area-curricular">EDUCACIÓN RELIGIOSA</td>
                                <td className="competencias">1) Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa</td>
                                <td></td>
                                <td></td>                                
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Construye su identidad como persona humana, amada por Dios,digna, libre y trascendente,comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas</td>
                                <td></td>
                                <td></td>                           
                              </tr>                                                        
                                                                                 
                                                        
                              <tr>                                
                                <td rowSpan="2" className="area-curricular">COMPETENCIAS TRANSVERSALES</td>
                                <td className="competencias">1) Se desenvuelve en entornos virtuales generados por las TIC</td>
                                <td></td>
                                <td></td>                                                               
                              </tr>
                              <tr>                         
                                <td className="competencias">2) Gestiona su Aprendizaje de manera autónoma</td>
                                <td></td>
                                <td></td>                           
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
}export default Primaria;


