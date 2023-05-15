import { useState } from "react";
import Questao01B from "./Questao01B";
const Questao01A = () => {
    //infelizmente nao consegui terminar 
    const [media, setMedia] = useState([]);


    const alunos = [
        { nome: "Zelda", notas: { ap1: 10, ap2: 7 } },
        { nome: "Link", notas: { ap1: 10, ap2: 9 } },
        { nome: "Jaspion", notas: { ap1: 10, ap2: 6 } },
    ];

    //comunicar com o filho
    const comunicar = (medias) => {
        setMedia(medias);
    };

    //aqui deveria voltar mais coisas
    return (
        <div>
            <Questao01B setMedias={comunicar} alunos={alunos} />
        </div>
    );
};

export default Questao01A;