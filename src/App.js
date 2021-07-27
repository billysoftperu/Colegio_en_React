import React from 'react';
import Header from './componentes/Header/Header';
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home/Home';
import Acerca from './componentes/Acerca/Acerca';
import Academicas from './componentes/Academicas/Academicas';
import Comunicados from './componentes/Comunicados/Comunicados';
import Matricula from './componentes/Matricula/Matricula';
import Biblioteca from './componentes/Biblioteca/Biblioteca';
import Primaria from './componentes/Primaria/Primaria';
import Mapa from './componentes/Mapa/Mapa';


import SistNotas from './componentes/Notas/SistNotas';


import Footer from './componentes/Footer/Footer';
import Bienvenidos from './componentes/Bienvenidos/Bienvenidos';
import Mision from './componentes/Mision/Mision';
import Resenia from './componentes/Resenia/ReseniaHistorica';


import Ruleta from './componentes/Ruleta/Ruleta';

import Login from './componentes/Login/Login';


import "bootstrap/dist/css/bootstrap.min.css";
import RegistroEstudiante from './componentes/Primaria/RegistroEst';








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
          <Route path='/resenia' exact component={Resenia} />
          <Route path='/academicas' exact component={Academicas} />
          <Route path='/ruleta' exact component={Ruleta} />
          <Route path='/comunicados' exact component={Comunicados} />
          <Route path='/matricula' exact component={Matricula} />
          <Route path='/biblioteca' exact component={Biblioteca} />
          <Route path='/primaria' exact component={Primaria} />
          <Route path='/mapa' exact component={Mapa} />          
          <Route path='/sisnotas' exact component={SistNotas} />
          <Route path='/login' exact component={Login} />
          <Route path='/registroestudiante' exact component={RegistroEstudiante}/>
                          
        </Switch>
        <Footer />
      </Router>

   </div>
  );
}

export default App;
