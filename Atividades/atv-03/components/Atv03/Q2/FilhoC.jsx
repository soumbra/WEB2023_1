const FilhoC = ({numeros, funcaoPai}) => {

    const retornaMedia = () => {
        let soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        funcaoPai(soma = soma/numeros.length);
    }

    return(
        <div>
            <button onClick={retornaMedia}>
                Calcular Media
            </button>
        </div>
    )

}

export default FilhoC;