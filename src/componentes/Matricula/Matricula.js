import React from 'react';
import './Matricula.css';


function Matricula() {
  return (
    
<div className='matricula-fondo'>
    <h1 className='matricula-titulo'>Matrícula 2021</h1>

    <div className='matricula'>


    <form className='formulari-container'>

        <div className="titulo">
            <h1 className="titulo-h1">Ingrese sus Datos para la solicitud de Matrícula</h1>
        </div>  
      
        <div className="row">

            <div className="nombre">
                <label className="nombrer-label" Htmlfor="">Nombre del Padre/Madre :</label>
                <input className="form-control" placeholder="Nombres" type="text" name="nombre" id="nombre" />
            </div>

            <div className="apellido">
                <label className="nombrer-label" Htmlfor="">Apellido del Padre/Madre :</label>
                <input className="form-control" placeholder="Apellidos" type="text" name="apellido" id="apellido" />
            </div>

        </div>

        <div className="row">

            <div className="celular">
                <label className="nombrer-label" Htmlfor="">Nro. del celular del padre/madre :</label>
                <input className="form-control" placeholder="Celular" type="text" name="celular" id="celular" />
            </div>

            <div className="correo">
                <label className="nombrer-label" Htmlfor="">Correo del padre/madre :</label>
                <input className="form-control" placeholder="Correo" type="text" name="correo" id="correo" />
            </div>

        </div>
        
        <div className="row">

            <div className="dni">
                <label className="nombrer-label" Htmlfor="">Documento de Identidad :</label>
                <input className="form-control"placeholder="DNI" type="number" name="dni" id="dni" />
            </div>

            <div className="domicilio">
                <label className="nombrer-label" Htmlfor="">Domicilio :</label>
                <input className="form-control" placeholder="Dirección" type="text" name="domicilio" id="domicilio"/>
            </div>

        </div>                          

        <div className="row">

            <div className="nombre">
              <label className="nombrer-label" Htmlfor="">Nombre del postulante :</label>
              <input className="form-control" placeholder="Nombres" type="text" name="nombre" id="nombre" />
            </div>

            <div className="apellido">
              <label className="nombrer-label" Htmlfor="">Apellido Paterno del postulante :</label>
              <input className="form-control" placeholder="Apellidos" type="text" name="apellido" id="apellido" />
            </div>

            <div className="apellido">
              <label className="nombrer-label" Htmlfor="">Apellido Materno del postulante :</label>
              <input className="form-control" placeholder="Apellidos" type="text" name="apellido" id="apellido" />
            </div>

        </div>


        <div className="row1">
            <select className="form-control" id="grado" name="grado"  required="" aria-required="true">
              <option value="">Seleccionar el Nivel</option>
              <option value="1">Primer de Primaria</option>
              <option value="2">Segundo de Primaria</option>
              <option value="3">Tercero de Primaria</option>
              <option value="4">Cuarto de Primaria</option>
              <option value="5">Quinto de Primaria</option>
              <option value="6">Sexto de Primaria</option>
              <option value="1">Primero de Secundaria</option>
              <option value="2">Segundo de Secundaria</option>
              <option value="3">Tercero de Secundaria</option>
              <option value="4">Cuarto de Secundaria</option>
              <option value="5">Quinto de Secundaria</option>
              <option value="6">Sexto de Secundaria</option>
              
            </select>

            <select className="form-control" id="anio" name="anio"  required="" aria-required="true">
              <option value="">Año escolar</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2021">2022</option>
              <option value="2021">2023</option>
              <option value="2021">2024</option>
              <option value="2021">2025</option>
            </select>
        </div>

        <div className="row2">
            <select className="form-control" id="situacion" name="situacion"  required="" aria-required="true">
              <option value="">Situación</option>
              <option value="Busco colegio para mi hijo(a)">Busco colegio para mi hijo(a)</option>
              <option value="Deseo trasladar a mi hijo(a) de colegio">Deseo trasladar a mi hijo(a) de colegio</option>
              <option value="Deseo información">Deseo información</option>
            </select>
          </div>

        <div className="row3">
            <textarea className="form-control" placeholder="Comentarios" rows="3"  name="comentario" id="comentario" aria-required="true"></textarea>
        </div>

        <div className="row4">
            <input type="checkbox" id="verificar" name="verificar" onclick="availableSend()"/>
            <a href='/' target="_blank">Acepto la política de privacidad</a>
        </div>

        <div className="row5">

            <div className="Departamento">
                <label htmlFor="">Departamento</label>
                <select className="form-control" id="region" name="region"  required="" aria-required="true">
                <option selected>Selecciona</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Ancash">Áncash</option>
                <option value="Apurímac">Apurimac</option>
                <option value="Arequipa">Arequipa</option>
                <option value="Ayacucho">Ayacucho</option>
                </select>
            </div>

            <div className="Provincia">
                <label Htmlfor="">Provincia</label>
                <select className="form-control" id="provincia" name="provincia"  required="" aria-required="true">
                <option selected>Selecciona</option>
                <option value="Chachapoyas">Chachapoyas</option>
                <option value="Bagua">Bagua</option>
                <option value="Bongara">Bongara</option>
                <option value="Condorcanqui">Condorcanqui</option>
                <option value="Luya">Luya</option>
                <option value="Lima">Lima Metropolitana</option>
                <option value="Pasco">Pasco</option>
                <option value="madre-de-dios">Madre de Dios</option>
                <option value="arequipa">Arequipa</option>
                <option value="trujillo">Trujillo</option>
                </select>
            </div>

            <div className="Distrito">
              <label Htmlfor="">Distrito</label>
              <select className="form-control" id="distrito" name="distrito"  required="" aria-required="true">
              <option selected>Selecciona</option>
              <option value="Lima">Miraflores</option>
              <option value="SanBorja">San Borja</option>
              <option value="San Luis">San Luis</option>
              <option value="Chaclacayo">Chacaclayo</option>
              <option value="Chosica">Lurigancho-Chosica</option>
              </select>
            </div>

        </div>

        <div className="row6">

              <h3>Nivel de Estudio:</h3>

                <div className="primaria">
                    <input type="radio" id="primaria" name="gender"value="primaria"/>
                    <label Htmlfor="gender">Primaria</label>
                </div>

                <div className="secundaria">
                    <input type="radio" id="secundaria" name="gender"value="secundaria"/>
                    <label Htmlfor="gender">Secundaria</label>
                </div>

        </div>


    
        <div className="row7">
                <button id="btnSend" type="submit" className="btn btn-theme-colored btn-lg btn-block" data-loading-text="Espere un momento...">Enviar solicitud</button>
        </div> 





      
    </form>
    </div>


</div>






  );
}

export default Matricula;