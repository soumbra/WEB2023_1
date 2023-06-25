import { useEffect, useState } from "react"

const minhaPromessa = new Promise(
    (resolve, reject) => {
        const x = !true
        if(x) resolve({ msg: "Deu certo" })
        else reject({ msg: "Deu errado"})
    }
)

const Questao03 = () => {
    const[maior, setMaior] = useState("")
    const[menor, setMenor] = useState("")

    useEffect(
        () => {
            fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                .then(
                    (response) => {
                        return response.json()
                    }
                )
                .then(
                    (data) => {
                        for(let i = 0; i < data.length; i++) {
                            if()
                            let maiorPopulacao = data[i];
                            let menorPopulacao = data[i];

                        }                
                    }
            )
            .catch (error => console.log(error))
        }
        ,
        []
    )

    
}

export default Questao03