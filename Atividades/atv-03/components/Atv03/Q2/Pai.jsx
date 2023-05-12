import {useState} from "react"
import FilhoA from "./FilhoA";
import FilhoB from "./FilhoB";
import FilhoC from "./FilhoC";


const Pai = () => {
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);
    const [media, setMedia] = useState(0);

    let numeros = [10, 5, -5, 7, 3];

    const comunicacaoMaior = (returnFilho) => {
        setMaior(returnFilho);
    }

    const comunicacaoMenor = (returnFilho) => {
        setMenor(returnFilho);
    }

    const comunicacaoMedia = (returnFilho) => {
        setMedia(returnFilho);
    }

    return(
        <div>
            <h1>Maior: {maior}</h1>
            <FilhoA 
            numeros = {numeros} 
            funcaoPai = {comunicacaoMaior}
            />

            <h1>Menor: {menor}</h1>
            <FilhoB numeros = {numeros} funcaoPai = {comunicacaoMenor}/>

            <h1>Media: {media}</h1>
            <FilhoC numeros = {numeros} funcaoPai = {comunicacaoMedia}/>

        </div>
    )

}

export default Pai;