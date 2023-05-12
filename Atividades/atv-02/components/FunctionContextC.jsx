import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"
import { useContext } from "react"

const FunctionContextC = () => {
    const {bkgC} = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{backgroundColor:bkgC}}> Funcao C</h1>
            <FunctionContextD/>
        </div>


    )
}

export default FunctionContextC