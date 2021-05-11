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
import SistNotas from './componentes/Notas/SistNotas';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/acerca' exact component={Acerca} />
          <Route path='/actividades' exact component={Actividades} />
          <Route path='/comunicados' exact component={Comunicados} />
          <Route path='/matricula' exact component={Matricula} />
          <Route path='/sisnotas' exact component={SistNotas} />
          

        </Switch>
      </Router>

   </>
  );
}

export default App;
