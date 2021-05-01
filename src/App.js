import React from 'react';
import Header from './componentes/Header/Header';
import Navbar from './componentes/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home/Home';
import Estudiantes from './componentes/Estudiantes/Estudiantes';
import Docentes from './componentes/Docentes/Docentes';
import SistNotas from './componentes/Notas/SistNotas';
import Matricula from './componentes/Matricula/Matricula';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/estudiantes' exact component={Estudiantes} />
          <Route path='/docentes' exact component={Docentes} />
          <Route path='/sisnotas' exact component={SistNotas} />
          <Route path='/matricula' exact component={Matricula} />

        </Switch>
      </Router>

   </>
  );
}

export default App;
