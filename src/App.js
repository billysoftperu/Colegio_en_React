import React from 'react';
import Header from './componentes/Header/Header';
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home/Home';
import Acerca from './componentes/Acerca/Acerca';
import Actividades from './componentes/Actividades/Actividades';
import Comunicados from './componentes/Comunicados/Comunicados';
import Matricula from './componentes/Matricula/Matricula';
import Biblioteca from './componentes/Biblioteca/Biblioteca';
import Videoteca from './componentes/Videoteca/Videoteca';
import Mapa from './componentes/Mapa/Mapa';


import SistNotas from './componentes/Notas/SistNotas';

import Footer from './componentes/Footer/Footer';
import Bienvenidos from './componentes/Bienvenidos/Bienvenidos';
import Mision from './componentes/Mision/Mision';

import "bootstrap/dist/css/bootstrap.min.css";




function App() {

  return (
    <div>
      <Router>
        <Header />
        <Navbar/>     
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/acerca' exact component={Acerca} />
          <Route path='/bienvenidos' exact component={Bienvenidos} />
          <Route path='/mision' exact component={Mision} />
          <Route path='/actividades' exact component={Actividades} />
          <Route path='/comunicados' exact component={Comunicados} />
          <Route path='/matricula' exact component={Matricula} />
          <Route path='/biblioteca' exact component={Biblioteca} />
          <Route path='/videoteca' exact component={Videoteca} />
          <Route path='/mapa' exact component={Mapa} />          
          <Route path='/sisnotas' exact component={SistNotas} />                 
        </Switch>
        <Footer />
      </Router>

   </div>
  );
}

export default App;
