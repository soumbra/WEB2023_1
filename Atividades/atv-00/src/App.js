//import MeusDados from "./components/01MeusDados";
//import MeusDadoss from "./components/02MeusDadoss";
import Temperatura from "./components/03Temperatura"
import "./styles.css";

export default function App() {
  return (
    <div className="App">    
      <Temperatura 
      c = {30}
      f = {50}
      k = {40}
      />
    </div>
  );
}