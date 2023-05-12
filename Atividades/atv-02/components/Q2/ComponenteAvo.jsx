import PokemonContexto from "./MeuContexto"
import ComponentePai from "./ComponentePai"

const ComponenteAvo = () => {

    const numero = 1;

    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avo</h1>
                <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+3}.png`}
                style={{width: "400px"}}
                alt="Poke"
                />

                <ComponentePai/>
            </div>         
        </PokemonContexto.Provider>

    ) 
}

export default ComponenteAvo