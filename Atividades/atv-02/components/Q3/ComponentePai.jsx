import { useContext } from "react"
import ComponenteFilho from "./ComponenteFilho"
import PokemonContexto from "./MeuContexto"

const ComponentePai = () => {

    const numero = useContext(PokemonContexto);

    return (
        <div>
            <h1>Componente Pai</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                style={{ width: "400px" }}
                alt="Poke"
            />

            <ComponenteFilho />
        </div>
    )
}

export default ComponentePai