const Filho = ({altura, peso}) => {
    
    const imc = (altura,peso) => {
        const imc = peso/(altura*altura);
        let resultado = "";
        if (imc < 18) {
            resultado = <h3>Abaixo do peso</h3>
        } else if(imc > 25) {
            resultado = <h3>Acima do peso</h3>
        } else {
            resultado = <h3>Peso Ideal</h3>
        }
        
        return resultado;
    }

    return (
        <div>
            <h1>O seu imc está: {imc(altura, peso)}</h1>
        </div>
    )
}

export default Filho