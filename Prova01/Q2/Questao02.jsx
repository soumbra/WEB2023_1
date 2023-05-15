import { useEffect, useState } from "react"

const Questao02 = () => {
    const frente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const costas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    //definindo as variaveis de estados que irão mudar com determinada ação
    const[virar, setVirar] = useState(false)
    const[imagem, setImagem] = useState("")

    //dependendo do valor que virar esta devemos modifica-lo a cada toque no botao
    const acaoBotao = () => {
        if(virar === true) {
            setVirar(false)
        } else {
            setVirar(true)
        }
    }

    //se virar esta como false devemos colocar a imagem de frente se nao devemos colcocar o pikachu de frente
    useEffect(
        () => {
            if(virar === false) {
                setImagem(frente);
            } else {
                setImagem(costas)
            }
        }
        ,
        //mudando o estado para renderizar
        [virar]
    )

    return(
        <>
           <img 
           src={imagem}
           style={{width: "400px"}}
           alt="poke"
           />
            <button onClick={acaoBotao}>
                Virar
            </button>
        </>
    )
}

export default Questao02