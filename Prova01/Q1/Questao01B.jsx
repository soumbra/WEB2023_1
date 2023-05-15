function Questao01B({ setMedias, alunos }) {
    let medias = [];

    //calculando as medias por um for e dando push no vetor
    const calculaMedias = () => {
        for(let i = 0; i < alunos.length; i++) {
            let media = (alunos[i].notas.ap1 + alunos[i].notas.ap2)/2
            medias.push(media)
        }
        setMedias(medias);
    };

    //botao aciona a acao e calcular
    return (
        <div>
            <button onClick={calculaMedias}>Calcular médias</button>
        </div>
    );
}

export default Questao01B;
