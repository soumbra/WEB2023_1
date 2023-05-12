import { useDispatch } from "react-redux"
import { decrementarValor } from "./slices/idSlice"

const BotaoDecrementarValor = () => {
    const dispatch = useDispatch()
    let valor = 10

    return (
        <>
            <button onClick={()=>dispatch(decrementarValor(valor))}>
                ID - 10
            </button>    
        </>
    )
}

export default BotaoDecrementarValor