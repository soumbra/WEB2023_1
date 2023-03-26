import logo from './logo.svg';
import './App.css';
//import FunctionA from './components/03Hierarquia/FunctionA';
//import HelloWorld from './components/00-HelloWord';
//import ArrowFunction from './components/001-ArrowFunction';
//import Calculadora from './components/01-Calculadora'; 
//import MyProps from './components/02-Props';
//import {Header as H, Body as B, Footer as F} from './components/04MultiploComponente'
//import * as Site from './components/04MultiploComponente'
import { Supermercado, Legume, Fruta, Bebida } from './components/05Childrem/MyChildremV0';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          <Site.Header />
          <Site.Body />
          <Site.Footer/>
        </p>*/}
        <p>
          <Supermercado nome = "Ubinga">
            <Legume nome = "Le" />
            <Fruta nome = "Fu" />
            <Bebida nome = "dre" />
          </Supermercado>
        </p>
      </header>
    </div>
  );
}

export default App;
