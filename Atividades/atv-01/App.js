import './App.css';
//import Pai from './components/atividade01/01Pai';
//import {PlacaMae as P, Memoria as M, PlacaDeVideo as PV} from './components/atividade01/02MeuPC'
//import * as PC from './components/atividade01/02MeuPC'
import * as Batalha from './components/atividade01/03Batalha'

function App() {
  return (
    <div className="App">
      {/*<Pai 
        altura = {1.87}
        peso = {90}        
      />*/}

      {/*<PC.PlacaMae
        nome = "JJ"
        preco = {198}
      />

      <M
        nome = "Corsair"
        preco = {150}
      />

      <PV 
        nome = "RTX 2050"
        preco = {1500}
      />*/}

      {/*<Batalha.World>
        <Batalha.Arena name= "uI"/>
    </Batalha.World>*/}

      <Batalha.World>
        <Batalha.Arena2 name= "Battlefield Stadium" >
          <Batalha.Hero 
          name = "Rusbi" 
          img = "https://guide.fire-emblem-heroes.com/wp-content/uploads/macbeth_nohrs_tactician_slide02.png"/>
          <Batalha.Enemy 
          name = "Lucina"
          img = "https://cdn.fireemblemwiki.org/c/c4/FEA_Lucina_03.png"
          />
        </Batalha.Arena2>
        <Batalha.Arena2 name= "Lotus Stadium">
          <Batalha.Hero 
          name = "Robin"
          img = "https://i.pinimg.com/originals/bb/b7/34/bbb734a2f8426d253301544e0649a922.png"/>
          <Batalha.Enemy 
          name = "Ephrain"
          img = "https://i.pinimg.com/originals/1a/01/81/1a018166cf815836b433294e6230a4bb.png"
          />
        </Batalha.Arena2>
      </Batalha.World>
      
    </div>
  );
}

export default App;
