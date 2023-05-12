import { useState } from "react";
import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"

const ComponenteAvo = () => {

    //let numero = 1;
    const [numero, setNumero] = useState(1);

    const acaoBotao = () => {
        //numero = numero + 1
        setNumero(numero + 1);
    }

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avo</h1>
                <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+3}.png`}
                style={{width: "400px"}}
                alt="Poke"
                />
                {/* <button
                    onClick={
                        () => {
                            
                        }
                    }
                > */}
                <button
                    onClick={acaoBotao}
                >
                    Aumentar Número
                
                </button>

                <ComponentePai/>
            </div>         
        </PokemonContexto.Provider>

    ) 
}

export default ComponenteAvo