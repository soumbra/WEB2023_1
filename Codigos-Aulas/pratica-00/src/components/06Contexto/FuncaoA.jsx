import FuncaoB from  "./FuncaoB"
import FuncaoC from  "./FuncaoC"

const FuncaoA = () => {

    const cor = "red";
    return (
        <div>
            <h1>Função A</h1>
            <FuncaoB />
            <FuncaoC />
        </div>
    )
}

export default FuncaoA;