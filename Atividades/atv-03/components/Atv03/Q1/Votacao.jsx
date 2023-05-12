import {useState, useEffect} from "react"

const Votacao = () => {
    const [contadorIta, setContadorIta] = useState(0);
    const [contadorAca, setContadorAca] = useState(0);
    const [contadorQui, setContadorQui] = useState(0);
    const [contadorAlmo, setContadorAlmo] = useState(0);
    const [maisVotada, setMaisVotada] = useState("");
    const [menosVotada, setMenosVotada] = useState("");
    
    /*const acaoBotao = (city) => {
        if (city === "ita") {
            setContadorIta(contadorIta+1)
        } else if (city === "aca") {
            setContadorAca(contadorAca+1)
        } else if (city === "qui") {
            setContadorQui(contadorQui+1)
        } else if (city === "almo"){
            setContadorAlmo(contadorAlmo+1)
        }  
    }*/
    
    const VotaIta = () => {
        setContadorIta(contadorIta+1)
    }

    const VotaAca = () => {
        setContadorAca(contadorAca+1)
    }

    const VotaQui = () => {
        //Não está errado, apenas há um tapetão
        setContadorIta(contadorIta+1)
    }

    const VotaAlmo = () => {
        setContadorAlmo(contadorAlmo+1)
    }
    
    useEffect(
        () => {
            const nomes = ["Itarema", "Acarau", "Quixada", "Almofala"]
            let votos = [contadorIta, contadorAca, contadorQui, contadorAlmo];
            let menor = votos[0];
            let maior = votos[0];
            for (let i = 1; i < votos.length; i++) {
                if(votos[i] > maior) maior = votos[i];
                if(votos[i] < menor) menor = votos[i];
            }

            for (let i = 0; i < votos.length; i++) {
                if(votos[i] === maior) maior = setMaisVotada(nomes[i]);
                if(votos[i] === menor) menor = setMenosVotada(nomes[i]);
            }
        }
        ,
        [contadorIta, contadorAca, contadorQui, contadorAlmo]
    )

    return(
        <>
            <h1>Super Votacao 2015</h1>
            <h2>Itarema: {contadorIta}</h2>
            <h2>Acarau: {contadorAca}</h2>
            <h2>Quixapeba: {contadorQui}</h2>
            <h2>Almofala: {contadorAlmo}</h2>
            <h2>Botoes de votar</h2>

            <button onClick={VotaIta}>
                Votar Itarema
            </button>

            <button onClick={VotaAca}>
                Votar Acarau
            </button >

            <button onClick={VotaQui}>
                Votar Quixada
            </button>

            <button onClick={VotaAlmo}>
                Votar Almofala
            </button>

            <h2>Mais Votado: {maisVotada}</h2>
            <h2>Menos Votada: {menosVotada}</h2>
        </>
    )
}

export default Votacao;