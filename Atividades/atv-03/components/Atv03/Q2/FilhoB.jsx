const FilhoB = ({numeros, funcaoPai}) => {

    const retornaMenor = () => {
        funcaoPai(Math.min(...numeros));
    }

    return(
        <div>
            <button onClick={retornaMenor}>
                Calcular Maior
            </button>
        </div>
    )

}

export default FilhoB;