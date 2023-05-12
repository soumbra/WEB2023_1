const FilhoA = ({numeros, funcaoPai}) => {

    const retornaMaior = () => {
        funcaoPai(Math.max(...numeros));
    }

    return(
        <div>
            <button
                onClick={retornaMaior}
            >
                Calcular Maior
            </button>
        </div>
    )

}

export default FilhoA;