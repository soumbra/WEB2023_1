//Esse jsx responde tanto a q1 como a q2
import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, reject) => {
        setTimeout(
            ()=>{
                const vetor = [
                    {id:1, nome:"Japone", ira:4.5},
                    {id:2, nome:"Link", ira:8.2},
                    {id:3, nome:"Zelda", ira:7.3}
                ]

                const meuInt = Math.floor((Math.random()*10))+1
                if(meuInt === 1) reject({id:1, msg:"Erro de conexão"})
                else if(meuInt === 2) reject({id:2, msg:"Erro de dados"})
                else resolve({id:meuInt, msg:"OK", vetor:vetor})
            } //funcao a executar o timeout
            ,
            3000
        )//setTimout
    } //resolve e reject
)

const Questao01 = () => {

    const [meusDados, setMeusDados] = useState([])
    const [loading, setLoading] = useState(false)

    function promessaThenCatch() {
        minhaPromessa
            .then(
                (data)=>{
                    console.log("ID " + data.id)
                    console.log("VETOR: " + data.vetor)
                    setMeusDados(data.vetor)
                }
            )
            .catch(
                (error)=>{
                    console.log("ID: " + error.id)
                    console.log("Msg: " + error.msg)
                    alert(error.msg)
                }
            )
    }

    async function promessaAsyncAwayt() {
        setLoading(true)
        try {
            const resposta = await minhaPromessa
            setLoading(false)
            setMeusDados(resposta.vetor)
        }
        catch(error){
            console.log("ID: " + error.id)
            console.log("Msg: " + error.msg)
            alert(error.msg)
            setLoading(false)
        }
    }

    useEffect(
        () => {
            //promessaThenCatch()
            promessaAsyncAwayt()
        }
        ,
        []
    )

    function renderizar() {
        if(loading) return <h3>Loading...</h3>
        return(
            meusDados.map(
                (dado) => <h3 key={dado.id}> {dado.nome} - {dado.ira}</h3>
            )
        )
    }

    return (
        <>  
            <h1>Questao 01</h1>
            {renderizar()}
        </>
    )
}

export default Questao01